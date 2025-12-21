
## 🎛 ADMIN UI DASHBOARD – CURSOR INSTRUCTIONS

### GOAL

Create a **pure Admin UI dashboard** in **Next.js + Tailwind**, **NO backend logic**, **NO auth implementation yet**.
All data is mocked. Structure must be future-proof.

---
IMPORTANT INSTRUCTION:
FOR  ALL SECTIONS MENTIONED BELOW, IMPLEMENT THOSE THAT ARE NECESSARY AS EVIDENT IN THE PROJECT STRUCTURE AND ADD THOSE OMITTED.

## 1️⃣ ADMIN ROUTING

Tell Cursor:

> Create an `/admin` route using the App Router.
> All admin pages must live under `/app/admin`.

Create these routes:

* `/admin`
* `/admin/users`
* `/admin/consultants`
* `/admin/bookings`
* `/admin/messages`
* `/admin/content`
* `/admin/settings`

---

## 2️⃣ ADMIN LAYOUT (NON-NEGOTIABLE)

Tell Cursor:

> Create a persistent admin layout with:
>
> * Left sidebar navigation
> * Top header bar
> * Main content area
> * Responsive behavior
>   Use Tailwind only.
>   Preserve existing site colors and typography.

### Sidebar Navigation Items:

* Dashboard
* Users
* Consultants
* Bookings
* Messages
* Content
* Settings

Sidebar stays **fixed**.
Main content scrolls.

---

## 3️⃣ ADMIN DASHBOARD HOME (`/admin`)

Tell Cursor:

> Build the Admin Dashboard overview page with:
>
> * KPI cards (Total Users, Consultants, Bookings, Messages)
> * Recent activity table (mocked)
> * Status badges
>   Use placeholder data.

No charts yet. Numbers only.

---

## 4️⃣ USERS MANAGEMENT UI

Route: `/admin/users`

Tell Cursor:

> Build a users management table with:
>
> * Name
> * Email
> * Role
> * Status
> * Actions (View, Suspend, Delete)
>   Use mock data.
>   Add a reusable table component.

---

## 5️⃣ CONSULTANT MANAGEMENT UI

Route: `/admin/consultants`

Tell Cursor:

> Build a consultant management page with:
>
> * Profile summary cards
> * Status (Pending / Approved / Rejected)
> * Action buttons (Approve, Reject, View Profile)
>   Add a consultant detail modal (UI only).

---

## 6️⃣ BOOKINGS UI

Route: `/admin/bookings`

Tell Cursor:

> Build a bookings management table with:
>
> * User
> * Consultant
> * Date
> * Status
> * Actions (View, Update Status)
>   Status must be color-coded.

---

## 7️⃣ MESSAGES UI

Route: `/admin/messages`

Tell Cursor:

> Build a message inbox layout:
>
> * Left list of messages
> * Right message preview panel
> * Mark as read/unread
>   Mock all data.

---

## 8️⃣ CONTENT MANAGEMENT UI (LIGHT CMS)

Route: `/admin/content`

Tell Cursor:

> Build a content management UI for:
>
> * Services
> * Programs
> * Blog posts
>   Each item must support:
> * Create
> * Edit
> * Delete
>   Use modals or drawer panels.

This replaces WordPress.
Simple. Controlled. Surgical.

---

## 9️⃣ SETTINGS UI

Route: `/admin/settings`

Tell Cursor:

> Build a settings page with:
>
> * System placeholders
> * Role permissions (UI only)
> * Admin profile section
>   No logic yet.

---

## 🔟 COMPONENT RULES

Tell Cursor:

> All UI elements must be reusable components:
>
> * Sidebar
> * Header
> * Table
> * Modal
> * Status badge
>   Use Tailwind only.
>   No external UI libraries.

---

## 1️⃣1️⃣ DATA HANDLING (FOR NOW)

Tell Cursor:

> Use local mock data files for all admin pages.
> Structure code so API calls can replace mock data later without refactoring UI.

---

## 🧠 IMPORTANT (DO NOT SCREW THIS UP)

* NO authentication logic yet
* NO API calls
* NO database
* UI must assume admin is already authenticated
* Everything must be visually consistent with existing site branding

---

