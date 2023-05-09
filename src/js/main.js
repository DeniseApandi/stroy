$(document).ready(function () {
  var owl = $('#home-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
  });
  // Go to the next item
  $('.home__next').click(function () {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.home__prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })

  var owl = $('#feedback-slider');
  owl.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    margin: 16
  });
  // Go to the next item
  $('.home__next').click(function () {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.home__prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })
});