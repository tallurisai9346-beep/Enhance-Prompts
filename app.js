/* ================= DATA & CONSTANTS ================= */

const TEMPLATES = [
  {
    name: "Responsive Navbar",
    category: "ui-components",
    tag: "UI",
    text: "Build a responsive navigation bar with mobile hamburger menu, smooth active state transitions, accessible ARIA attributes, and dynamic scroll blur."
  },
  {
    name: "Modern Landing Page",
    category: "ui-components",
    tag: "UI",
    text: "Create a high-converting modern landing page with a glassmorphic hero section, feature grid cards, interactive pricing toggle, and animated footer."
  },
  {
    name: "Analytics Dashboard",
    category: "full-apps",
    tag: "APP",
    text: "Build an interactive SaaS analytics dashboard with collapsible sidebar, summary statistics cards, real-time filtering, data table, and light/dark theme toggle."
  },
  {
    name: "Task Manager App",
    category: "full-apps",
    tag: "APP",
    text: "Create a complete task management application featuring drag-and-drop Kanban columns, category tagging, search filter, local storage persistence, and task analytics."
  },
  {
    name: "Fix Mobile Layout Bug",
    category: "fixes",
    tag: "FIX",
    text: "Diagnose and fix mobile viewport overflow issues, unclickable button elements, and broken flex wrap layouts across screens smaller than 640px without affecting desktop styles."
  },
  {
    name: "Debug Runtime Exception",
    category: "fixes",
    tag: "FIX",
    text: "Examine the provided code, identify the root cause of the silent state mutation or null pointer exception, implement proper defensive checks, and return clean working code."
  },
  {
    name: "REST API CRUD Endpoints",
    category: "api-backend",
    tag: "API",
    text: "Build production-ready REST API CRUD endpoints with request body validation, pagination, structured error responses, and proper HTTP status code handling."
  },
  {
    name: "Firebase Firestore Integration",
    category: "api-backend",
    tag: "API",
    text: "Integrate Firebase v9 SDK for real-time Firestore database queries, optimistic UI updates, error catching, and secure authentication state management."
  },
  {
    name: "Senior AI Code Architect",
    category: "ai-prompts",
    tag: "AI",
    text: "Act as a Senior Software Engineer. Refactor the code for optimal computational performance, strict type safety, modular architecture, and maximum code readability."
  },
  {
    name: "AI Code Reviewer & Auditor",
    category: "ai-prompts",
    tag: "AI",
    text: "Audit the codebase for potential security vulnerabilities, memory leaks, performance bottlenecks, and compliance with accessibility (WCAG 2.1) standards."
  }
];

const TIPS = [
  "Tip: Specify edge cases (e.g. empty states, offline behavior) for 3x fewer revision loops.",
  "Tip: Assign a specific role or persona ('Act as a Principal Frontend Engineer') to ground the LLM's style.",
  "Tip: Explicit negative constraints ('Do NOT use external UI libraries') prevent bloated code.",
  "Tip: Translating English prompts to Chinese saves ~60% input tokens with identical reasoning quality.",
  "Tip: Include target test scenarios in your prompt to get automated unit test suites in the initial response."
];

const FILLER_PHRASES = [
  "i want you to",
  "can you please",
  "could you kindly",
  "help me write",
  "i am trying to",
  "would you mind",
  "make sure that you",
  "please make sure",
  "i need you to",
  "can you help me",
  "as soon as possible",
  "in order to"
];

const TECH_RULES = {
  "React":
    "Use functional components, React Hooks (`useState`, `useEffect`, `useCallback`), and clean prop interfaces.",

  "Next.js":
    "Follow App Router conventions, use Server Components by default, and leverage `next/image` & Lucide icons.",

  "Vue":
    "Use Composition API with `<script setup>`, reactive refs, and clean Pinia store patterns.",

  "Tailwind CSS":
    "Use utility-first semantic Tailwind classes; avoid arbitrary values and inline styles.",

  "Firebase":
    "Use Firebase v9+ modular SDK methods with Firestore rule constraints.",

  "Python":
    "Adhere to PEP 8, strict type hints, Pydantic data schemas, and async/await syntax."
};


/* ================= STATE ================= */

let state = {
  history: JSON.parse(localStorage.getItem("vibe_history") || "[]"),
  versions: JSON.parse(localStorage.getItem("vibe_versions") || "[]"),
  settings: JSON.parse(
    localStorage.getItem("vibe_settings") ||
    '{"autoStack":true,"tokenEff":true,"beforeAfter":true}'
  ),
  undoStack: [],
  redoStack: [],
  currentTipIndex: 0,
  lastEnhancedText: ""
};


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupTabs();
  setupEnhanceEvents();
  setupTemplatesEvents();
  setupEngineerEvents();
  setupHistoryEvents();
  setupSettingsEvents();
  setupTipsCarousel();

  document.getElementById("setting-auto-stack").checked =
    state.settings.autoStack;

  document.getElementById("setting-token-eff").checked =
    state.settings.tokenEff;

  document.getElementById("setting-before-after").checked =
    state.settings.beforeAfter;

  renderHistory();
  renderVersions();
  renderChecklist();
  renderTechniques();
  renderTemplates();

  window.addEventListener("scroll", () => {
    document
      .getElementById("mainNav")
      .classList.toggle("scrolled", window.scrollY > 40);
  });
});


