export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // If the request is for a static asset (has file extension), serve it normally
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|json|map|txt|webmanifest)$/)) {
    return context.next();
  }
  
  // For all other routes (SPA routes), rewrite to the SPA fallback
  return context.next({
    rewrite: new URL('/200.html', url.origin)
  });
}

