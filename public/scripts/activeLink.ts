document.addEventListener("astro:page-load", (): void => {
  const currentPath: string = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll<HTMLAnchorElement>("a").forEach((link: HTMLAnchorElement) => {
    const href: string | null = link.getAttribute("href");
    if (!href || href.startsWith("http")) return; 

    const normalized: string = href.replace(/\/$/, "") || "/";
    if (normalized === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});