# EduSphere — college ERP website

The public site and the staff/student portals for **EduSphere Institute of Technology**,
rebuilt in a premium warm-luxury glassmorphism style. Plain HTML, CSS and one
JavaScript file — no build step, no dependencies.

**Live:** https://bongcoder09x.github.io/EduSphere/

## Iconography and logo

The crest (`assets/logo.svg`) is drawn as a vector shield with a gold monogram and
laurel, used in the navbar, the footer and as the favicon. Icons come from the Lucide
set and are inlined as an SVG sprite in every page, so they need no network request,
scale cleanly and inherit the surrounding text colour.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Navy | `#06294B` | navigation, headings, primary actions |
| Blue | `#0B5FA5` | secondary actions, links, charts |
| Gold | `#E6A000` | accents, highlights, active nav |
| Background | `#F5F8FC` | page background |
| Card | `#FFFFFF` | cards and panels |
| Text | `#10243A` | body copy |
| Muted | `#64748B` | secondary text |
| Border | `#E2E8F0` | borders and dividers |
| Success / Error | `#15803D` / `#DC2626` | status badges |

Clean white cards with soft shadows, 14px radii and subtle borders; a navy navigation
bar; Inter throughout; controlled glassmorphism on the overlay surfaces; and a full
motion system — page entrance, staggered scroll reveal, card tilt, counters, button
shine and ripple, with `prefers-reduced-motion` respected. Everything collapses to a single column
below 720px.

## What actually works

The site is static, so the data layer runs in the browser: seed records live in
`assets/app.js` and user input is kept in `localStorage`. No server is involved.

- **Admission wizard** — seven steps, per-step validation, autosave to the browser,
  progress bar, review step and a simulated payment that returns an application number
- **Result lookup** — roll number against published sample results, with subject table and SGPA ring
- **Certificate verification** — code checked against an issue register
- **Notice board** — live search and category tabs
- **Programme catalogue** — search, level filter, sort by tuition or intake
- **Student portal** — computed attendance ring, subject bars, fee selection, total and receipt modal
- **Parent portal** — child switcher, approvals, attendance, fees and bus ETA
- **Faculty portal** — attendance session with per-student marking, live counters and a
  gradebook whose totals, average and pass rate recalculate as you type
- **Admin console** — student table with search, programme filters, column sorting and
  an admissions pipeline view
- **Finance, library, hostel, transport, exam cell, campus and group consoles** — working
  tables, filters and action buttons

Forms that would need a backend (payments, uploads, submissions) simulate the result
and say so in a note.

## Pages

Public: `index`, `overview`, `academic`, `admission`, `notices`, `exam` (results),
`verify`, `students`, `research`, `iqac`, `feedback`, `career`, `contact`, `gallery`,
`login`, `architecture`, `404`.

Portals and consoles: `student-portal`, `parent-portal`, `faculty-console`,
`admin-console`, `exam-cell`, `finance`, `library`, `hostel`, `transport`,
`campus-admin`, `group-admin`.

## Placeholder data

Every figure, name and record is sample data — student counts, marks, fees, results
and certificates included. Before real use: replace the institutional details, connect
the forms to a backend, add a privacy notice wherever personal data is collected, and
replace the gallery placeholders with real photographs.

## Running locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. Deployment is GitHub Pages from the root of `main`.
