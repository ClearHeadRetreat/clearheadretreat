/* Clear Head Retreat — light interactivity, no dependencies */
(function () {
  "use strict";

  // --- Mobile nav toggle ---
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close on link tap (mobile)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Scroll reveal (respects reduced motion) ---
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealables = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  }

  // --- Enquiry form: graceful Formspree submit (only if endpoint set) ---
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      var action = form.getAttribute("action") || "";
      var status = document.getElementById("form-status");
      // If still on the placeholder endpoint, don't actually POST.
      if (action.indexOf("YOUR_FORMSPREE_ID") !== -1 || action === "") {
        ev.preventDefault();
        if (status) {
          status.hidden = false;
          status.textContent = "Form not connected yet. Add your Formspree endpoint to the form's action attribute in enquire.html.";
        }
        return;
      }
      // Otherwise submit via fetch for a smooth inline confirmation.
      ev.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var original = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          if (status) { status.hidden = false; status.textContent = "Thank you. Your enquiry has been received — I'll be in touch personally within a few days."; status.dataset.state = "ok"; }
          form.style.display = "none";
        } else {
          if (status) { status.hidden = false; status.textContent = "Something went wrong sending your enquiry. Please try again shortly."; status.dataset.state = "err"; }
        }
      }).catch(function () {
        if (status) { status.hidden = false; status.textContent = "Network issue — your enquiry didn't send. Please try again shortly."; status.dataset.state = "err"; }
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = original; }
      });
    });
  }

  // --- Year in footer ---
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
