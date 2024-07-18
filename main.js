//swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    var heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach(function(heartIcon) {
        heartIcon.addEventListener('click', function() {
            if (this.classList.contains('bx-heart')) {
                this.classList.replace('bx-heart', 'bxs-heart'); // Switch to filled heart
                this.classList.add('active'); // This will apply the red color
            } else {
                this.classList.replace('bxs-heart', 'bx-heart'); // Switch back to outlined heart
                this.classList.remove('active'); // Remove the red color
            }
        });
    });
});

