document.addEventListener("DOMContentLoaded", function () {
  var t = document.querySelector(".nav-toggle");
  var m = document.querySelector(".mobile-nav");
  if (t && m) {
    t.addEventListener("click", function () {
      var open = m.classList.toggle("open");
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll(".mobile-nav .parent").forEach(function (p) {
    p.addEventListener("click", function (e) {
      e.preventDefault();
      var sub = p.nextElementSibling;
      if (sub && sub.classList.contains("sub")) sub.style.display = sub.style.display === "block" ? "none" : "block";
    });
  });
  var form = document.querySelector("form[data-demo]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var n = form.querySelector(".note");
      if (n) n.hidden = false;
    });
  }
});
