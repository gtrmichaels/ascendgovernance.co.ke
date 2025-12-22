GOAL

Create a Consultant-facing dashboard in Next.js + Tailwind, visually consistent with Ascend Governance, scoped to consultant-only capabilities.

All routes under /consultant.

1️⃣ CONSULTANT ROUTING

Tell Cursor:

Create a /consultant route using the App Router.
All consultant pages must live under /app/consultant.

Create these routes:

/consultant

/consultant/profile

/consultant/bookings

/consultant/sessions

/consultant/messages

/consultant/documents

/consultant/settings

2️⃣ CONSULTANT LAYOUT

Tell Cursor:

Create a persistent consultant layout with:

Left sidebar navigation

Top header with profile avatar & status badge

Main content area

Responsive behavior
Preserve Ascend Governance branding and styling.

Sidebar Navigation:

Dashboard

Profile

Bookings

Sessions

Messages

Documents

Settings

Sidebar fixed. Content scrolls.

3️⃣ CONSULTANT DASHBOARD HOME (/consultant)

Tell Cursor:

Build the Consultant Dashboard overview page with:

KPI cards (Upcoming Sessions, Total Clients, Pending Requests)

Availability status toggle (UI only)

Recent activity list
Use mocked consultant data.

This is the consultant’s daily command view.

4️⃣ CONSULTANT PROFILE UI

Route: /consultant/profile

Tell Cursor:

Build a detailed consultant profile page with:

Personal details

Areas of expertise

Bio and credentials

Profile photo upload UI (no logic)

Verification status badge
Editable sections using inline edit or modal.

This must look premium and professional.

5️⃣ BOOKINGS UI

Route: /consultant/bookings

Tell Cursor:

Build a bookings management table for consultants:

Client name

Requested service

Date & time

Status (Pending / Confirmed / Completed)

Actions (Accept, Decline, View)
Use status color badges.

6️⃣ SESSIONS UI

Route: /consultant/sessions

Tell Cursor:

Build a sessions page showing:

Upcoming sessions

Past sessions

Session details modal
Include notes placeholder per session (UI only).

7️⃣ MESSAGES UI

Route: /consultant/messages

Tell Cursor:

Build a messaging inbox UI:

List of conversations

Message preview panel

Read/unread state

Reply input UI (disabled)
Mock all content.

8️⃣ DOCUMENTS UI

Route: /consultant/documents

Tell Cursor:

Build a documents management page:

Uploaded CV

Certifications

Reports

Upload / Replace UI
Show file status and last updated date.
No backend logic.

9️⃣ SETTINGS UI

Route: /consultant/settings

Tell Cursor:

Build a consultant settings page with:

Notification preferences (UI only)

Availability settings

Account preferences
No real persistence yet.

🔟 COMPONENT RULES

Tell Cursor:

Reuse components where possible:

Sidebar

Header

Tables

Status badges

Modals
Use Tailwind only.
No third-party UI frameworks.

🧠 KEY DESIGN PRINCIPLES

Consultants see only their own data

No admin-level controls

Everything assumes backend will be connected later

Layout must be calm, credible, and executive-grade