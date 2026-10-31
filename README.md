# EduSphere — college website

Website for **EduSphere Institute of Technology**, built to the reference design:
navy utility header, gold navigation bar with dropdowns, red/white action buttons,
five-card statistics strip, notice & news board, online admission block, partner
websites strip and a striped multi-column footer.

Plain HTML, CSS and one small JavaScript file — no framework, no build step.

**Live:** https://bongcoder09x.github.io/EduSphere/

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — banner, stats, notice board, academic buttons, online admission, important websites, gallery link, module strip |
| `overview.html` | History, vision, leadership, campus |
| `academic.html` | Programmes, departments, academic calendar |
| `admission.html` | Admission portal form, process, seats and eligibility |
| `students.html` | Library, hostel, clubs, scholarships |
| `exam.html` | Examination cell, results, time table, notices |
| `research.html` | Projects, funding, publications |
| `iqac.html` | IQAC, NAAC, AQAR, NIRF, mandatory disclosure |
| `feedback.html` | Feedback form and grievance redressal |
| `career.html` | Faculty and staff openings |
| `contact.html` | Contact details, enquiry form, campus tours |
| `notices.html` | Full notice and news board |
| `gallery.html` | Photo gallery (placeholder tiles) |
| `architecture.html` | Four client surfaces + backend module map |
| `admin-console.html` | Admin / staff console |
| `faculty-console.html` | Faculty web + gradebook |
| `student-portal.html` | Student / parent portal |
| `404.html` | Not found |

## System structure

The site documents and mirrors the institute system:

- **Clients** — public site + admission portal, admin/staff console,
  faculty web + gradebook, student/parent portal
- **Backend** — modular monolith, horizontally scaled services, with modules:
  Auth/IAM, Tenancy, Admissions, Students, Faculty, Academics, Timetable,
  Attendance (QR/Geo), Exams & Results, Fees & Payments, Library, Hostel,
  Transport, LMS-lite, Comms, Reports, Files, Audit, plus GPS, Notify and BI
- **Workers** (separate deployment) — timetable-solver (clash-free timetables),
  pdf-renderer (ID cards, marksheets, receipts), notification-dispatcher
  (SMS/email/push/WhatsApp), bulk-import (students and marks from spreadsheets),
  fee-reminders + late-fine, payment-reconciliation (gateway settlements),
  report-builder (heavy exports to file storage)

Console sidebars follow the same module names, so each screen maps to a module.

### Route map

`architecture.html` lists every surface and portal with its routes and sub-features:

- Public pages, admission portal, authentication, student portal
- Student services: courses, assignments, quizzes, exams, fees, library, hostel, transport, helpdesk
- Parent portal, faculty portal, academic coordinator, exam cell
- Finance, library, hostel, transport
- Campus admin (students, staff, academic structure, admissions, communication, certificates, settings)
- Group super admin (campuses, cross-campus analytics, global roles, billing, system)

Technology choices are deliberately left out of the site copy: the structure describes
what each surface and module does, not the stack behind it.

## Design tokens

In `:root` at the top of `assets/style.css`:

```css
--navy:#0b1b3a;      /* header, footer, notice board */
--navy-2:#122a55;    /* action button band */
--gold:#f6c445;      /* navigation bar, primary buttons */
--gold-deep:#e0a800; /* active tab, accents */
--maroon:#7b1113;    /* Semester Fee button */
```

## Editing

- Content is plain HTML — search for the text and change it in place.
- College details appear in the header, footer, `contact.html` and `admission.html`;
  search for `edusphere.edu.in`.
- The Google Map in the footer is an `iframe` — replace the `q=` query with the
  real campus address.

## Placeholder content

Every figure is invented for demonstration: student counts, placement rate, seat
numbers, ranks, grades and the names in the consoles. Forms are inert and show a
notice instead of submitting. Before real use:

1. Replace name, address, phone, email and founding year
2. Replace all figures with verified institutional data
3. Wire the admission, result, feedback and enquiry forms to a backend
4. Add a privacy notice wherever personal data is collected
5. Publish the real NAAC / NIRF / AQAR documents behind the IQAC links
6. Replace the gallery placeholders with real photographs

## Running locally

Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deployment

GitHub Pages, served from the root of `main`. Push and the site rebuilds in about
a minute.
