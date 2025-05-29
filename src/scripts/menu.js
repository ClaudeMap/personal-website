document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navigationList = document.querySelector(".styled-list");
  const navLinks = document.querySelectorAll(".styled-list a");

  const closeMenu = () => {
    navigationList.classList.remove("expanded");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open-blur");
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
