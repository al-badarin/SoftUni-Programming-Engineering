document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("nav-menu_visible");
  });

  function handleScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 0) {
      navToggle.style.color = "#007bff"; // Change to your desired color
    } else {
      navToggle.style.color = ""; // Empty string to revert to default color
    }

    const goToTopBtn = document.getElementById("goToTopBtn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  }

  window.addEventListener("scroll", handleScroll);

  const goToTopBtn = document.getElementById("goToTopBtn");

  // Smooth scroll to the top when the button is clicked
  goToTopBtn.addEventListener("click", function () {
    // Smooth scrolling using scroll-behavior CSS property
    if ("scrollBehavior" in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = "smooth";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Reset scroll-behavior to auto after the smooth scroll
      setTimeout(function () {
        document.documentElement.style.scrollBehavior = "auto";
      }, 1000); // Adjust this delay as needed
    } else {
      // For browsers that do not support scroll-behavior
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });
});
