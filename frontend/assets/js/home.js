 // Ensure the carousel starts sliding automatically
 var myCarousel = document.querySelector('#videoCarousel')
 var carousel = new bootstrap.Carousel(myCarousel, {
     interval: 6000,
     pause: false // Ensures carousel continues sliding even on hover
 });