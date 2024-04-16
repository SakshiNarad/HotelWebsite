document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("vortex-img");
  
    // Function to trigger the vortex effect
    function triggerVortex() {
      img.classList.add("vortex");
      // Reset the transition after the animation ends
      setTimeout(() => {
        img.classList.remove("vortex");
      }, 1000); // Adjust duration to match the CSS transition time
    }
  
    // Event listener to trigger the vortex effect
    img.addEventListener("click", triggerVortex);
  });
