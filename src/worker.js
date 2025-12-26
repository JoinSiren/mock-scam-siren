export default {
    async fetch(request, env) {
      // Try to serve the static asset first
      let res = await env.ASSETS.fetch(request);
  
      // If not found, fall back to index.html (SPA)
      if (res.status === 404) {
        const url = new URL(request.url);
        res = await env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
      }
  
      return res;
    },
  };