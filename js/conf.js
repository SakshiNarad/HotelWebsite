document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-container img');
    let index = 0;

    function changeImage() {
      images.forEach(img => img.style.opacity = 0);
      index = (index + 1) % images.length;
      images[index].style.opacity = 1;
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
  });

  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image img');
    let index = 0;

    function changeImage() {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.imagesed img');
    let index = 0;

    function changeImage() {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
  });
  