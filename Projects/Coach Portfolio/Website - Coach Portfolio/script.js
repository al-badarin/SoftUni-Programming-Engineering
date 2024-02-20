// Add this JavaScript to your script.js file
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('nav-menu_visible');
    });
  });
  