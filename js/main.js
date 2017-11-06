


$(function(){


 /* $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 10) {
    $("#sticky-header").removeClass("sticky");
   }else{
    $("#sticky-header").addClass("sticky");
   }
  });*/




	$('.slider-active').owlCarousel({
    loop:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
})