$('.category-content').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: false,
  variableWidth: true,
  prevArrow: `<button type='button' class='slick-prev pull-left btn-arrow'><ion-icon name="arrow-back-outline" class="icon-arrow"></ion-icon></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right btn-arrow'><ion-icon name="arrow-forward-outline" class="icon-arrow"></ion-icon></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

$('.top-nft-content').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: false,
  variableWidth: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,

  prevArrow: `<button type='button' class='slick-prev pull-left btn-arrow'><ion-icon name="arrow-back-outline" class="icon-arrow"></ion-icon></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right btn-arrow'><ion-icon name="arrow-forward-outline" class="icon-arrow"></ion-icon></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const activeClass = 'is-show';
toggle.addEventListener('click', function () {
  menu.classList.add(activeClass);
});
window.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
    menu.classList.remove(activeClass);
  }
});
