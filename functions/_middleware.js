export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // If the request is for a static asset (has file extension), serve it normally
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|json|map|txt|webmanifest)$/)) {
    return context.next();
  }

  // For SPA routes, serve index.html directly
  return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
}