/* ================= NAVIGATION & TABS ================= */

function setupNavigation() {
  document.querySelectorAll(".nav-link").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;

      switchTab(tabName);

      document
        .getElementById("app")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
    });
  });
}

function switchTab(tabName) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle(
      "active",
      link.dataset.tab === tabName
    );
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.tab === tabName
    );
  });

  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle(
      "active",
      panel.id === `panel-${tabName}`
    );
  });
}


/* ================= ENHANCE PANEL ================= */

function setupEnhanceEvents() {
  const input = document.getElementById("prompt-input");
  const btnEnhance = document.getElementById("btn-enhance");
  const btnUndo = document.getElementById("btn-undo");
  const btnRedo = document.getElementById("btn-redo");

  input.addEventListener("input", () => {
    updateCounter(
      input.value,
      document.getElementById("word-count")
    );

    updateComplexityBadge(input.value);

    detectStackAndRender(input.value);

    btnEnhance.disabled = !input.value.trim();
  });

  btnEnhance.addEventListener("click", performEnhance);

  document
    .getElementById("btn-strip-filler")
    .addEventListener("click", () => {
      let text = input.value;

      FILLER_PHRASES.forEach(phrase => {
        const reg = new RegExp(
          "\\b" + phrase + "\\b",
          "gi"
        );

        text = text.replace(reg, "");
      });

      text = text
        .replace(/\s+/g, " ")
        .trim();

      input.value = text;

      input.dispatchEvent(new Event("input"));

      showToast(
        "Stripped fluff words & tokens optimized"
      );
    });

  btnUndo.addEventListener("click", undo);

  btnRedo.addEventListener("click", redo);

  document
    .getElementById("btn-copy-enhanced")
    .addEventListener("click", () => {
      copyToClipboard(
        document.getElementById("enhanced-text").textContent,
        document.getElementById("btn-copy-enhanced")
      );
    });
}


/* ================= COUNTER ================= */

function updateCounter(text, targetEl) {
  const trimmed = text.trim();

  const words = trimmed
    ? trimmed.split(/\s+/).length
    : 0;

  const chars = text.length;

  targetEl.textContent =
    `${words} words · ${chars} characters`;
}


/* ================= COMPLEXITY ================= */

function updateComplexityBadge(text) {
  const badge =
    document.getElementById("complexity-badge");

  const len = text.trim().length;

  if (!len) {
    badge.className =
      "complexity-badge hidden";

    return;
  }

  badge.classList.remove(
    "hidden",
    "simple",
    "moderate",
    "detailed"
  );

  if (len < 80) {
    badge.classList.add("simple");
    badge.textContent = "Simple";
  }
  else if (len < 300) {
    badge.classList.add("moderate");
    badge.textContent = "Moderate";
  }
  else {
    badge.classList.add("detailed");
    badge.textContent = "Detailed";
  }
}


/* ================= STACK DETECTION ================= */

function detectStackAndRender(text) {
  let detected = "";

  for (const stack in TECH_RULES) {
    const reg = new RegExp(
      "\\b" + stack + "\\b",
      "i"
    );

    if (reg.test(text)) {
      detected = stack;
      break;
    }
  }

  const badge =
    document.getElementById("stack-badge");

  const tipsBox =
    document.getElementById("stack-tips");

  if (detected) {
    document.getElementById("stack-name")
      .textContent = detected;

    document.getElementById("tips-stack-name")
      .textContent = detected;

    document.getElementById("tips-list")
      .innerHTML =
      `<li>${TECH_RULES[detected]}</li>`;

    badge.classList.remove("hidden");
    tipsBox.classList.remove("hidden");
  }
  else {
    badge.classList.add("hidden");
    tipsBox.classList.add("hidden");
  }
}


/* ================= ENHANCE ================= */

