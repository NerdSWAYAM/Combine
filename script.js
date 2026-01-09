document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const main = document.getElementById("main-content");

  /* INTRO */
  function enterSite() {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    setTimeout(() => {
      intro.style.display = "none";
      main.classList.remove("hidden");
      window.scrollTo(0, 0);
    }, 700);
  }

  enterBtn.addEventListener("click", enterSite);

  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && intro.style.display !== "none") {
      enterSite();
    }
  });

  /* SCROLL REVEAL */
  const revealEls = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-up"
);


  const revealOnScroll = () => {
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* FOOTER */
  document.querySelector("footer").innerHTML =
    `© ${new Date().getFullYear()} Prajwal & Swayam`;
});
