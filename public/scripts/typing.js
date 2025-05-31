document.addEventListener("DOMContentLoaded", () => {
  const words = ["experiences", "apps", "systems", "products", "prototypes"];
  const typedWord = document.getElementById("typed-word");
  const cursor = document.querySelector(".cursor");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.substring(0, charIndex);
    typedWord.textContent = displayedText;

    // Disable blinking while typing
    cursor.classList.remove("blink");

    if (!isDeleting && charIndex < currentWord.length) {
      //typing
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      //deleting
      charIndex--;
      setTimeout(type, 60);
    } else {
      // Pause before deleting/moving to next word enable blinking
      cursor.classList.add("blink");
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, 1000);
    }
  };

  type();
});
