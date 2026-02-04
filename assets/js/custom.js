// sticky header
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('header').addClass("sticky");
  }
  else {
    $('header').removeClass("sticky");
  }
});
// nav
$('.menubar').click(function () {
  $('.menu-wrp').addClass('active');
  $('.menu-overlay').toggle();
  e.preventDefault();
});
$('.menuclose').click(function () {
  $('.menu-wrp').removeClass('active');
  $('.menu-overlay').toggle();
  e.preventDefault();
});
$('.menu-overlay').click(function () {
  $('.menu-wrp').removeClass('active');
  $('.menu-overlay').toggle();
  e.preventDefault();
});

// slider
$(".gallery").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  arrows: false
});
$(".flides").slick({
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        autoplay: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    }
  ]
});
$(".prolider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  autoplay: false,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    }
  ]
});
$(".blider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  autoplay: false,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    }
  ]
});
$(".teslider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  autoplay: false,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    }
  ]
});


$('.relpar.switch').hide()
$(".fixed-right").click(function () {
  $(".relpar.switch").toggle();

});
$(".close").click(function () {
  $(".relpar.switch").hide();

});



// 
$('.menu').hide()
$(".bar").click(function () {
  $(".menu").toggle(500);

});
$(".close").click(function () {
  $(".menu").hide(500);

});
// 
$(".awards").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  autoplay: false,
  slidesToScroll: 3,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }
    }
  ]
});