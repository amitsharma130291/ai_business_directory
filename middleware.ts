import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  // Public routes (NO auth)
  if (
    pathname.startsWith('/sign-in') ||
    pathname.startsWith('/sign-up')
  ) {
    return;
  }

  // Everything else requires auth
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url));

  }
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
  ],
};
