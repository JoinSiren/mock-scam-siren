export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // If the request is for a static asset (has file extension), serve it normally
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|json|map|txt|webmanifest|html)$/)) {
    return context.next();
  }
  
  // For all other routes (SPA routes), serve index.html
  const indexUrl = new URL('/index.html', url.origin);
  const rewrittenRequest = new Request(indexUrl, request);
  return env.ASSETS.fetch(rewrittenRequest);
}

