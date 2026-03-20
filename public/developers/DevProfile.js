/*  DevProfile.js  –  Pure JS React component (no TypeScript) */

// If using a bundler (Vite / Webpack / CRA), uncomment these:
// import React, { useState, useEffect } from "react";
// import "./DevProfile.css";

import React, { useState, useEffect } from "react";
import "./DevProfile.css";

/* ── inline SVG icons (zero dependencies)  */
const dpIcons = {
  github: React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className: "dp-ico" },
    React.createElement("path", {
      d: "M12 .3a12 12 0 0 0-3.8 23.38c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.76c-1.09-.74.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.56 2.56 0 0 0 3.5 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.48 5.92a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3Z",
    })
  ),

  linkedin: React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className: "dp-ico" },
    React.createElement("path", {
      d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.22 0Z",
    })
  ),

  twitter: React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className: "dp-ico" },
    React.createElement("path", {
      d: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.57-6.63 7.57H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.3L17.61 20.65Z",
    })
  ),

  email: React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className: "dp-ico" },
    React.createElement("path", {
      d: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.7-8 5.33L4 8.7V6.3l8 5.33 8-5.33v2.4Z",
    })
  ),

  portfolio: React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className: "dp-ico" },
    React.createElement("path", {
      d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-3.07a15.8 15.8 0 0 0-1.4-3.63A8.03 8.03 0 0 1 18.93 8ZM12 4.04c.82 1.1 1.47 2.32 1.91 3.96h-3.82A13.74 13.74 0 0 1 12 4.04ZM4.26 14a7.82 7.82 0 0 1 0-4h3.52a16.3 16.3 0 0 0 0 4H4.26Zm.81 2h3.07a15.8 15.8 0 0 0 1.4 3.63A8.03 8.03 0 0 1 5.07 16ZM8.14 8H5.07a8.03 8.03 0 0 1 3.47-3.63A15.8 15.8 0 0 0 8.14 8Zm3.86 11.96A13.74 13.74 0 0 1 10.09 16h3.82a13.74 13.74 0 0 1-1.91 3.96ZM14.34 14H9.66a14.36 14.36 0 0 1 0-4h4.68a14.36 14.36 0 0 1 0 4Zm.2 5.63A15.8 15.8 0 0 0 15.86 16h3.07a8.03 8.03 0 0 1-4.4 3.63ZM16.22 14a16.3 16.3 0 0 0 0-4h3.52a7.82 7.82 0 0 1 0 4h-3.52Z",
    })
  ),

  sun: React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className: "dp-ico-toggle" },
    React.createElement("path", {
      d: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1ZM4.22 4.22a1 1 0 0 1 1.42 0l.7.7a1 1 0 0 1-1.41 1.42l-.71-.7a1 1 0 0 1 0-1.42Zm14.14 14.14a1 1 0 0 1 1.42 0l.7.7a1 1 0 0 1-1.41 1.42l-.71-.7a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm18 0a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1ZM5.64 17.36a1 1 0 0 1 0 1.42l-.7.7a1 1 0 0 1-1.42-1.41l.7-.71a1 1 0 0 1 1.42 0ZM19.78 4.22a1 1 0 0 1 0 1.42l-.7.7a1 1 0 0 1-1.42-1.41l.7-.71a1 1 0 0 1 1.42 0Z",
    })
  ),

  moon: React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "currentColor", className: "dp-ico-toggle" },
    React.createElement("path", {
      d: "M21.75 15.5a9.75 9.75 0 0 1-13.25-13.25A10 10 0 1 0 21.75 15.5Z",
    })
  ),
};

/* ── CONFIG – edit only this block ─────────────────────────── */
var DEV_CONFIG = {
  name: "Alex Rivera",
  title: "Full-Stack Developer & UI Architect",
  avatar: "https://i.pravatar.cc/300?img=68",
  bio:
    "I craft performant, accessible interfaces and " +
    "scalable backend systems. Passionate about design " +
    "systems, developer tooling, and open-source.",
  status: "Open to opportunities",
  tags: ["React", "TypeScript", "Node.js", "Go", "Figma", "AWS"],
  links: [
    { icon: "github",    label: "GitHub",      url: "https://github.com/bhavyasharmahere" },
    { icon: "linkedin",  label: "LinkedIn",    url: "https://linkedin.com/in/yourhandle" },
    { icon: "twitter",   label: "X / Twitter", url: "https://x.com/yourhandle" },
    { icon: "portfolio", label: "Portfolio",   url: "https://bhavyasharmahere.pages.dev" },
    { icon: "email",     label: "Email",       url: "mailto:thebhavya85@outlook.com" },
  ],
};

