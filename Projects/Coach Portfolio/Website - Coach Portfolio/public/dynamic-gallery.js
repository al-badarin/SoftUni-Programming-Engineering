const gallerySlide = document.querySelector(".gallery-slide");
const galleryImages = document.querySelectorAll(".gallery-image");
const prevBtn = document.createElement("div");
const nextBtn = document.createElement("div");
let counter = 0;

// Function to show the current slide
function showSlide(index) {
  gallerySlide.style.transform = `translateX(-${index * 100}%)`;
}

// Function to show the next slide
function nextSlide() {
  counter++;
  if (counter === galleryImages.length) {
    counter = 0;
  }
  showSlide(counter);
}

// Function to show the previous slide
function prevSlide() {
  counter--;
  if (counter < 0) {
    counter = galleryImages.length - 1;
  }
  showSlide(counter);
}

// Automatically change slide every 3 seconds
// setInterval(nextSlide, 3000);

// Create navigation buttons
prevBtn.classList.add("gallery-nav", "prev");
prevBtn.innerHTML = "&#10094;";
nextBtn.classList.add("gallery-nav", "next");
nextBtn.innerHTML = "&#10095;";

// Add click event listeners to navigation buttons
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Append navigation buttons to the gallery
document.getElementById("image-gallery").appendChild(prevBtn);
document.getElementById("image-gallery").appendChild(nextBtn);

