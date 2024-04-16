document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// JavaScript for carousel, animations, zoom effect, and contact form submission
document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-container img');
    const mealImages = document.querySelectorAll('.meal img');
    const serviceImages = document.querySelectorAll('.services-container #services .box img');
    const hotelImages = document.querySelectorAll('.hotel-images img');

    function addTransformListener(images) {
        images.forEach(image => {
            image.addEventListener('click', function () {
                this.style.transform = 'scale(1.1)';
            });
            image.addEventListener('mouseleave', function () {
                this.style.transform = 'scale(1)';
            });
        });
    }

    addTransformListener(galleryImages);
    addTransformListener(mealImages);
    addTransformListener(serviceImages);
    addTransformListener(hotelImages);
});

// JavaScript to trigger animation on scroll
window.addEventListener('scroll', function() {
    var detailsContainer = document.querySelector('.details-container');
    var image = detailsContainer.querySelector('img');

    var positionFromTop = detailsContainer.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    // If the details container is in the viewport
    if (positionFromTop - screenHeight <= 0) {
        // Add the animation class
        image.classList.add('animate');
    } else {
        // Remove the animation class
        image.classList.remove('animate');
    }
});



//butt
// Add this JavaScript to your script.js file

//form
function openForm(formId) {
    document.getElementById(formId).style.display = "block";
  }

  // Function to close the specified form
  function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
  }