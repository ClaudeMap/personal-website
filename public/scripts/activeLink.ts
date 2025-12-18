document.addEventListener("astro:page-load", () => {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http")) return; 

    const normalized = href.replace(/\/$/, "") || "/";
    if (normalized === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
