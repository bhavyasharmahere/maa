const root = document.getElementById("root");

let theme = "light";

// Detect system theme
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  theme = "dark";
}

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  render();
}

function render() {
  root.innerHTML = `
    <div class="dev-profile-wrapper" data-theme="${theme}">
      
      <div class="dev-profile-bg-shape shape-1"></div>
      <div class="dev-profile-bg-shape shape-2"></div>

      <div class="dev-profile-header">
        <button class="dev-theme-toggle">
          ${theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <main class="dev-profile-card">
        <div class="dev-profile-image-container">
          <div class="dev-profile-image-ring">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
              class="dev-profile-avatar"
            />
          </div>
        </div>

        <div class="dev-profile-content">
          <h1 class="dev-profile-name">Alex Developer</h1>
          <h2 class="dev-profile-title">Frontend Engineer & UI Designer</h2>
          <p class="dev-profile-desc">
            I build polished, pixel-perfect, and highly animated web experiences.
          </p>

          <div class="dev-profile-links">
            <a href="#" class="dev-profile-link">GitHub</a>
            <a href="#" class="dev-profile-link">LinkedIn</a>
            <a href="#" class="dev-profile-link dev-profile-link-primary">Portfolio</a>
          </div>
        </div>
      </main>
    </div>
  `;

  document.querySelector(".dev-theme-toggle").onclick = toggleTheme;
}

render();