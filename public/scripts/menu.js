document.addEventListener("astro:page-load", () => {
  const btn = document.querySelector(".nav-toggle");
  const panel = document.getElementById("mobile-menu");
  if (!btn || !panel) return;

  const open = () => {
    panel.hidden = false;
    panel.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  };

  const close = () => {
    panel.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
    panel.addEventListener("transitionend", () => (panel.hidden = true), {
      once: true,
    });
  };

  const closeBtn = panel.querySelector(".nav-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", close);
  }

  btn.addEventListener("click", () => {
    const isOpen = panel.classList.contains("is-open");
    isOpen ? close() : open();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("is-open")) close();
  });

  // Nav close (when clicking a link)
  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    // Only apply delay if menu is visible (mob open state)
    const isMobMenuActive =
      window.getComputedStyle(btn).display !== "none" &&
      panel.classList.contains("is-open");

    if (!isMobMenuActive) return;

    // Stop Astro’s instant navigation
    e.preventDefault();

    // Trigger the closing animation
    panel.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");

    let didTransition = false;

    const navigate = () => {
      panel.hidden = true;
      if (window.Astro?.router?.navigate) {
        Astro.router.navigate(a.getAttribute("href"));
      } else if (window.Astro?.navigate) {
        Astro.navigate(a.getAttribute("href"));
      } else {
        window.location.href = a.href;
      }
    };

    // listen for the clip-path transition end
    const onTransitionEnd = (e) => {
      if (e.propertyName !== "clip-path") return;
      didTransition = true;
      panel.removeEventListener("transitionend", onTransitionEnd);
      navigate();
    };
    panel.addEventListener("transitionend", onTransitionEnd);

    // Fallback if the event doesnt fire
    const duration =
      parseFloat(
        getComputedStyle(panel).getPropertyValue("--menu-transition-duration")
      ) * 1000 || 600;

    setTimeout(() => {
      if (!didTransition) {
        console.warn("Transitionend not fired; using fallback navigation.");
        navigate();
      }
    }, duration + 100);
  });
});
