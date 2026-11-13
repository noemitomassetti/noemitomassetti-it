import { afterEach, describe, expect, it, vi } from "vitest";
import gateway from "../../api/concierge/chat";
import worker from "../../cloudflare/worker";

/**
 * Zero-extra-cost launch mode: deliberately no OpenAI billing key or external AI calls.
 * This protects the real website's guided assistant when only ChatGPT Plus is present.
 */
const previousKey=process.env.OPENAI_API_KEY;
const previousEnabled=process.env.AI_CONCIERGE_ENABLED;
afterEach(()=>{
  vi.restoreAllMocks();
  if(previousKey===undefined)delete process.env.OPENAI_API_KEY;else process.env.OPENAI_API_KEY=previousKey;
  if(previousEnabled===undefined)delete process.env.AI_CONCIERGE_ENABLED;else process.env.AI_CONCIERGE_ENABLED=previousEnabled;
});

describe("NoeTom: zero-cost guided assistant remains safe",()=>{
  it("does not activate OpenAI without a separately provisioned API key",async()=>{
    delete process.env.OPENAI_API_KEY;
    delete process.env.AI_CONCIERGE_ENABLED;
    const mock=vi.spyOn(globalThis,"fetch");
    const res=await gateway.fetch(new Request("https://preview.example/api/concierge/chat"));
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({enabled:false,mode:"guided",provider:null});
    expect(mock).not.toHaveBeenCalled();
  });
  it("does not incur any API call even when an incoming visitor requests AI",async()=>{
    delete process.env.OPENAI_API_KEY;
    delete process.env.AI_CONCIERGE_ENABLED;
    const mock=vi.spyOn(globalThis,"fetch");
    const req=new Request("https://preview.example/api/concierge/chat",{
      method:"POST",
      headers:{"content-type":"application/json",origin:"https://preview.example"},
      body:JSON.stringify({userMessage:"Tell me about my translation quote",lang:"en",aiConsent:true}),
    });
    const res=await gateway.fetch(req);
    expect(res.status).toBe(503);
    expect((await res.json()).error).toBe("AI_UNAVAILABLE");
    expect(mock).not.toHaveBeenCalled();
  });
  it("Cloudflare Workers uses the same no-cost safe fallback without secrets",async()=>{
    const mock=vi.spyOn(globalThis,"fetch");
    const res=await worker.fetch(new Request("https://cloudflare-preview.example/api/concierge/chat"),{
      ASSETS:{fetch:async()=>new Response("Static site",{status:200})},
    });
    expect(await res.json()).toMatchObject({enabled:false,mode:"guided",provider:null});
    expect(mock).not.toHaveBeenCalled();
  });
});
