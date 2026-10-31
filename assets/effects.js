/* Motion layer: reveal on scroll, 3D tilt, counters, ripple, sticky nav. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init() {
    if (reduce) return;

    /* ---- scroll reveal ---- */
    var targets = document.querySelectorAll(".card, .panel, .kpi, .glass, .hero-copy, .table-shell, .rows");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en, i) {
          if (en.isIntersecting) {
            var el = en.target;
            setTimeout(function () { el.classList.add("in"); }, Math.min(i * 60, 240));
            io.unobserve(el);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      targets.forEach(function (el, i) {
        el.setAttribute("data-reveal", "");
        el.style.transitionDelay = (i % 6) * 45 + "ms";
        io.observe(el);
      });
    }

    /* ---- 3D tilt ---- */
    var tiltEls = document.querySelectorAll(".card, .kpi, .stat-card");
    tiltEls.forEach(function (el) {
      el.classList.add("tilt");
      var raf = null;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          el.style.transform = "perspective(900px) rotateY(" + (px * 9).toFixed(2) +
            "deg) rotateX(" + (-py * 9).toFixed(2) + "deg) translateY(-4px) scale(1.012)";
        });
      });
      el.addEventListener("mouseleave", function () {
        if (raf) cancelAnimationFrame(raf);
        el.style.transform = "";
      });
    });

    /* ---- number counters ---- */
    var nums = document.querySelectorAll(".kpi b, .stat-grid b, .stat b");
    nums.forEach(function (el) {
      var raw = el.textContent.trim();
      var m = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      var pre = m[1], num = parseFloat(m[2].replace(/,/g, "")), post = m[3];
      if (!isFinite(num) || num > 10000000) return;
      var start = null, dur = 1100;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = num * eased;
        var out = num % 1 === 0 ? Math.round(val) : val.toFixed(1);
        if (num >= 1000) out = Number(out).toLocaleString("en-IN");
        el.textContent = pre + out + post;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });

    /* ---- ripple on buttons ---- */
    document.addEventListener("click", function (e) {
      var b = e.target.closest(".btn");
      if (!b) return;
      var r = b.getBoundingClientRect();
      var s = document.createElement("span");
      var size = Math.max(r.width, r.height);
      s.className = "ripple";
      s.style.width = s.style.height = size + "px";
      s.style.left = (e.clientX - r.left - size / 2) + "px";
      s.style.top = (e.clientY - r.top - size / 2) + "px";
      b.appendChild(s);
      setTimeout(function () { s.remove(); }, 650);
    });

    /* ---- back to top ---- */
    var top = document.getElementById("toTop");
    if (top) {
      window.addEventListener("scroll", function () {
        top.classList.toggle("show", window.scrollY > 420);
      }, { passive: true });
      top.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* ---- sticky nav shadow ---- */
    var nav = document.querySelector(".navbar");
    if (nav) {
      var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 12); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
