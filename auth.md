1️⃣ IMPLEMENT PRISMA SCHEMA (FOUNDATION)

This is the source of truth. If this is clean, everything else obeys.

What you do

Inside api/ (or backend/ if you rename later):

npm install prisma @prisma/client
npx prisma init


Core models only (minimum viable dominance):

User

ConsultantProfile (linked to User)

Session / Booking

Message / Inquiry

Key idea

ONE User table

role decides everything: ADMIN | CONSULTANT | USER

Consultants are users with an attached profile

Admins are users with elevated role

No frontend touched. No UI bullshit. Just data law.

2️⃣ WRITE AUTH API ROUTES (THE BRAIN)

Now we teach the system who the hell someone is.

Routes to implement (Express):

POST /auth/register

POST /auth/login

POST /auth/logout

GET /auth/me

Logic

Hash passwords (bcrypt)

Validate credentials

Issue JWT (access token)

Store refresh token (httpOnly cookie)

Return { id, name, role }

This is pure backend muscle.
Frontend still untouched. Calm. Controlled.

3️⃣ DROP IN NEXT.JS MIDDLEWARE (THE GATEKEEPER)

Now we enforce power.

What middleware does

Reads JWT

Verifies session

Extracts role

Blocks or allows route access

Rules

/admin/** → ADMIN only

/consultant/** → CONSULTANT only

/user/** → USER only

Anyone stepping out of line gets kicked to /login.

This is where your app stops being a toy and starts acting like a sovereign state.

4️⃣ WIRE LOGIN → REDIRECT → DASHBOARD (THE EXPERIENCE)

Only now do we touch the frontend.

Flow

User logs in

Backend returns role

Frontend logic:

ADMIN → /admin

CONSULTANT → /consultant

USER → /user

Navbar state updates:

“Sign In” → “My Profile”

Icon reflects role

Three dashboards.
One login.
Zero confusion.