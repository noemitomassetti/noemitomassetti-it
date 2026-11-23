import type { ConciergeAiRequest, ConciergeAiResponse } from './types';

/**
 * The public site never calls a model provider directly.
 * Requests go to a same-origin Vercel Function. Consent is required for each
 * conversation before any visitor input may reach that function's AI provider.
 */
const ENDPOINT='/api/concierge/chat';

export function isAiConciergeEnabled():boolean {
  // Client support exists, but activation is checked live on the server.
  // This does NOT imply the model provider is configured.
  return true;
}

/** Check provider configuration without transmitting a visitor's messages. */
export async function getAiConciergeAvailability():Promise<boolean>{
  try {
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),3000);
    try {
      const response=await fetch(ENDPOINT,{method:'GET',credentials:'same-origin',cache:'no-store',signal:controller.signal});
      if(!response.ok)return false;
      const data=await response.json();
      return data?.enabled===true && data?.requiresConsent===true;
    }finally{clearTimeout(timeout);}
  }catch{return false;}
}

/** Returns a safe fallback if consent, credentials, quota or connectivity is absent. */
export async function queryAiConcierge(request:ConciergeAiRequest):Promise<ConciergeAiResponse>{
  if(request.aiConsent!==true){
    return {replyText:'',isAiGenerated:false,fallbackReason:'AI_CONSENT_REQUIRED'};
  }
  try {
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),12000);
    try {
      const response=await fetch(ENDPOINT,{
        method:'POST',
        headers:{'Content-Type':'application/json',Accept:'application/json'},
        credentials:'same-origin',
        body:JSON.stringify({
          userMessage:request.userMessage.slice(0,950),
          conversationHistory:request.conversationHistory.slice(-4).map(h=>({role:h.role,content:h.content.slice(0,550)})),
          lang:request.lang,
          currentService:request.currentService,
          aiConsent:true,
        }),
        signal:controller.signal,
      });
      if(!response.ok)return {replyText:'',isAiGenerated:false,fallbackReason:'GATEWAY_UNAVAILABLE'};
      const data=await response.json() as ConciergeAiResponse;
      if(data.isAiGenerated!==true||typeof data.replyText!=='string'||!data.replyText.trim()){
        return {replyText:'',isAiGenerated:false,fallbackReason:'AI_NOT_GENERATED'};
      }
      return {replyText:data.replyText.trim().slice(0,1800),isAiGenerated:true};
    }finally{clearTimeout(timeout);}
  }catch{
    return {replyText:'',isAiGenerated:false,fallbackReason:'GATEWAY_UNAVAILABLE'};
  }
}
