/* Demo assistant widget: canned answers, no server. */
(function () {
  "use strict";
  var QA = [
    { k: ["admission", "apply", "ভর্তি"], a: "Admissions for 2027-28 are open until 31 January. Start at the admission page — seven steps, saved as you go." },
    { k: ["fee", "fees", "payment", "ফি"], a: "Semester fees can be paid from the student portal under Fees. You can pay one or more instalments and download the receipt immediately." },
    { k: ["result", "marks", "ফলাফল"], a: "Enter your roll number on the Results page. Published results show subject marks and SGPA; revaluation opens seven days later." },
    { k: ["attendance", "উপস্থিতি"], a: "Attendance is marked by faculty each session. Your portal shows subject-wise percentages and flags anything under 75 per cent." },
    { k: ["hostel", "room"], a: "Hostel allocation is handled by the warden. Apply from the student portal; outpasses need parent approval." },
    { k: ["bus", "transport", "route"], a: "Bus routes and live positions are on the Transport page. Parents can also see the ETA from the parent portal." },
    { k: ["certificate", "verify", "সার্টিফিকেট"], a: "Every certificate carries a code. Paste it on the Verify page to check it against the issue register." },
    { k: ["contact", "phone", "email"], a: "Admissions: +91 33 4000 0000, info@edusphere.edu.in. Office hours are 9:30 am to 5:00 pm, Monday to Friday." }
  ];

  function answer(text) {
    var q = text.toLowerCase();
    for (var i = 0; i < QA.length; i++) {
      for (var j = 0; j < QA[i].k.length; j++) if (q.indexOf(QA[i].k[j]) > -1) return QA[i].a;
    }
    return "I can help with admissions, fees, results, attendance, hostel, transport and certificates. Try one of the buttons below.";
  }

  function boot() {
    var fab = document.createElement("button");
    fab.className = "chat-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", "Open assistant");
    fab.innerHTML = '<svg class="ico" width="22" height="22"><use href="#i-message-circle"/></svg>';

    var panel = document.createElement("div");
    panel.className = "chat-panel";
    panel.innerHTML =
      '<div class="chat-head"><span class="crest-logo" style="width:26px;height:26px">' +
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F2C05A" stroke-width="2"><rect x="4" y="7" width="16" height="12" rx="3"/><circle cx="9" cy="13" r="1.4" fill="#F2C05A"/><circle cx="15" cy="13" r="1.4" fill="#F2C05A"/><path d="M12 3v4"/></svg></span>' +
      "<div><b>EduSphere Assistant</b><span>Ask in English or Bengali</span></div>" +
      '<button class="x" type="button" aria-label="Close">&#10005;</button></div>' +
      '<div class="chat-body" id="chatBody"></div>' +
      '<div class="chat-chips">' +
      '<button type="button">Admission</button><button type="button">Fees</button>' +
      '<button type="button">Results</button><button type="button">Attendance</button><button type="button">Bus</button></div>' +
      '<form class="chat-foot"><input type="text" placeholder="Type your question" aria-label="Message">' +
      '<button type="submit" aria-label="Send"><svg class="ico" width="16" height="16"><use href="#i-arrow-right"/></svg></button></form>';

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    var body = panel.querySelector("#chatBody");
    function say(text, who) {
      var d = document.createElement("div");
      d.className = "msg " + who;
      d.textContent = text;
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
    }
    say("Hello — I am the EduSphere assistant. Ask me about admissions, fees, results or transport.", "bot");

    fab.addEventListener("click", function () { panel.classList.toggle("open"); });
    panel.querySelector(".x").addEventListener("click", function () { panel.classList.remove("open"); });
    panel.querySelectorAll(".chat-chips button").forEach(function (b) {
      b.addEventListener("click", function () { say(b.textContent, "me"); setTimeout(function () { say(answer(b.textContent), "bot"); }, 320); });
    });
    panel.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      var input = this.querySelector("input");
      var v = input.value.trim();
      if (!v) return;
      say(v, "me");
      input.value = "";
      setTimeout(function () { say(answer(v), "bot"); }, 360);
    });
  }
  document.addEventListener("DOMContentLoaded", boot);
})();
