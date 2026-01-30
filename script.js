let currentIndex = 0;
const images = [
  
  "images/nature1.jpg","images/nature2.jpg","images/nature3.jpg","images/nature4.jpg","images/nature5.jpg",
  
  "images/animal1.jpg","images/animal2.jpg","images/animal3.jpg","images/animal4.jpg","images/animal5.jpg",
  
  "images/architecture1.jpg","images/architecture2.jpg","images/architecture3.jpg","images/architecture4.jpg","images/architecture5.jpg"
];

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}


function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery img");
  allImages.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
