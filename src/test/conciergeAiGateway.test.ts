import { afterEach, describe, expect, it, vi } from 'vitest';
import gateway from '../../api/concierge/chat';

const INITIAL_KEY = process.env.OPENAI_API_KEY;
const INITIAL_ENABLED = process.env.AI_CONCIERGE_ENABLED;
const INITIAL_MODEL = process.env.OPENAI_MODEL;
let ip = 20;

const makeRequest = (body: unknown, origin = 'https://preview.example') => new Request(
  'https://preview.example/api/concierge/chat', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin,
      host: 'preview.example',
      'x-forwarded-for': '192.0.2.' + (ip++),
    },
    body: JSON.stringify(body),
  },
);

const sample = (userMessage: string, aiConsent = true, lang = 'en') =>
  ({ userMessage, aiConsent, lang, conversationHistory: [] });

const providerResponse = (text: string, status: string = 'completed') =>
  new Response(JSON.stringify({
    status,
    output: [{type:'message', content:[{type:'output_text', text}]}],
  }), { status: 200 });

const enableTestProvider = () => {
  process.env.OPENAI_API_KEY = 'fake-local-openai-key';
  process.env.AI_CONCIERGE_ENABLED = 'true';
  delete process.env.OPENAI_MODEL;
};

afterEach(() => {
  vi.restoreAllMocks();
  if (INITIAL_KEY === undefined) delete process.env.OPENAI_API_KEY; else process.env.OPENAI_API_KEY = INITIAL_KEY;
  if (INITIAL_ENABLED === undefined) delete process.env.AI_CONCIERGE_ENABLED; else process.env.AI_CONCIERGE_ENABLED = INITIAL_ENABLED;
  if (INITIAL_MODEL === undefined) delete process.env.OPENAI_MODEL; else process.env.OPENAI_MODEL = INITIAL_MODEL;
});

