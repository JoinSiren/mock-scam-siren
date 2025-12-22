export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // If the request is for a static asset (has file extension), serve it normally
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|json|map|txt|webmanifest)$/)) {
    return context.next();
  }
  
  // Avoid rewriting the SPA fallback itself to prevent redirect loops
  if (url.pathname === '/200.html' || url.pathname === '/200') {
    return env.ASSETS.fetch(request);
  }

  // For all other routes (SPA routes), serve the SPA fallback directly
  const fallbackUrl = new URL('/200.html', url.origin);
  const rewrittenRequest = new Request(fallbackUrl, request);
  return env.ASSETS.fetch(rewrittenRequest);
}

