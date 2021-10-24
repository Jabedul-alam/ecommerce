$(function (){
    // top header news slider js strat
        $('.header_news').slick({
            arrows:false,
            vertical:true,
            verticalSwiping:true,
            autoplay: true,
            autoplaySpeed: 1000,
        })

     // top header news slider js end
     //banner slider js
     $('.banner_slider').slick({
        dots: true,
        dotsClass:'banner_dots',
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed:1500,
        prevArrow:"<i class='fas fa-chevron-left banner_arrow slide_arrow'></i>",
        nextArrow:"<i class='fas fa-chevron-right banner_arrow slide_arrow'></i>",
    })
    //slide click
      $('.clickable').on('click',function(){

         $('.categories-dropdown-wrap').slideToggle(500,);
         
      })
       //slide click end
       //window scroll js strat
      $(window).on('scroll',function(){
        //script for sticy menu;
        var scroolpostion=$(window).scrollTop();
        if(scroolpostion > 0){
            $('.menu').addClass('stickynav');
        }else{
            $('.menu').removeClass('stickynav');
        }
        
    })
    //window scroll js end
    //featured slider strat
    $('.ft_catg_slider').slick({
        slidesToShow: 10,
        slidesToScroll: 2,
        speed: 500,
        loop :true,
        infinite:true,
        prevArrow:" <i class='fas fa-long-arrow-alt-left slide_arrow featured_arrow'></i>",
        nextArrow:" <i class='fas fa-long-arrow-alt-right slide_arrow featured_arrow'></i>",
        
    })
      //featured slider end
    //sells slider js strat
    $('.sells_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow:" <i class='fas fa-long-arrow-alt-left slide_arrow sells_arrow'></i>",
        nextArrow:" <i class='fas fa-long-arrow-alt-right slide_arrow sells_arrow'></i>",
        
    })
    $('.sells_slide_2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow:" <i class='fas fa-long-arrow-alt-left slide_arrow featured_arrow'></i>",
        nextArrow:" <i class='fas fa-long-arrow-alt-right slide_arrow featured_arrow'></i>",
        
    })
    $(window).on('load',function(){
        $('#preloader').fadeOut(1000);
    })
})

$('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<ul class="d-flex"><li class="w-25"><span class="timer"> %D</span><span>Dayes</span></li><li class="w-25"><span class="timer">%H</span><span>Hours</span></li><li class="w-25"><span class="timer">%M</span><span>Min</span></li><li class="w-25"><span class="timer">%S</span><span>Sce</span></li> </ul>'));
    });
  });