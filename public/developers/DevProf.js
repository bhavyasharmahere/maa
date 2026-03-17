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
              src="./digiface.jpg"
              class="dev-profile-avatar"
            />
          </div>
        </div>

        <div class="dev-profile-content">
          <h1 class="dev-profile-name">Bhavya Sharma</h1>
          <h2 class="dev-profile-title">Tech Enthusiast and Developer</h2>
          <p class="dev-profile-desc">
            I build polished web experiences. I uses various languages like HTML, CSS, JS, TS, TSX, Python and more. I prefer delivering in my best despite of anythink. Being GODFIDENT. 
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