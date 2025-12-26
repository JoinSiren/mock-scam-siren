export async function onRequest(context) {
    const url = new URL(context.request.url);
  
    // Let real files through (assets)
    if (url.pathname.includes(".")) {
      return context.next();
    }
  
    const res = await context.next();
    if (res.status !== 404) return res;
  
    url.pathname = "/200.html";
    return context.env.ASSETS.fetch(new Request(url.toString(), context.request));
  }
  