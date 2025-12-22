GOAL

Create a simple user dashboard for clients tracking their activity on Ascend Governance.

All routes under /user.

1️⃣ USER ROUTING

Tell Cursor:

Create a /user route using the Next.js App Router.
All user-facing dashboard pages must live under /app/user.

Create only these routes:

/user

/user/bookings

/user/messages

/user/profile

/user/settings

No more. Keep it tight.

2️⃣ USER LAYOUT

Tell Cursor:

Create a minimal dashboard layout with:

Top navigation bar (not sidebar)

Small profile menu (avatar + name)

Main content area
Responsive and clean.
Preserve Ascend Governance branding.

Top Nav Items:

Dashboard

My Bookings

Messages

Profile

3️⃣ USER DASHBOARD HOME (/user)

Tell Cursor:

Build a simple dashboard overview page showing:

Next scheduled consultation

Total consultations booked

Account status

Quick “Book Consultation” CTA
Use mocked data only.

This page should feel reassuring, not busy.

4️⃣ BOOKINGS PAGE

Route: /user/bookings

Tell Cursor:

Build a bookings history page with:

Date

Consultant name

Service type

Status
Read-only table.
No edit actions.

Users observe. They don’t manage.

5️⃣ MESSAGES PAGE

Route: /user/messages

Tell Cursor:

Build a simple messaging UI:

Conversation list

Message view panel

Send message input UI
No advanced filters or controls.

6️⃣ PROFILE PAGE

Route: /user/profile

Tell Cursor:

Build a basic profile page:

Name

Email

Phone

Organization
Editable fields with save button UI only.

No professional credentials here. Keep it human.

7️⃣ SETTINGS PAGE

Route: /user/settings

Tell Cursor:

Build a lightweight settings page:

Notification preferences

Password change UI

Account deactivation button (disabled)

8️⃣ COMPONENT RULES

Tell Cursor:

Reuse shared components where possible.
Use fewer cards and lighter spacing than admin or consultant dashboards.
No data tables with actions.
No charts.

🧠 DESIGN PHILOSOPHY

Users track, not control

Fewer metrics

Clear status indicators

Strong CTAs where relevant

Admin = omniscience
Consultant = execution
User = clarity