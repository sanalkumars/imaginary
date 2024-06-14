import { clerkMiddleware ,createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
    '/',
    '/credits',
    '/profile',
    '/transformations'

])
const publicRoutes = createRouteMatcher([
  '/api/webhooks/clerk',   
]);

const publiRoutes =[ '/api/webhooks/clerk']

export default clerkMiddleware((auth , req) =>{
    if(protectedRoutes(req)) auth().protect();
    publiRoutes
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};