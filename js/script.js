AOS.init();

$('.sec-value').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<span class="a-prev"><i class="fa fa-chevron-circle-left"></i></span>',
  nextArrow: '<span class="a-next"><i class="fa fa-chevron-circle-right "></i></span>',
  
  responsive:[
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]
});

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$(function(){

  $('.nav-area button').click(function(){
    $('.right1 ul').slideToggle(300);
  })
})