/* ── component ─────────────────────────────────────────────── */
function DevProfile() {
  var savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("dp-theme") || "light";
  } catch (e) {}

  var themeState = useState(savedTheme);
  var theme = themeState[0];
  var setTheme = themeState[1];

  var readyState = useState(false);
  var ready = readyState[0];
  var setReady = readyState[1];

  // entrance delay
  useEffect(function () {
    var t = setTimeout(function () {
      setReady(true);
    }, 80);
    return function () {
      clearTimeout(t);
    };
  }, []);

  // persist theme
  useEffect(
    function () {
      try {
        localStorage.setItem("dp-theme", theme);
      } catch (e) {}
    },
    [theme]
  );

  function flipTheme() {
    setTheme(function (prev) {
      return prev === "light" ? "dark" : "light";
    });
  }

  // helper: render blobs
  function renderBlobs() {
    var blobs = [];
    for (var i = 1; i <= 6; i++) {
      blobs.push(
        React.createElement("span", {
          key: i,
          className: "dp-blob dp-blob-" + i,
        })
      );
    }
    return blobs;
  }

  // helper: render tags
  function renderTags() {
    return DEV_CONFIG.tags.map(function (tag, idx) {
      return React.createElement(
        "li",
        {
          key: tag,
          className: "dp-tag",
          style: { animationDelay: idx * 0.07 + "s" },
        },
        tag
      );
    });
  }

  // helper: render links
  function renderLinks() {
    return DEV_CONFIG.links.map(function (link, idx) {
      return React.createElement(
        "a",
        {
          key: link.label,
          href: link.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "dp-link",
          style: { animationDelay: 0.35 + idx * 0.09 + "s" },
        },
        dpIcons[link.icon],
        React.createElement("span", null, link.label)
      );
    });
  }

  var rootClass =
    "dp-root dp-" + theme + (ready ? " dp-enter" : "");

  return React.createElement(
    "div",
    { className: rootClass },

    /* floating blobs */
    React.createElement(
      "div",
      { className: "dp-bg", "aria-hidden": "true" },
      renderBlobs()
    ),

    /* theme toggle */
    React.createElement(
      "button",
      {
        className: "dp-theme-btn",
        onClick: flipTheme,
        "aria-label":
          "Switch to " +
          (theme === "light" ? "dark" : "light") +
          " mode",
      },
      React.createElement(
        "span",
        { className: "dp-toggle-track" },
        React.createElement(
          "span",
          { className: "dp-toggle-thumb" },
          theme === "light" ? dpIcons.moon : dpIcons.sun
        )
      )
    ),

    /* card */
    React.createElement(
      "main",
      { className: "dp-card" },
      React.createElement("span", {
        className: "dp-card-glow",
        "aria-hidden": "true",
      }),
      React.createElement(
        "div",
        { className: "dp-card-body" },

        /* left – avatar */
        React.createElement(
          "section",
          { className: "dp-left" },
          React.createElement(
            "div",
            { className: "dp-ring" },
            React.createElement("span", { className: "dp-ring-spinner" }),
            React.createElement("img", {
              src: DEV_CONFIG.avatar,
              alt: DEV_CONFIG.name,
              className: "dp-avatar",
            })
          ),
          React.createElement(
            "p",
            { className: "dp-status" },
            React.createElement("span", { className: "dp-dot" }),
            DEV_CONFIG.status
          )
        ),

        /* right – info */
        React.createElement(
          "section",
          { className: "dp-right" },
          React.createElement("h1", { className: "dp-name" }, DEV_CONFIG.name),
          React.createElement("p", { className: "dp-title" }, DEV_CONFIG.title),
          React.createElement("p", { className: "dp-bio" }, DEV_CONFIG.bio),
          React.createElement("ul", { className: "dp-tags" }, renderTags()),
          React.createElement(
            "nav",
            { className: "dp-links", "aria-label": "Social links" },
            renderLinks()
          )
        )
      )
    ),

    /* footer */
    React.createElement(
      "p",
      { className: "dp-footer" },
      "Crafted with ",
      React.createElement("span", { className: "dp-heart" }, "♥"),
      " & React + JavaScript"
    )
  );
}
export default DevProfile;
// If using a bundler, uncomment:
// export default DevProfile;