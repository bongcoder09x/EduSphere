# EduSphere — college website

Website for **EduSphere Institute of Technology**. Plain HTML, CSS and a small
JavaScript file — no framework, no build step, no dependencies.

**Live:** https://bongcoder09x.github.io/EduSphere/

## Structure

The site follows the four client surfaces of the institute system:

| Surface | Files | Purpose |
| --- | --- | --- |
| Public site + admission portal (SSR) | `index.html`, `overview.html`, `academic.html`, `admission.html`, `students.html`, `exam.html`, `research.html`, `iqac.html`, `feedback.html`, `career.html`, `contact.html` | Marketing, information and the application form |
| Admin / staff console | `admin-console.html` | Applications, documents, fees, grievances |
| Faculty web + gradebook | `faculty-console.html` | Courses, marks entry, attendance, timetable |
| Student / parent portal | `student-portal.html` | Attendance, marks, fee payment, notices |

`404.html` is the not-found page.

## Navigation

The header reproduces the institute nav: a navy utility bar (Email login, Staff,
Admin Login, Library, Semester Fee, Search) above a gold navigation bar with
dropdowns — Home, Overview, Academic, Students, Exam, R&D, Admission, Feedback,
IQAC, NAAC, NIRF, Self Disclosure, Career.

## Design tokens

All colours live in `:root` at the top of `assets/style.css`:

```css
--navy:#0b1b3a;      /* header, footer, headings */
--gold:#f6c445;      /* navigation bar, primary buttons */
--gold-deep:#e0a800; /* accents, link underlines */
--maroon:#7b1113;    /* Semester Fee button, notice header, NEW tags */
--mist:#f4f7fb;      /* alternating section background */
```

## Editing

- **Content** is plain HTML — search for the text and change it in place.
- **College details** appear in the header, footer, `contact.html` and
  `admission.html`. Search for `edusphere.edu.in` to find every occurrence.
- **Consoles** use the same stylesheet; sidebar links are in each console file.

## Placeholder content

Every figure is invented for demonstration — student counts, placement rate, seat
numbers, ranks, grades and the students named in the consoles. The forms are inert
and show a notice instead of submitting. Before this is used for a real institute:

1. Replace name, address, phone, email and founding year
2. Replace all figures with verified institutional data
3. Wire the admission, result and feedback forms to a backend
4. Add a privacy notice wherever personal data is collected
5. Publish the real NAAC/NIRF/AQAR documents behind the IQAC links

## Running locally

Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deployment

GitHub Pages, served from the root of `main`. Push and the site rebuilds in about a
minute.
