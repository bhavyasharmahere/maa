// Pure Vanilla JS - No React hooks or components
document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.getElementById("profileWrapper");
  const toggleBtn = document.getElementById("themeToggleBtn");

  // Auto-detect system preference on load
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    wrapper.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  // Theme toggle logic
  toggleBtn.addEventListener("click", function() {
    const currentTheme = wrapper.getAttribute("data-theme");
    
    if (currentTheme === "light") {
      wrapper.setAttribute("data-theme", "dark");
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      wrapper.setAttribute("data-theme", "light");
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
});