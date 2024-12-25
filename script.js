   $(function(){
     
    // カルーセル
   $('.carousel').slick({
     autoplay: true,
     dots: true,
     infinite: true,
     autoplaySpeed: 5000,
     arrows: false,
     });

      // スマホ用カルーセル
   $('.carousel_sp').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    });
    });