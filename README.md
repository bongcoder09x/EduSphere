# EduSphere

The website for **EduSphere — College of Engineering & Management**: a static,
seven-page college site covering programmes, admissions, faculty, campus life and
contact.

Built as plain HTML, CSS and a small amount of JavaScript — no framework, no build
step, no dependencies. Open `index.html` in a browser and it works; push it and it
deploys.

**Live site:** https://bongcoder09x.github.io/EduSphere/

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — hero, stats, why-us, programmes, news |
| `about.html` | History, teaching approach, departments, accreditation |
| `academics.html` | Programmes, department table, academic calendar |
| `admissions.html` | Application steps, seats by programme, fees |
| `faculty.html` | Senior faculty and department strength |
| `campus-life.html` | Library, hostels, sports, clubs, weekly rhythm |
| `contact.html` | Enquiry form and admissions office details |
| `404.html` | Not-found page |

## Structure

```
.
├── index.html, about.html, …   # one file per page
├── 404.html
└── assets/
    ├── style.css               # the entire design system
    └── main.js                 # mobile menu + demo form handler
```

Every page shares the same header and footer markup. If you change the navigation,
change it in each page — there is deliberately no templating layer to keep the
project readable.

## Customising

**Colours and type** live in the `:root` block at the top of `assets/style.css`:

```css
:root{
  --ink:#0b1b33;      /* headings, header and footer background */
  --gold:#c8963e;     /* accent */
  --paper:#fbfbf8;    /* page background */
  --sand:#f3efe6;     /* alternating section background */
}
```

**Content** is plain HTML in each page file — no data files to learn. Search for the
text you want to change and edit it in place.

**College details** (name, address, phone, email, office hours) appear in the header
brand block, the footer, and the contact and admissions pages. Search the folder for
`edusphere.edu.in` to find every occurrence.

## What is placeholder

The site is a complete front-end with demonstration content. Before it is used for a
real institution:

- Replace the college name, address, phone, email and founding year
- Replace all figures — campus size, student and faculty counts, placement rate,
  seat numbers — with verified numbers
- Add real photography; the current design uses no images at all
- Wire the enquiry form to a backend or form service (it currently shows a notice
  instead of sending)
- Add a privacy notice if the form collects personal data

## Running locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

Hosted with GitHub Pages, served from the root of the `main` branch. Push to `main`
and the site updates within a minute.

## Licence

No licence has been added yet — all rights reserved until one is.
