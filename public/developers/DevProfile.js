/* ═══════════════════════════════════════════════════════════
   DevProfile.js  –  Pure vanilla JS. No React. No framework.
   ═══════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var root = document.getElementById("dp-root");
  var btn  = document.getElementById("dp-theme-btn");

  /* ── restore saved theme ─────────────────────────────────── */
  var saved = "light";
  try { saved = localStorage.getItem("dp-theme") || "light"; } catch (e) {}

  root.classList.remove("dp-light", "dp-dark");
  root.classList.add("dp-" + saved);

  /* ── entrance animation trigger ──────────────────────────── */
  setTimeout(function () {
    root.classList.add("dp-enter");
  }, 80);

  /* ── toggle handler ──────────────────────────────────────── */
  btn.addEventListener("click", function () {
    var isLight = root.classList.contains("dp-light");
    root.classList.remove("dp-light", "dp-dark");
    root.classList.add(isLight ? "dp-dark" : "dp-light");
    try { localStorage.setItem("dp-theme", isLight ? "dark" : "light"); } catch (e) {}
  });
})();