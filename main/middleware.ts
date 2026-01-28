import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-in-production';

if (!process.env.JWT_SECRET) {
  console.warn('WARNING: JWT_SECRET is not set in environment variables. Using default secret.');
}

const secret = new TextEncoder().encode(JWT_SECRET);

// Routes that don't require authentication
const publicRoutes = [
  '/',
  '/homepage',
  '/services',
  '/research',
  '/contact',
  '/signin',
  '/register',
  '/register/consultant',
  '/register/user',
  '/api',
];

// Protected routes and their required roles
const protectedRoutes = {
  '/admin': 'ADMIN',
  '/consultant': 'CONSULTANT',
  '/user': 'USER',
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(route + '/'))) {
    return NextResponse.next();
  }

  // Check protected routes
  for (const [route, requiredRole] of Object.entries(protectedRoutes)) {
    if (pathname.startsWith(route)) {
      // Get token from cookie (set by frontend after login)
      // In Next.js middleware, we check cookies set by the client
      const token = request.cookies.get('accessToken')?.value;
      
      // Also check Authorization header for API requests
      const authHeader = request.headers.get('authorization');
      const headerToken = authHeader?.startsWith('Bearer ') 
        ? authHeader.substring(7)
        : null;
      
      const accessToken = token || headerToken;

      if (!accessToken) {
        // Redirect to signin if no token
        const signinUrl = new URL('/signin', request.url);
        signinUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(signinUrl);
      }

      try {
        // Verify token using jose (Edge runtime compatible)
        const { payload } = await jwtVerify(accessToken, secret);
        const decoded = payload as { userId: string; role: string };

        // Check role
        if (decoded.role !== requiredRole) {
          // Redirect to appropriate dashboard based on role
          const dashboardMap: Record<string, string> = {
            ADMIN: '/admin',
            CONSULTANT: '/consultant',
            USER: '/user',
          };
          const dashboard = dashboardMap[decoded.role] || '/signin';
          return NextResponse.redirect(new URL(dashboard, request.url));
        }

        // Add user info to headers for use in pages
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', decoded.userId);
        requestHeaders.set('x-user-role', decoded.role);

        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });
      } catch (error) {
        // Invalid token - clear it and redirect to signin
        const signinUrl = new URL('/signin', request.url);
        signinUrl.searchParams.set('redirect', pathname);
        signinUrl.searchParams.set('error', 'session_expired');
        
        // Create response with cookie clearing
        const response = NextResponse.redirect(signinUrl);
        response.cookies.delete('accessToken');
        response.cookies.delete('refreshToken');
        return response;
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

