import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('ERROR: JWT_SECRET is not set in environment variables');
  throw new Error('JWT_SECRET is required');
}

// #region agent log
// Log secret info at module load (this runs once when middleware is loaded)
const secretInfo = {
  location: 'middleware.ts:5',
  message: 'JWT_SECRET loaded in middleware',
  data: {
    hasSecret: !!JWT_SECRET,
    secretLength: JWT_SECRET?.length,
    secretPrefix: JWT_SECRET?.substring(0, 20),
    usingEnv: !!process.env.JWT_SECRET
  },
  timestamp: Date.now(),
  sessionId: 'debug-session',
  runId: 'run2',
  hypothesisId: 'A'
};
// Note: Can't use fetch here as this is module-level code, but we'll log it in the middleware function
// #endregion

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

  // #region agent log
  const logData = { pathname, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run2' };
  try {
    await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...logData, location: 'middleware.ts:30', message: 'Middleware entry', data: { secretLength: JWT_SECRET.length, usingEnv: !!process.env.JWT_SECRET }, hypothesisId: 'D' })
    }).catch(() => {});
  } catch {}
  // #endregion

  // Allow public routes
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(route + '/'))) {
    // #region agent log
    try {
      await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...logData, location: 'middleware.ts:35', message: 'Public route, allowing', hypothesisId: 'D' })
      }).catch(() => {});
    } catch {}
    // #endregion
    return NextResponse.next();
  }

  // Check protected routes
  for (const [route, requiredRole] of Object.entries(protectedRoutes)) {
    if (pathname.startsWith(route)) {
      // #region agent log
      try {
        await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...logData, location: 'middleware.ts:42', message: 'Protected route detected', data: { route, requiredRole }, hypothesisId: 'D' })
        }).catch(() => {});
      } catch {}
      // #endregion
      
      // Get token from cookie (set by frontend after login)
      // In Next.js middleware, we check cookies set by the client
      const token = request.cookies.get('accessToken')?.value;
      
      // #region agent log
      try {
        await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...logData, location: 'middleware.ts:48', message: 'Cookie check', data: { hasToken: !!token, tokenLength: token?.length, allCookies: Array.from(request.cookies.getAll()).map(c => c.name) }, hypothesisId: 'D' })
        }).catch(() => {});
      } catch {}
      // #endregion
      
      // Also check Authorization header for API requests
      const authHeader = request.headers.get('authorization');
      const headerToken = authHeader?.startsWith('Bearer ') 
        ? authHeader.substring(7)
        : null;
      
      const accessToken = token || headerToken;

      if (!accessToken) {
        // #region agent log
        try {
          await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...logData, location: 'middleware.ts:58', message: 'No token found, redirecting to signin', hypothesisId: 'D' })
          }).catch(() => {});
        } catch {}
        // #endregion
        // Redirect to signin if no token
        const signinUrl = new URL('/signin', request.url);
        signinUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(signinUrl);
      }

      try {
        // #region agent log
        try {
          await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...logData, location: 'middleware.ts:114', message: 'About to verify token', data: { tokenLength: accessToken.length, tokenPrefix: accessToken.substring(0, 20), hasSecret: !!JWT_SECRET, secretLength: JWT_SECRET?.length, secretPrefix: JWT_SECRET?.substring(0, 20), secretSuffix: JWT_SECRET?.substring(JWT_SECRET.length - 20) }, hypothesisId: 'C' })
          }).catch(() => {});
        } catch {}
        // #endregion
        
        // Verify token using jose (Edge runtime compatible)
        const { payload } = await jwtVerify(accessToken, secret);
        const decoded = payload as { userId: string; role: string };

        // #region agent log
        try {
          await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...logData, location: 'middleware.ts:125', message: 'Token verified successfully', data: { decodedRole: decoded.role, requiredRole, userId: decoded.userId }, hypothesisId: 'C' })
          }).catch(() => {});
        } catch {}
        // #endregion

        // Check role
        if (decoded.role !== requiredRole) {
          // #region agent log
          try {
            await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...logData, location: 'middleware.ts:78', message: 'Role mismatch, redirecting', data: { decodedRole: decoded.role, requiredRole }, hypothesisId: 'E' })
            }).catch(() => {});
          } catch {}
          // #endregion
          // Redirect to appropriate dashboard based on role
          const dashboardMap: Record<string, string> = {
            ADMIN: '/admin',
            CONSULTANT: '/consultant',
            USER: '/user',
          };
          const dashboard = dashboardMap[decoded.role] || '/signin';
          return NextResponse.redirect(new URL(dashboard, request.url));
        }

        // #region agent log
        try {
          await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...logData, location: 'middleware.ts:95', message: 'Access granted, allowing request', data: { role: decoded.role }, hypothesisId: 'E' })
          }).catch(() => {});
        } catch {}
        // #endregion

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
        // #region agent log
        try {
          await fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...logData, location: 'middleware.ts:180', message: 'Token verification failed', data: { error: error instanceof Error ? error.message : String(error), errorName: error instanceof Error ? error.name : 'Unknown', hasSecret: !!JWT_SECRET, secretLength: JWT_SECRET?.length, secretPrefix: JWT_SECRET?.substring(0, 20), secretSuffix: JWT_SECRET?.substring(JWT_SECRET.length - 20), tokenLength: accessToken.length, tokenPrefix: accessToken.substring(0, 20) }, hypothesisId: 'C' })
          }).catch(() => {});
        } catch {}
        // #endregion
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

