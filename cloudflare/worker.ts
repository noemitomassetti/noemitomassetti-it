/**
 * Cloudflare Workers Free-compatible NoeTom site entry point.
 * Public site remains unchanged until explicitly approved for domain migration.
 * No use of ChatGPT Plus allowance or user memory. OpenAI API is optional.
 */
import { createConciergeGateway, type ConciergeGatewayEnvironment } from "../api/concierge/chat.js";

type StaticAssets = { fetch(request: Request): Promise<Response> };
export type NoeTomCloudflareEnv = ConciergeGatewayEnvironment & {
  ASSETS: StaticAssets;
};

export default {
  async fetch(request: Request, env: NoeTomCloudflareEnv): Promise<Response> {
    const path = new URL(request.url).pathname;
    // API calls are explicitly routed to Worker via assets.run_worker_first.
    if (path === "/api/concierge/chat") {
      return createConciergeGateway(env).fetch(request);
    }
    if (path === "/api" || path.startsWith("/api/")) {
      return new Response(JSON.stringify({error:"NOT_FOUND"}),{
        status:404,
        headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"},
      });
    }
    // Normally static requests are served by Cloudflare before invoking Worker.
    return env.ASSETS.fetch(request);
  },
};
