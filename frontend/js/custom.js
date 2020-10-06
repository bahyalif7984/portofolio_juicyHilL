$(function(){
    
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1500,
    asNavFor: '.slider-for',
    dots:false,
    centerMode:true,
    centerPadding:'0',
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.multiple-items'
  });


});