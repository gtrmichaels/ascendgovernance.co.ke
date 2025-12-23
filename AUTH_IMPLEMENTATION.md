# Authentication Implementation Summary

## Overview

Authentication has been implemented according to `auth.md` specifications with the following structure:

## Architecture

### 1. Database Schema (Prisma)
- **Location**: `api/prisma/schema.prisma`
- **Models**:
  - `User`: Single table with role (ADMIN | CONSULTANT | USER)
  - `ConsultantProfile`: Linked to User for consultants
  - `Booking`: Sessions between users and consultants
  - `Message`: Communication between users

### 2. API Server (Express)
- **Location**: `api/server.js` and `api/routes/auth.js`
- **Routes**:
  - `POST /auth/register` - Register new user (supports userType: 'user' or 'consultant')
  - `POST /auth/login` - Login user
  - `POST /auth/logout` - Logout user
  - `GET /auth/me` - Get current user info
- **Features**:
  - Password hashing with bcrypt
  - JWT access tokens (15min expiry)
  - Refresh tokens in httpOnly cookies (7 days)
  - Role-based user creation

### 3. Next.js Middleware
- **Location**: `main/middleware.ts`
- **Protection Rules**:
  - `/admin/**` → ADMIN only
  - `/consultant/**` → CONSULTANT only
  - `/user/**` → USER only
- **Public Routes**: `/`, `/homepage`, `/services`, `/research`, `/contact`, `/signin`, `/register/**`
- **Behavior**: Redirects unauthorized users to `/signin` with redirect parameter

### 4. Frontend Integration
- **Sign In Page**: `main/app/signin/page.tsx`
  - Calls `POST /auth/login`
  - Redirects based on role:
    - ADMIN → `/admin`
    - CONSULTANT → `/consultant`
    - USER → `/user`
- **Registration Pages**:
  - `/register` - Choice page (consultant vs user)
  - `/register/consultant` - Consultant registration with guide
  - `/register/user` - User registration
- **Auth Utilities**: `main/app/lib/auth.ts`
  - Token management
  - User state management
  - Dashboard path helpers

### 5. Navbar Updates
- **Location**: `main/app/navbar/navbar.tsx`
- Shows user dashboard link when authenticated
- Shows "Sign In" when not authenticated
- Sign out functionality

## Naming Conventions

- **Frontend**: Uses `/signin` (not `/login`)
- **API**: Uses `/auth/login` (as per auth.md)
- **Roles**: ADMIN | CONSULTANT | USER (uppercase)
- **User Type**: 'user' | 'consultant' (lowercase, for registration)

## Setup Instructions

### 1. API Server Setup
```bash
cd api
npm install
cp .env.example .env
# Edit .env with your DATABASE_URL and JWT secrets
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

### 2. Frontend Setup
```bash
cd main
npm install
# The middleware will automatically protect routes
npm run dev
```

## Environment Variables

### API (.env)
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
JWT_REFRESH_SECRET="your-refresh-secret-key"
PORT=3001
FRONTEND_URL="http://localhost:3000"
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL="http://localhost:3001"
JWT_SECRET="your-secret-key" # Must match API
```

## Flow

1. **Registration**:
   - User chooses role (consultant or user) at `/register`
   - Fills form → API creates user with appropriate role
   - Consultant gets `ConsultantProfile` with PENDING status
   - User redirected to their dashboard

2. **Login**:
   - User enters credentials at `/signin`
   - API validates → returns JWT + user info
   - Frontend stores token + redirects based on role

3. **Route Protection**:
   - Middleware checks token on protected routes
   - Verifies role matches route requirement
   - Redirects unauthorized users to `/signin`

4. **Session Management**:
   - Access token in localStorage (for API calls)
   - Access token in cookie (for middleware)
   - Refresh token in httpOnly cookie (for token refresh - to be implemented)

## Next Steps

1. Implement token refresh mechanism
2. Add password reset functionality
3. Add email verification
4. Implement consultant profile update after approval
5. Add file upload handling for consultant registration

