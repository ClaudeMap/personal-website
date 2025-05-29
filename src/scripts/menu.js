document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navigationList = document.querySelector(".styled-list");
  const navLinks = document.querySelectorAll(".styled-list a");

  const closeMenu = () => {
    if (!navigationList.classList.contains("expanded")) return;
    navigationList.classList.remove("expanded");
    hamburger.classList.remove("active");

    const onTransitionEnd = (e) => {
      if (e.propertyName === "transform") {
        document.body.classList.remove("menu-open-blur");
        navigationList.removeEventListener("transitionend", onTransitionEnd);
      }
    };

    navigationList.addEventListener("transitionend", onTransitionEnd);
  };

  if (hamburger && navigationList) {
    hamburger.addEventListener("click", () => {
      navigationList.classList.toggle("expanded");
      hamburger.classList.toggle("active");
      document.body.classList.toggle("menu-open-blur");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      const isClickInsideMenu = navigationList.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (
        navigationList.classList.contains("expanded") &&
        !isClickInsideMenu &&
        !isClickOnHamburger
      ) {
        closeMenu();
      }
    });
  }
});
