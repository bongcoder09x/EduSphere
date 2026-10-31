/* EduSphere demo layer: seed data + interactions. No server needed. */
(function () {
  "use strict";

  /* ---------------- seed data ---------------- */
  var DB = {
    students: [
      { roll: "22CSE0142", name: "Riya Mitra", program: "B.Tech CSE", batch: "2022-26", section: "A", status: "Active", fee: "Clear", att: 92, cgpa: 8.6, category: "General", phone: "98300 11221" },
      { roll: "22CSE0143", name: "Arka Ghosh", program: "B.Tech CSE", batch: "2022-26", section: "A", status: "Active", fee: "Due", att: 88, cgpa: 7.9, category: "OBC", phone: "98300 11222" },
      { roll: "22CSE0144", name: "Sneha Das", program: "B.Tech CSE", batch: "2022-26", section: "B", status: "Active", fee: "Clear", att: 71, cgpa: 7.2, category: "SC", phone: "98300 11223" },
      { roll: "22CSE0145", name: "Pratik Sengupta", program: "B.Tech CSE", batch: "2022-26", section: "B", status: "Active", fee: "Overdue", att: 64, cgpa: 6.4, category: "General", phone: "98300 11224" },
      { roll: "22CSE0146", name: "Nabanita Bose", program: "B.Tech CSE", batch: "2022-26", section: "A", status: "Active", fee: "Clear", att: 95, cgpa: 9.1, category: "General", phone: "98300 11225" },
      { roll: "23ECE0211", name: "Imran Hossain", program: "B.Tech ECE", batch: "2023-27", section: "A", status: "Active", fee: "Due", att: 81, cgpa: 7.6, category: "General", phone: "98300 11226" },
      { roll: "23ECE0212", name: "Tania Saha", program: "B.Tech ECE", batch: "2023-27", section: "A", status: "Active", fee: "Clear", att: 90, cgpa: 8.2, category: "OBC", phone: "98300 11227" },
      { roll: "23MEC0301", name: "Sourav Pal", program: "B.Tech Mechanical", batch: "2023-27", section: "A", status: "Active", fee: "Overdue", att: 58, cgpa: 5.9, category: "SC", phone: "98300 11228" },
      { roll: "23CIV0401", name: "Ananya Roy", program: "B.Tech Civil", batch: "2023-27", section: "A", status: "Active", fee: "Clear", att: 86, cgpa: 8.0, category: "General", phone: "98300 11229" },
      { roll: "25MBA0101", name: "Rohan Dey", program: "MBA", batch: "2025-27", section: "A", status: "Active", fee: "Due", att: 79, cgpa: 7.4, category: "General", phone: "98300 11230" },
      { roll: "24BSC0110", name: "Mehjabin Khatun", program: "B.Sc Data Science", batch: "2024-27", section: "A", status: "Active", fee: "Clear", att: 94, cgpa: 8.8, category: "OBC", phone: "98300 11231" },
      { roll: "21CSE0099", name: "Debjit Kar", program: "B.Tech CSE", batch: "2021-25", section: "A", status: "Alumni", fee: "Clear", att: 0, cgpa: 7.8, category: "General", phone: "98300 11232" }
    ],
    notices: [
      { t: "Odd semester examination time table published", cat: "Exam", d: "14 Oct 2026", live: true },
      { t: "Admissions open for the 2027-28 session", cat: "Admission", d: "18 Oct 2026", live: true },
      { t: "Merit scholarship applications close 30 November", cat: "Scholarship", d: "09 Oct 2026", live: true },
      { t: "Class start for B.Tech 2nd and 3rd year", cat: "Academic", d: "03 Oct 2026", live: false },
      { t: "Gandhi Jayanti holiday", cat: "Holiday", d: "01 Oct 2026", live: false },
      { t: "Final registration verification, 1st semester", cat: "Academic", d: "28 Sep 2026", live: false },
      { t: "75 percent mandatory attendance rule", cat: "Academic", d: "21 Sep 2026", live: true },
      { t: "Campus placement drive: 34 companies confirmed", cat: "Placement", d: "02 Oct 2026", live: true },
      { t: "Hostel outpass approvals move online", cat: "Hostel", d: "17 Sep 2026", live: false },
      { t: "Bus route 4 timing revised", cat: "Transport", d: "11 Sep 2026", live: false }
    ],
    programmes: [
      { name: "B.Tech Computer Science & Engineering", level: "UG", dept: "CSE", seats: 120, fee: 92500, years: 4 },
      { name: "B.Tech Electronics & Communication", level: "UG", dept: "ECE", seats: 90, fee: 88500, years: 4 },
      { name: "B.Tech Mechanical Engineering", level: "UG", dept: "ME", seats: 90, fee: 86500, years: 4 },
      { name: "B.Tech Civil Engineering", level: "UG", dept: "CE", seats: 60, fee: 84500, years: 4 },
      { name: "MBA Business Administration", level: "PG", dept: "MGT", seats: 60, fee: 142000, years: 2 },
      { name: "B.Sc Data Science", level: "UG", dept: "SCI", seats: 60, fee: 76500, years: 3 }
    ],
    results: {
      "22CSE0142": { name: "Riya Mitra", sem: "Semester 5", sgpa: 8.7, subjects: [["CSE 301", "Data Structures", 78, "A"], ["CSE 302", "Operating Systems", 71, "A"], ["CSE 303", "DBMS", 84, "O"], ["MGT 210", "Engineering Economics", 63, "B"], ["CSE 305", "Lab (DS + DBMS)", 92, "O"]] },
      "22CSE0143": { name: "Arka Ghosh", sem: "Semester 5", sgpa: 7.8, subjects: [["CSE 301", "Data Structures", 64, "B"], ["CSE 302", "Operating Systems", 58, "B"], ["CSE 303", "DBMS", 71, "A"], ["MGT 210", "Engineering Economics", 55, "C"], ["CSE 305", "Lab (DS + DBMS)", 80, "A"]] },
      "22CSE0146": { name: "Nabanita Bose", sem: "Semester 5", sgpa: 9.2, subjects: [["CSE 301", "Data Structures", 91, "O"], ["CSE 302", "Operating Systems", 88, "O"], ["CSE 303", "DBMS", 86, "O"], ["MGT 210", "Engineering Economics", 74, "A"], ["CSE 305", "Lab (DS + DBMS)", 95, "O"]] }
    },
    certificates: {
      "EDS-2026-0142": { name: "Riya Mitra", type: "Bonafide certificate", issued: "12 Aug 2026", status: "Valid" },
      "EDS-2026-0143": { name: "Arka Ghosh", type: "Course completion", issued: "30 Jun 2026", status: "Valid" },
      "EDS-2025-0099": { name: "Debjit Kar", type: "Transfer certificate", issued: "18 Jul 2025", status: "Valid" }
    },
    fees: [
      { id: "SEM5-TUITION", head: "Tuition fee, semester 5", amount: 42500, due: "30 Nov 2026" },
      { id: "SEM5-EXAM", head: "Examination fee", amount: 1800, due: "30 Nov 2026" },
      { id: "SEM5-LIB", head: "Library and lab fee", amount: 3200, due: "30 Nov 2026" },
      { id: "SEM5-HOSTEL", head: "Hostel seat rent", amount: 9500, due: "05 Dec 2026" }
    ],
    timetable: [
      { day: "Monday", rows: [["09:00", "CSE 301 Data Structures", "B-204", "Dr. Banerjee"], ["11:00", "CSE 302 Operating Systems", "B-301", "Dr. Nair"], ["14:00", "CSE 305 Lab", "Lab 4", "Dr. Banerjee"]] },
      { day: "Tuesday", rows: [["10:00", "CSE 303 DBMS", "B-204", "Dr. Sen"], ["12:00", "MGT 210 Economics", "A-102", "Dr. Iyer"]] },
      { day: "Wednesday", rows: [["09:00", "CSE 302 Operating Systems", "B-301", "Dr. Nair"], ["15:00", "Club afternoon", "Auditorium", "—"]] },
      { day: "Thursday", rows: [["09:00", "CSE 301 Data Structures", "B-204", "Dr. Banerjee"], ["13:00", "CSE 303 DBMS", "B-204", "Dr. Sen"]] },
      { day: "Friday", rows: [["11:00", "CSE 305 Lab", "Lab 4", "Dr. Banerjee"], ["14:00", "MGT 210 Economics", "A-102", "Dr. Iyer"]] }
    ],
    buses: [
      { route: "Route 1 — Salt Lake / Sector V", bus: "WB-02-AC-4411", driver: "R. Mondal", stop: "Sector V, 8:05 am", eta: 12 },
      { route: "Route 4 — Garia / Jadavpur", bus: "WB-02-AC-4498", driver: "S. Ghosh", stop: "Jadavpur, 7:50 am", eta: 24 }
    ],
    rooms: [
      { block: "A", floor: 1, room: "A-101", beds: 4, occupied: 4 }, { block: "A", floor: 1, room: "A-102", beds: 4, occupied: 3 },
      { block: "A", floor: 2, room: "A-201", beds: 3, occupied: 1 }, { block: "B", floor: 1, room: "B-101", beds: 4, occupied: 2 },
      { block: "B", floor: 2, room: "B-201", beds: 4, occupied: 4 }, { block: "B", floor: 2, room: "B-202", beds: 3, occupied: 0 }
    ]
  };
  window.EduSphereDB = DB;

  /* ---------------- helpers ---------------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function money(n) { return "\u20B9" + Number(n).toLocaleString("en-IN"); }
  function toast(msg) {
    var box = $(".toast");
    if (!box) { box = document.createElement("div"); box.className = "toast"; document.body.appendChild(box); }
    var el = document.createElement("div");
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(function () { el.remove(); }, 3200);
  }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || "null");
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }

  /* ---------------- nav ---------------- */
  function initNav() {
    var b = $(".burger"), m = $(".mobile-nav");
    if (b && m) b.addEventListener("click", function () {
      m.classList.toggle("open");
      b.setAttribute("aria-expanded", m.classList.contains("open") ? "true" : "false");
    });
    $$(".mobile-nav .parent").forEach(function (p) {
      p.addEventListener("click", function (e) {
        e.preventDefault();
        var sub = p.nextElementSibling;
        if (sub) sub.style.display = sub.style.display === "block" ? "none" : "block";
      });
    });
  }

  /* ---------------- generic table: search + filter + sort ---------------- */
  function initTables() {
    $$("[data-table]").forEach(function (host) {
      var table = $("table", host) || $("table");
      if (!table) return;
      var body = $("tbody", table);
      var input = $("[data-search]", host.closest(".panel") || document) || $("[data-search]");
      var chips = $$("[data-filter]", host.closest(".panel") || document);
      var activeFilter = "all";

      function rows() { return $$("tr", body); }
      function apply() {
        var q = (input && input.value || "").toLowerCase().trim();
        rows().forEach(function (tr) {
          var text = tr.textContent.toLowerCase();
          var okQ = !q || text.indexOf(q) > -1;
          var okF = activeFilter === "all" || (tr.dataset.filter || "").toLowerCase() === activeFilter;
          tr.style.display = okQ && okF ? "" : "none";
        });
        var vis = rows().filter(function (tr) { return tr.style.display !== "none"; }).length;
        var counter = host.parentNode.querySelector("[data-count]");
        if (counter) counter.textContent = vis;
      }
      if (input) input.addEventListener("input", apply);
      chips.forEach(function (c) {
        c.addEventListener("click", function () {
          chips.forEach(function (x) { x.classList.remove("on"); });
          c.classList.add("on");
          activeFilter = (c.dataset.filter || "all").toLowerCase();
          apply();
        });
      });
      $$("th[data-sort]", table).forEach(function (th) {
        th.style.cursor = "pointer";
        th.addEventListener("click", function () {
          var idx = Array.prototype.indexOf.call(th.parentNode.children, th);
          var asc = th.dataset.dir !== "asc";
          th.dataset.dir = asc ? "asc" : "desc";
          rows().sort(function (a, b) {
            var av = a.children[idx].textContent.trim(), bv = b.children[idx].textContent.trim();
            var an = parseFloat(av.replace(/[^\d.-]/g, "")), bn = parseFloat(bv.replace(/[^\d.-]/g, ""));
            var cmp = (!isNaN(an) && !isNaN(bn)) ? an - bn : av.localeCompare(bv);
            return asc ? cmp : -cmp;
          }).forEach(function (tr) { body.appendChild(tr); });
        });
      });
      apply();
    });
  }

  /* ---------------- notices ---------------- */
  function initNotices() {
    var list = $("#noticeList");
    if (!list) return;
    var tabs = $$("#noticeTabs .tab");
    var q = $("#noticeSearch");
    var cat = "all";

    function render() {
      var term = (q && q.value || "").toLowerCase();
      var items = DB.notices.filter(function (n) {
        var okCat = cat === "all" || n.cat.toLowerCase() === cat;
        var okQ = !term || n.t.toLowerCase().indexOf(term) > -1 || n.cat.toLowerCase().indexOf(term) > -1;
        return okCat && okQ;
      });
      list.innerHTML = items.length ? items.map(function (n) {
        return '<li><div><b style="font-weight:600">' + n.t + "</b>" +
          '<div class="small muted" style="margin-top:.15rem">' + n.cat + " &middot; posted " + n.d +
          (n.live ? ' &middot; <span class="badge b-ok">Active</span>' : ' &middot; <span class="badge b-info">Archived</span>') +
          "</div></div></li>";
      }).join("") : '<li><span class="muted small">No notices match that search.</span></li>';
      var c = $("#noticeCount");
      if (c) c.textContent = items.length;
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        tabs.forEach(function (x) { x.classList.remove("on"); });
        t.classList.add("on");
        cat = (t.dataset.cat || "all").toLowerCase();
        render();
      });
    });
    if (q) q.addEventListener("input", render);
    render();
  }

  /* ---------------- programme filter ---------------- */
  function initProgrammes() {
    var grid = $("#programGrid");
    if (!grid) return;
    var level = "all", sort = "name", q = $("#progSearch");
    function render() {
      var items = DB.programmes.filter(function (p) {
        var okL = level === "all" || p.level === level;
        var okQ = !q || !q.value || p.name.toLowerCase().indexOf(q.value.toLowerCase()) > -1 || p.dept.toLowerCase().indexOf(q.value.toLowerCase()) > -1;
        return okL && okQ;
      });
      items.sort(function (a, b) {
        if (sort === "fee") return a.fee - b.fee;
        if (sort === "seats") return b.seats - a.seats;
        return a.name.localeCompare(b.name);
      });
      grid.innerHTML = items.map(function (p) {
        return '<article class="card"><div style="display:flex;justify-content:space-between;gap:.6rem;align-items:flex-start">' +
          '<div><span class="eyebrow">' + (p.level === "UG" ? "Undergraduate" : "Postgraduate") + " &middot; " + p.years + " years</span>" +
          '<h3 style="margin-top:.35rem">' + p.name + "</h3></div>" +
          '<span class="badge b-info">' + p.seats + " seats</span></div>" +
          '<p style="margin-top:.6rem">Tuition ' + money(p.fee) + " per year &middot; department " + p.dept + "</p>" +
          '<div style="margin-top:1rem;display:flex;gap:.5rem;flex-wrap:wrap">' +
          '<a class="btn btn-primary btn-sm" href="admission.html">Apply</a>' +
          '<a class="btn btn-ghost btn-sm" href="admission.html#fees">Fee structure</a></div></article>';
      }).join("");
      var c = $("#progCount"); if (c) c.textContent = items.length;
    }
    $$("#progLevel .chip").forEach(function (c) {
      c.addEventListener("click", function () {
        $$("#progLevel .chip").forEach(function (x) { x.classList.remove("on"); });
        c.classList.add("on"); level = c.dataset.level; render();
      });
    });
    var s = $("#progSort");
    if (s) s.addEventListener("change", function () { sort = s.value; render(); });
    if (q) q.addEventListener("input", render);
    render();
  }

  /* ---------------- admission wizard ---------------- */
  function initWizard() {
    var form = $("#wizard");
    if (!form) return;
    var steps = $$(".wizard-step", form), pills = $$(".step-pill");
    var idx = 0;
    var saved = store("es-application") || {};

    function fill() {
      $$("input,select,textarea", form).forEach(function (el) {
        if (el.name && saved[el.name] !== undefined) {
          if (el.type === "checkbox") el.checked = !!saved[el.name];
          else el.value = saved[el.name];
        }
      });
    }
    function save() {
      var data = {};
      $$("input,select,textarea", form).forEach(function (el) {
        if (el.name) data[el.name] = el.type === "checkbox" ? el.checked : el.value;
      });
      store("es-application", data);
      var ind = $("#autosave");
      if (ind) { ind.textContent = "Saved just now"; }
    }
    function show(i) {
      idx = Math.max(0, Math.min(steps.length - 1, i));
      steps.forEach(function (s, n) { s.classList.toggle("on", n === idx); });
      pills.forEach(function (p, n) {
        p.classList.toggle("now", n === idx);
        p.classList.toggle("done", n < idx);
      });
      var bar = $("#wizardProgress");
      if (bar) bar.style.width = Math.round(((idx + 1) / steps.length) * 100) + "%";
      var lbl = $("#stepLabel");
      if (lbl) lbl.textContent = "Step " + (idx + 1) + " of " + steps.length;
      window.scrollTo({ top: form.offsetTop - 110, behavior: "smooth" });
    }
    form.addEventListener("input", function () { save(); });
    form.addEventListener("change", function () { save(); });
    $$("[data-next]", form).forEach(function (b) {
      b.addEventListener("click", function () {
        var invalid = $$("input[required],select[required]", steps[idx]).filter(function (el) { return !el.value; });
        if (invalid.length) { invalid[0].focus(); toast("Please fill the required field: " + (invalid[0].previousElementSibling ? invalid[0].previousElementSibling.textContent : "required")); return; }
        save(); show(idx + 1);
      });
    });
    $$("[data-prev]", form).forEach(function (b) { b.addEventListener("click", function () { show(idx - 1); }); });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      save();
      toast("Application submitted — application number ES-2026-" + Math.floor(1000 + Math.random() * 9000));
      show(steps.length - 1);
    });
    fill(); show(0);
  }

  /* ---------------- results lookup ---------------- */
  function initResults() {
    var form = $("#resultForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var roll = ($("#rollInput").value || "").trim().toUpperCase();
      var out = $("#resultOut");
      var r = DB.results[roll];
      if (!r) {
        out.innerHTML = '<div class="note">No published result for <b>' + (roll || "that roll number") + '</b>. Try 22CSE0142, 22CSE0143 or 22CSE0146.</div>';
        return;
      }
      var rows = r.subjects.map(function (s) {
        var pass = s[2] >= 40;
        return "<tr><td>" + s[0] + "</td><td>" + s[1] + "</td><td>" + s[2] + '</td><td><span class="badge ' +
          (pass ? "b-ok" : "b-bad") + '">' + s[3] + "</span></td></tr>";
      }).join("");
      out.innerHTML = '<div class="panel" style="margin-top:16px"><div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:center">' +
        "<div><h2>" + r.name + "</h2><p class='sub'>" + roll + " &middot; " + r.sem + " &middot; published 14 Oct 2026</p></div>" +
        '<div class="ring" style="--p:' + Math.round(r.sgpa / 10 * 100) + '%"><b>' + r.sgpa.toFixed(1) + "</b></div></div>" +
        '<div class="table-shell" style="margin-top:12px"><table><thead><tr><th>Code</th><th>Subject</th><th>Marks /100</th><th>Grade</th></tr></thead><tbody>' +
        rows + "</tbody></table></div>" +
        '<p class="small muted" style="margin-top:.7rem">Provisional result. Revaluation window opens seven days after publication.</p></div>';
    });
  }

  /* ---------------- certificate verify ---------------- */
  function initVerify() {
    var form = $("#verifyForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var code = ($("#certInput").value || "").trim().toUpperCase();
      var out = $("#verifyOut");
      var c = DB.certificates[code];
      out.innerHTML = c
        ? '<div class="panel" style="border-color:rgba(47,125,91,.4)"><div style="display:flex;gap:.8rem;align-items:center">' +
          '<span class="badge b-ok">Verified</span><span class="small muted">checked against the issued register</span></div>' +
          "<h2 style='margin-top:.7rem'>" + c.type + "</h2>" +
          '<ul class="rows" style="margin-top:.8rem"><li><span>Issued to</span><b>' + c.name + "</b></li>" +
          "<li><span>Certificate code</span><b>" + code + "</b></li>" +
          "<li><span>Issued on</span><b>" + c.issued + "</b></li>" +
          "<li><span>Status</span><b>" + c.status + "</b></li></ul></div>"
        : '<div class="note">No certificate found for <b>' + (code || "that code") + '</b>. Try EDS-2026-0142, EDS-2026-0143 or EDS-2025-0099.</div>';
    });
  }

  /* ---------------- gradebook ---------------- */
  function initGradebook() {
    var gb = $("#gradebook");
    if (!gb) return;
    var saved = store("es-marks") || {};
    function recalc() {
      var tot = [];
      $$("tbody tr", gb).forEach(function (tr) {
        var inputs = $$("input[type=number]", tr);
        var sum = inputs.reduce(function (a, el) { return a + (parseFloat(el.value) || 0); }, 0);
        var cell = $(".total", tr);
        if (cell) cell.textContent = sum;
        tot.push(sum);
      });
      var avg = tot.length ? (tot.reduce(function (a, b) { return a + b; }, 0) / tot.length) : 0;
      var pass = tot.filter(function (t) { return t >= 40; }).length;
      if ($("#gbAvg")) $("#gbAvg").textContent = avg.toFixed(1);
      if ($("#gbMax")) $("#gbMax").textContent = Math.max.apply(null, tot.concat([0]));
      if ($("#gbPass")) $("#gbPass").textContent = tot.length ? Math.round(pass / tot.length * 100) + "%" : "0%";
    }
    gb.addEventListener("input", function (e) {
      if (e.target.type !== "number") return;
      var key = e.target.dataset.key;
      if (key) { saved[key] = e.target.value; store("es-marks", saved); }
      recalc();
    });
    $$("input[type=number]", gb).forEach(function (el) {
      if (el.dataset.key && saved[el.dataset.key] !== undefined) el.value = saved[el.dataset.key];
    });
    var btn = $("#gbSave");
    if (btn) btn.addEventListener("click", function () { toast("Marks saved as draft"); });
    var lock = $("#gbLock");
    if (lock) lock.addEventListener("click", function () { toast("Locked and submitted to the HoD"); });
    recalc();
  }

  /* ---------------- attendance session ---------------- */
  function initAttendance() {
    var roster = $("#roster");
    if (!roster) return;
    function count() {
      var rows = $$("tbody tr", roster);
      var present = rows.filter(function (r) { return r.dataset.state === "present"; }).length;
      var total = rows.length;
      if ($("#attPresent")) $("#attPresent").textContent = present;
      if ($("#attTotal")) $("#attTotal").textContent = total;
      if ($("#attPct")) $("#attPct").textContent = total ? Math.round(present / total * 100) + "%" : "0%";
    }
    roster.addEventListener("click", function (e) {
      var b = e.target.closest("[data-mark]");
      if (!b) return;
      var tr = b.closest("tr");
      tr.dataset.state = b.dataset.mark;
      $$("[data-mark]", tr).forEach(function (x) { x.classList.remove("btn-primary"); x.classList.add("btn-ghost"); });
      b.classList.remove("btn-ghost"); b.classList.add("btn-primary");
      count();
    });
    var all = $("#markAll");
    if (all) all.addEventListener("click", function () {
      $$("tbody tr", roster).forEach(function (tr) {
        tr.dataset.state = "present";
        var b = $('[data-mark="present"]', tr);
        if (b) { b.classList.remove("btn-ghost"); b.classList.add("btn-primary"); }
      });
      count(); toast("All students marked present");
    });
    var close = $("#closeSession");
    if (close) close.addEventListener("click", function () { toast("Session closed — attendance posted to the register"); });
    count();
  }

  /* ---------------- fees ---------------- */
  function initFees() {
    var box = $("#feeBox");
    if (!box) return;
    function total() {
      var sum = 0;
      $$("input[data-amount]", box).forEach(function (c) { if (c.checked) sum += parseFloat(c.dataset.amount); });
      if ($("#feeTotal")) $("#feeTotal").textContent = money(sum);
      return sum;
    }
    box.addEventListener("change", total);
    var pay = $("#payNow");
    if (pay) pay.addEventListener("click", function () {
      var amt = total();
      if (!amt) { toast("Select at least one instalment"); return; }
      var m = $("#receiptModal");
      if (m) {
        $("#receiptAmount").textContent = money(amt);
        $("#receiptNo").textContent = "RCPT-2026-" + Math.floor(100000 + Math.random() * 899999);
        m.classList.add("open");
      }
      toast("Payment captured — receipt generated");
    });
    $$("[data-close-modal]").forEach(function (b) {
      b.addEventListener("click", function () { b.closest(".modal").classList.remove("open"); });
    });
    total();
  }

  /* ---------------- parent child switch ---------------- */
  function initParent() {
    var sel = $("#childSelect");
    if (!sel) return;
    var wards = { "22CSE0142": "Riya Mitra", "22CSE0143": "Arka Ghosh" };
    sel.addEventListener("change", function () {
      var v = sel.value;
      $$("[data-ward]").forEach(function (el) { el.textContent = wards[v] || v; });
      toast("Switched to " + (wards[v] || v));
    });
  }

  /* ---------------- student dashboard render ---------------- */
  function initStudentDashboard() {
    var ring = $("#attRing");
    if (ring) {
      var pct = 92;
      ring.style.setProperty("--p", pct + "%");
      ring.innerHTML = "<b>" + pct + "%</b>";
    }
    var tl = $("#todaySchedule");
    if (tl) {
      var day = DB.timetable[0];
      tl.innerHTML = day.rows.map(function (r) {
        return '<li><div><b style="font-weight:600">' + r[1] + '</b><div class="small muted">' + r[2] + " &middot; " + r[3] +
          '</div></div><span class="badge b-info">' + r[0] + "</span></li>";
      }).join("");
    }
  }


  /* ---------------- notices: filter cards + carousel ---------------- */
  var NOTICE_DATA = [
    { id: 47533, t: "Notification for UG 4th semester Examination 2026 under CCFUP-NEP pattern", cat: "Exam", pub: "Oct 30, 2026", val: "Nov 26, 2026", st: "Active", isNew: true },
    { id: 47532, t: "Notification regarding publication of results for PG 2nd Semester Examinations 2026 (Sub: PHY, FSC) [Ref. No.: VU/CE/GD/0627/2026]", cat: "Exam", pub: "Oct 30, 2026", val: "Nov 20, 2026", st: "Active", isNew: true },
    { id: 47531, t: "Admission notification to one year Diploma Course in Epidemiology & Public Health", cat: "Admission", pub: "Oct 29, 2026", val: "Dec 15, 2026", st: "Active", isNew: true },
    { id: 47530, t: "Odd semester examination time table published", cat: "Exam", pub: "Oct 14, 2026", val: "Nov 20, 2026", st: "Active", isNew: false },
    { id: 47529, t: "Merit scholarship applications close 30 November", cat: "Scholarship", pub: "Oct 09, 2026", val: "Nov 30, 2026", st: "Active", isNew: false },
    { id: 47528, t: "Campus placement drive: 34 companies confirmed", cat: "Placement", pub: "Oct 02, 2026", val: "Nov 15, 2026", st: "Active", isNew: false },
    { id: 47527, t: "Class start for B.Tech 2nd and 3rd year", cat: "Academic", pub: "Oct 03, 2026", val: "Oct 07, 2026", st: "Expired", isNew: false },
    { id: 47526, t: "75 percent mandatory attendance rule", cat: "Academic", pub: "Sep 21, 2026", val: "N/A", st: "Active", isNew: false },
    { id: 47525, t: "Hostel outpass approvals move online", cat: "Hostel", pub: "Sep 17, 2026", val: "Sep 30, 2026", st: "Expired", isNew: false },
    { id: 47524, t: "Bus route 4 timing revised", cat: "Transport", pub: "Sep 11, 2026", val: "N/A", st: "Active", isNew: false }
  ];

  var CAROUSEL = [
    { d: "29", m: "Sep", t: "Fixture of the 9th Inter College Kabaddi (Men & Women) Tournament 2026", s: "Dated 28.09.2026" },
    { d: "01", m: "Oct", t: "Inviting entries from participants in the First State-Level Essay Competition organised by Lok Bhavan, West Bengal", s: "Entries close 20 October" },
    { d: "06", m: "Oct", t: "Fixture of the 19th Inter College Kho-Kho (Men & Women) Tournament 2026", s: "Dated 05.10.2026" },
    { d: "05", m: "Nov", t: "InnoQuest 2026 — a competition on Innovative Ideas, Proposals, Models and Demonstrations", s: "Registration open" }
  ];

  function mailIcon() {
    return '<svg class="ico" width="15" height="15" aria-hidden="true"><use href="#i-mail"/></svg>';
  }

  function initNoticeCards() {
    var host = $("#noticeCards");
    if (!host) return;
    var search = $("#nSearch"), by = $("#nBy"), cat = $("#nCat"), st = $("#nStatus"), reset = $("#nReset");
    var panel = $("#filterPanel"), toggle = $("#toggleFilters");

    if (toggle && panel) toggle.addEventListener("click", function () {
      var hidden = panel.classList.toggle("hidden");
      toggle.classList.toggle("closed", hidden);
      toggle.querySelector("span").textContent = hidden ? "Show Filters" : "Collapse Filters";
    });

    function render() {
      var q = (search && search.value || "").toLowerCase().trim();
      var c = cat ? cat.value : "all", s = st ? st.value : "all";
      var rows = NOTICE_DATA.filter(function (n) {
        var hay = (by && by.value === "id") ? String(n.id) : n.t.toLowerCase();
        return (!q || hay.toLowerCase().indexOf(q) > -1) &&
          (c === "all" || n.cat === c) && (s === "all" || n.st === s);
      });
      host.innerHTML = rows.length ? rows.map(function (n) {
        return '<article class="ncard ' + (n.st === "Expired" ? "expired" : "") + '">' +
          '<div class="top"><span class="mail">' + mailIcon() + "</span>" +
          '<span class="nid">' + n.id + "</span>" +
          (n.isNew ? '<span class="nnew">&#9733; New</span>' : "") + "</div>" +
          "<h3>" + n.t + "</h3>" +
          '<div class="nmeta"><span>Published On: <b>' + n.pub + "</b></span>" +
          "<span>Valid Upto: <b>" + n.val + "</b></span>" +
          (n.st === "Active" ? '<span class="pill-active"><i></i> Active</span>'
            : '<span class="pill-expired">Expired</span>') + "</div></article>";
      }).join("") : '<div class="note">No notices match those filters. Try resetting them.</div>';

      Array.prototype.forEach.call(host.querySelectorAll(".ncard"), function (el, i) {
        setTimeout(function () { el.classList.add("in"); }, i * 70);
      });
      var cnt = $("#noticeCount"); if (cnt) cnt.textContent = rows.length;
    }

    [search, by, cat, st].forEach(function (el) { if (el) el.addEventListener("input", render); });
    [by, cat, st].forEach(function (el) { if (el) el.addEventListener("change", render); });
    if (reset) reset.addEventListener("click", function () {
      if (search) search.value = ""; if (by) by.value = "title"; if (cat) cat.value = "all"; if (st) st.value = "all";
      render(); toast("Filters reset");
    });
    render();
  }

  function initCarousel() {
    var track = $("#cTrack");
    if (!track) return;
    track.innerHTML = CAROUSEL.map(function (c) {
      return '<div class="citem"><div class="cdate"><b>' + c.d + "</b><span>" + c.m + "</span></div>" +
        "<div><p>" + c.t + '</p><div class="tagline">' + c.s + "</div></div></div>";
    }).join("");

    var idx = 0, timer = null, playing = true;
    var items = track.children.length;
    var viewport = $(".carousel .viewport");
    function step(dir) {
      var visible = Math.max(1, Math.floor((viewport.clientHeight + 12) / 84));
      var max = Math.max(0, items - visible);
      idx = Math.min(max, Math.max(0, idx + dir));
      var first = track.children[0];
      var h = first ? first.getBoundingClientRect().height + 12 : 84;
      track.style.transform = "translateY(-" + (idx * h) + "px)";
    }
    function play() {
      stop();
      timer = setInterval(function () {
        var visible = Math.max(1, Math.floor((viewport.clientHeight + 12) / 84));
        if (idx >= items - visible) idx = -1;
        step(1);
      }, 3200);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    var up = $("#cUp"), down = $("#cDown"), pause = $("#cPause");
    if (up) up.addEventListener("click", function () { stop(); step(-1); });
    if (down) down.addEventListener("click", function () { stop(); step(1); });
    if (pause) pause.addEventListener("click", function () {
      playing = !playing;
      if (playing) { play(); pause.innerHTML = '<svg class="ico" width="16" height="16" aria-hidden="true"><use href="#i-pause"/></svg>'; }
      else { stop(); pause.innerHTML = '<svg class="ico" width="16" height="16" aria-hidden="true"><use href="#i-play"/></svg>'; }
    });
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) play();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav(); initTables(); initNotices(); initProgrammes(); initWizard();
    initResults(); initVerify(); initGradebook(); initAttendance(); initFees();
    initParent(); initStudentDashboard(); initNoticeCards(); initCarousel();
    var y = $("#yr"); if (y) y.textContent = new Date().getFullYear();
  });
})();
