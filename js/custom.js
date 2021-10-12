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
        infinite: true,
        speed: 500,
        fade: true,
    })
})