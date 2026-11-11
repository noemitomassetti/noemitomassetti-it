import {afterEach, describe, expect, it, vi} from 'vitest';
import gateway from '../../api/concierge/chat';

const ORIGINAL_KEY=process.env.GEMINI_API_KEY;
const ORIGINAL_ENABLED=process.env.AI_CONCIERGE_ENABLED;
const ORIGINAL_MODEL=process.env.GEMINI_MODEL;
let ip=20;

const makeRequest = (body:unknown,opts?:{origin?:string,consent?:boolean,method?:string}) => {
  return new Request('https://preview.example/api/concierge/chat',{
    method:opts?.method||'POST',
    headers:{
      'content-type':'application/json',
      'origin':opts?.origin||'https://preview.example',
      'host':'preview.example',
      'x-forwarded-for':'192.0.2.'+(ip++),
    },
    body:JSON.stringify(body),
  });
};
const sample=(userMessage:string,aiConsent=true)=>({userMessage,aiConsent,lang:'en',conversationHistory:[]});

afterEach(()=>{
  vi.restoreAllMocks();
  if(ORIGINAL_KEY===undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY=ORIGINAL_KEY;
  if(ORIGINAL_ENABLED===undefined) delete process.env.AI_CONCIERGE_ENABLED; else process.env.AI_CONCIERGE_ENABLED=ORIGINAL_ENABLED;
  if(ORIGINAL_MODEL===undefined) delete process.env.GEMINI_MODEL; else process.env.GEMINI_MODEL=ORIGINAL_MODEL;
});

describe('Server-only generative assistant gateway',()=>{
  it('returns a non-sensitive disabled status without credentials',async()=>{
    delete process.env.GEMINI_API_KEY;
    delete process.env.AI_CONCIERGE_ENABLED;
    const res=await gateway.fetch(new Request('https://preview.example/api/concierge/chat'));
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({enabled:false,mode:'guided',requiresConsent:true});
  });
  it('never calls a model when user has not consented',async()=>{
    process.env.GEMINI_API_KEY='fake-local-test-key';
    process.env.AI_CONCIERGE_ENABLED='true';
    const mock=vi.spyOn(globalThis,'fetch');
    const res=await gateway.fetch(makeRequest(sample('I need secretarial support',false)));
    expect(res.status).toBe(403);
    expect((await res.json()).error).toBe('AI_CONSENT_REQUIRED');
    expect(mock).not.toHaveBeenCalled();
  });
  it('rejects cross-site requests before model processing',async()=>{
    process.env.GEMINI_API_KEY='fake-local-test-key';
    process.env.AI_CONCIERGE_ENABLED='true';
    const res=await gateway.fetch(makeRequest(sample('Hello'),{origin:'https://attacker.invalid'}));
    expect(res.status).toBe(403);
  });
  it('keeps excluded customer-acquisition work on deterministic scope rules',async()=>{
    process.env.GEMINI_API_KEY='fake-local-test-key';
    process.env.AI_CONCIERGE_ENABLED='true';
    const mock=vi.spyOn(globalThis,'fetch');
    const res=await gateway.fetch(makeRequest(sample('Can you do cold calling and lead generation?')));
    const json=await res.json();
    expect(json).toMatchObject({scopeExcluded:true,isAiGenerated:false});
    expect(mock).not.toHaveBeenCalled();
  });
  it('generates constrained text server-side, with no secret passed back',async()=>{
    process.env.GEMINI_API_KEY='fake-local-test-key';
    process.env.AI_CONCIERGE_ENABLED='true';
    const mock=vi.spyOn(globalThis,'fetch').mockImplementation(async (url, options)=>{
      expect(String(url)).toContain('generativelanguage.googleapis.com');
      const opts=options as RequestInit;
      expect((opts.headers as Record<string,string>)['x-goog-api-key']).toBe('fake-local-test-key');
      const body=JSON.parse(opts.body as string);
      expect(body.systemInstruction.parts[0].text).toContain('Noemi');
      return new Response(JSON.stringify({candidates:[{content:{parts:[{text:'I can help prepare a tailored brief. What kind of support do you need?'}]}}]}),{status:200});
    });
    const res=await gateway.fetch(makeRequest(sample('Can you organise my existing customer email enquiries?')));
    const data=await res.json();
    expect(data.isAiGenerated).toBe(true);
    expect(data.replyText).toContain('tailored brief');
    expect(JSON.stringify(data)).not.toContain('fake-local-test-key');
    expect(mock).toHaveBeenCalledTimes(1);
  });
  it('does not display generated numerical quotes or invented sites',async()=>{
    process.env.GEMINI_API_KEY='fake-local-test-key';
    process.env.AI_CONCIERGE_ENABLED='true';
    vi.spyOn(globalThis,'fetch').mockResolvedValue(new Response(JSON.stringify({candidates:[{content:{parts:[{text:'The price will be €1.50/word. See https://invalid.example'}]}}]}),{status:200}));
    const res=await gateway.fetch(makeRequest(sample('Can you help me with translation?')));
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe('AI_REPLY_REQUIRES_REVIEW');
  });
});