describe('OpenAI server-only generative assistant', () => {
  it('does not claim to be active when the API key is missing', async () => {
    delete process.env.OPENAI_API_KEY;
    delete process.env.AI_CONCIERGE_ENABLED;
    const res = await gateway.fetch(new Request('https://preview.example/api/concierge/chat'));
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({enabled:false,mode:'guided',requiresConsent:true,provider:null});
  });

  it('exposes availability without revealing the API key', async () => {
    enableTestProvider();
    const res = await gateway.fetch(new Request('https://preview.example/api/concierge/chat'));
    expect(await res.json()).toMatchObject({enabled:true,mode:'generative',provider:'openai'});
    expect(await res.text()).not.toContain('fake-local-openai-key');
  });

  it('blocks use of any external model without explicit visitor consent', async () => {
    enableTestProvider();
    const mock = vi.spyOn(globalThis,'fetch');
    const res = await gateway.fetch(makeRequest(sample('I need customer care',false)));
    expect(res.status).toBe(403);
    expect((await res.json()).error).toBe('AI_CONSENT_REQUIRED');
    expect(mock).not.toHaveBeenCalled();
  });

  it('rejects a mismatched site origin and does not call OpenAI', async () => {
    enableTestProvider();
    const mock = vi.spyOn(globalThis,'fetch');
    const res = await gateway.fetch(makeRequest(sample('Hello'), 'https://attacker.invalid'));
    expect(res.status).toBe(403);
    expect(mock).not.toHaveBeenCalled();
  });

  it('refuses excluded lead-generation requests using deterministic rules', async () => {
    enableTestProvider();
    const mock = vi.spyOn(globalThis,'fetch');
    const res = await gateway.fetch(makeRequest(sample('Can you do cold calling and lead generation?')));
    expect(await res.json()).toMatchObject({scopeExcluded:true,isAiGenerated:false});
    expect(mock).not.toHaveBeenCalled();
  });

  it('uses Responses API and public knowledge, never private memory or credentials', async () => {
    enableTestProvider();
    const mock=vi.spyOn(globalThis,'fetch').mockImplementation(async (url, options) => {
      expect(String(url)).toBe('https://api.openai.com/v1/responses');
      expect((options?.headers as Record<string,string>).Authorization).toBe('Bearer fake-local-openai-key');
      const body=JSON.parse(String(options?.body));
      expect(body.model).toBe('gpt-6-luna');
      expect(body.store).toBe(false);
      expect(body.tools).toEqual([]);
      expect(body.max_output_tokens).toBeLessThanOrEqual(500);
      expect(body.instructions).toContain('Noemi Tomassetti');
      expect(body.instructions).toContain('110 e lode');
      expect(body.instructions).toContain('25 € / ora');
      expect(body.instructions).toContain('prospecting');
      expect(body.instructions).toContain('fittizi');
      expect(body.input).toEqual([{role:'user',content:'Can you organise my existing customer email enquiries?'}]);
      expect(JSON.stringify(body)).not.toContain('fake-local-openai-key');
      return providerResponse('I can help with existing customer enquiries. Could you estimate the weekly volume?');
    });
    const res=await gateway.fetch(makeRequest(sample('Can you organise my existing customer email enquiries?')));
    const data=await res.json();
    expect(data.isAiGenerated).toBe(true);
    expect(data.replyText).toContain('existing customer');
    expect(JSON.stringify(data)).not.toContain('fake-local-openai-key');
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('redacts email addresses and telephone numbers before sending to OpenAI', async () => {
    enableTestProvider();
    vi.spyOn(globalThis,'fetch').mockImplementation(async (_url, options)=>{
      const body=JSON.parse(String(options?.body));
      const text=JSON.stringify(body.input);
      expect(text).not.toContain('giulia@example.com');
      expect(text).not.toContain('+39 333 1234567');
      expect(text).toContain('[email omitted]');
      expect(text).toContain('[phone/number omitted]');
      return providerResponse('I can help organise your inbox.');
    });
    const res=await gateway.fetch(makeRequest(sample('Email giulia@example.com, phone +39 333 1234567. Can you organise incoming enquiries?')));
    expect(res.status).toBe(200);
  });

  it('rejects invented numeric prices and external links in generated text', async () => {
    enableTestProvider();
    vi.spyOn(globalThis,'fetch').mockResolvedValue(providerResponse('The price is €1.50 per word. See https://invalid.example'));
    const res=await gateway.fetch(makeRequest(sample('Can you help with translation?')));
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe('AI_REPLY_REQUIRES_REVIEW');
  });

  it('fails closed on API quota, incomplete answers and provider failures', async () => {
    enableTestProvider();
    const mock=vi.spyOn(globalThis,'fetch');
    mock.mockResolvedValueOnce(new Response('quota exceeded',{status:429}));
    const q=await gateway.fetch(makeRequest(sample('Please tell me about secretarial support')));
    expect(q.status).toBe(503);
    expect((await q.json()).error).toBe('AI_RATE_LIMITED');

    mock.mockResolvedValueOnce(providerResponse('Unfinished answer','incomplete'));
    const i=await gateway.fetch(makeRequest(sample('Please tell me about customer care')));
    expect(i.status).toBe(503);
    expect((await i.json()).error).toBe('AI_INCOMPLETE_RESPONSE');
  });

  it.each(['it','en','fr','es'])('passes the approved output language %s to the server model',async lang=>{
    enableTestProvider();
    vi.spyOn(globalThis,'fetch').mockImplementation(async (_url,options)=>{
      const body=JSON.parse(String(options?.body));
      const label={it:'Italiano',en:'British English',fr:'Français',es:'Español'} as const;
      expect(body.instructions).toContain(label[lang as keyof typeof label]);
      return providerResponse('Please use the contact form to submit a written enquiry.');
    });
    const res=await gateway.fetch(makeRequest(sample('Vorrei informazioni sui servizi',true,lang)));
    expect(res.status).toBe(200);
  });
});
