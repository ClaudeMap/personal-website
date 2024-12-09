document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navigationList = document.querySelector(".styled-list");

  if (hamburger && navigationList) {
    hamburger.addEventListener("click", () => {
      navigationList.classList.toggle("expanded");
      hamburger.classList.toggle("active");
    });
  }
});
