import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  id.forEach((id) => {
    $(`#carousel-${id}`).owlCarousel({
      items: 1,
      nav: true,
      navContainer: `#controls-${id}`,
      dots: true,
      dotsContainer: `#dots-${id}`,
    });
  })
});