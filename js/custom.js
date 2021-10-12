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
        prevArrow:"<i class='fas fa-chevron-left banner_arrow'></i>",
        nextArrow:"<i class='fas fa-chevron-right banner_arrow'></i>",
    })
    //slide
      $('.clickable').on('click',function(){

         $('.categories-dropdown-wrap').slideToggle(500,);
         
      

      })
   
})