function performEnhance() {
  const input =
    document.getElementById("prompt-input");

  const rawPrompt =
    input.value.trim();

  if (!rawPrompt) return;

  const btn =
    document.getElementById("btn-enhance");

  btn.classList.add("loading");
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.remove("loading");
    btn.disabled = false;

    let stackContext = "";

    for (const stack in TECH_RULES) {
      if (
        new RegExp(
          "\\b" + stack + "\\b",
          "i"
        ).test(rawPrompt)
      ) {
        stackContext = TECH_RULES[stack];
        break;
      }
    }

    const enhanced = `You are a Principal Software Engineer and Product Architect.

GOAL & CONTEXT
${rawPrompt}

REQUIREMENTS & ARCHITECTURE
- Deliver a production-ready, fully functional solution.
- Ensure seamless responsiveness across desktop, tablet, and mobile views.
- Adhere to clean architecture, DRY principles, and semantic component boundaries.
${stackContext
  ? `- ${stackContext}`
  : "- Use robust input validation, graceful error boundaries, and defensive state management."
}

FUNCTIONALITY & EDGE CASES
- Implement loading states, empty collection indicators, and user feedback toasts.
- Ensure all interactive controls have accessible ARIA labels and proper focus styling.
- Prevent unhandled promise rejections and silent runtime errors.`;

    state.lastEnhancedText = enhanced;

    document.getElementById("enhanced-text")
      .textContent = enhanced;

    document.getElementById("improvements-list")
      .innerHTML = `
        <div class="imp-i">
          Added role definition & clear operational objective
        </div>

        <div class="imp-i">
          Structured requirements into discrete architecture blocks
        </div>

        <div class="imp-i">
          Specified mandatory loading, empty, & error boundary states
        </div>

        ${
          stackContext
            ? '<div class="imp-i">Injected framework best-practices</div>'
            : ''
        }
      `;

    document
      .getElementById("enhanced-area")
      .classList.remove("hidden");

    calculateAndRenderScore(rawPrompt);

    if (state.settings.beforeAfter) {
      document.getElementById("before-text")
        .textContent = rawPrompt;

      document.getElementById("after-text")
        .textContent = enhanced;

      document.getElementById("changes-list")
        .innerHTML = `
          <div class="ch-i">
            + Explicit goal structure
          </div>

          <div class="ch-i">
            + Edge case coverage
          </div>

          <div class="ch-i">
            + Clean output directives
          </div>
        `;

      document
        .getElementById("before-after")
        .classList.remove("hidden");
    }
    else {
      document
        .getElementById("before-after")
        .classList.add("hidden");
    }

    if (state.settings.tokenEff) {
      analyzeTokenEfficiency(rawPrompt);

      document
        .getElementById("token-efficiency")
        .classList.remove("hidden");
    }
    else {
      document
        .getElementById("token-efficiency")
        .classList.add("hidden");
    }

    saveHistoryItem(
      rawPrompt,
      enhanced
    );

    showToast(
      "Prompt successfully enhanced!"
    );

  }, 400);
}


/* ================= SCORE ================= */

function calculateAndRenderScore(text) {
  let clarity =
    Math.min(
      20,
      Math.floor(text.length / 5)
    );

  let context =
    /build|create|make|develop|design|fix|debug/i
      .test(text)
      ? 20
      : 10;

  let constraints =
    /must|should|require|without|only|limit|avoid/i
      .test(text)
      ? 20
      : 5;

  let outputFmt =
    /return|output|provide|format|json|code/i
      .test(text)
      ? 20
      : 10;

  let testing =
    /test|working|responsive|mobile|error/i
      .test(text)
      ? 20
      : 5;

  const total =
    Math.min(
      100,
      clarity +
      context +
      constraints +
      outputFmt +
      testing
    );

  document.getElementById("score-number")
    .textContent = total;

  let label = "Needs Detail";

  if (total >= 80)
    label = "Excellent Prompt";
  else if (total >= 60)
    label = "Good — Solid Foundation";
  else if (total >= 40)
    label = "Moderate — Needs Specs";

  document.getElementById("score-label")
    .textContent = label;

  const barsContainer =
    document.getElementById("score-bars");

  barsContainer.innerHTML = `
    ${renderSingleBar("Clarity", clarity, 20)}
    ${renderSingleBar("Context", context, 20)}
    ${renderSingleBar("Constraints", constraints, 20)}
    ${renderSingleBar("Formatting", outputFmt, 20)}
    ${renderSingleBar("Edge Cases", testing, 20)}
  `;

  document.getElementById("score-feedback")
    .innerHTML = `
      <div class="score-fi">
        ${
          total >= 70
            ? "High specificity detected for AI precision."
            : "Add specific framework guidelines or constraints to raise score."
        }
      </div>
    `;

  document
    .getElementById("score-display")
    .classList.remove("hidden");
}


/* ================= UTILITY ================= */

function copyToClipboard(text, btnElement) {
  if (!text) return;

  navigator.clipboard
    .writeText(text)
    .then(() => {

      if (btnElement) {
        btnElement.classList.add("ok");

        setTimeout(() => {
          btnElement.classList.remove("ok");
        }, 1200);
      }

      showToast(
        "Copied to clipboard!"
      );
    });
}

function copyTextDirect(escapedText) {
  const text = unescape(escapedText);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast(
        "Copied to clipboard!"
      );
    });
}


/* ================= TOAST ================= */

function showToast(msg) {
  const container =
    document.getElementById(
      "toast-container"
    );

  const toast =
    document.createElement("div");

  toast.className = "toast";
  toast.textContent = msg;

  container.appendChild(toast);

  setTimeout(() => {

    toast.style.opacity = "0";
    toast.style.transform =
      "translateY(-8px)";

    toast.style.transition =
      "all .2s ease";

    setTimeout(() => {
      toast.remove();
    }, 200);

  }, 2200);
}