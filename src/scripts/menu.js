document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navigationList = document.querySelector(".styled-list");
  const navLinks = document.querySelectorAll(".styled-list a ");

  if (hamburger && navigationList) {
    hamburger.addEventListener("click", () => {
      navigationList.classList.toggle("expanded");
      hamburger.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigationList.classList.remove("expanded");
        hamburger.classList.remove("active");
      });
    });

    document.addEventListener("click", (event) => {
      const isClickInsideMenu = navigationList.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (!isClickInsideMenu && !isClickOnHamburger) {
        navigationList.classList.remove("expanded");
        hamburger.classList.remove("active");
      }
    });
  }
});
