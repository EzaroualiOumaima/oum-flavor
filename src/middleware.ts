import { authMiddleware } from "@clerk/nextjs";
import env from "dotenv"
env.config
const {BASE_URL} = process.env
//  
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ["/api/dishes"]
  publicRoutes: [`${BASE_URL}/api/reviews`, `${BASE_URL}/api/contactus` ,`${BASE_URL}/api/dishes`, `${BASE_URL}/api/reservations`, `${BASE_URL}/api/reviews`],
});
 
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    '/dashboard(.)',
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.)"
  ]
};