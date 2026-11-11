import { describe, expect, it } from 'vitest';
import worker, {type NoeTomCloudflareEnv} from '../../cloudflare/worker';

const makeEnv = (extra: Partial<NoeTomCloudflareEnv> = {}): NoeTomCloudflareEnv => ({
  ASSETS:{fetch:async()=>new Response('<html>Website</html>',{headers:{'Content-Type':'text/html'}})},
  ...extra,
});

describe('Cloudflare free-tier deployment adapter',()=>{
  it('serves multilingual site pages via static assets without invoking OpenAI',async()=>{
    const res=await worker.fetch(new Request('https://noetom-preview.example/it/servizi'),makeEnv());
    expect(res.status).toBe(200);
    expect(await res.text()).toContain('Website');
  });

  it('answers the AI configuration probe without an API key or cost',async()=>{
    const res=await worker.fetch(new Request('https://noetom-preview.example/api/concierge/chat'),makeEnv());
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({enabled:false,mode:'guided',provider:null});
  });

  it('does not call a model without OpenAI billing, even on a POST',async()=>{
    const res=await worker.fetch(new Request('https://noetom-preview.example/api/concierge/chat',{
      method:'POST',
      headers:{origin:'https://noetom-preview.example','content-type':'application/json'},
      body:JSON.stringify({lang:'it',userMessage:'Buongiorno',aiConsent:true}),
    }),makeEnv());
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe('AI_UNAVAILABLE');
  });

  it('does not leak unknown API routes into SPA homepage',async()=>{
    const res=await worker.fetch(new Request('https://noetom-preview.example/api/private-clients'),makeEnv());
    expect(res.status).toBe(404);
    expect((await res.json()).error).toBe('NOT_FOUND');
  });
});
