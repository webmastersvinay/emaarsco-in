//Popup
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
		$('.enquiry').fadeIn();
    } else {
		$('.enquiry').fadeOut();
    }
});

$(".closeit").click(function(){
	$("#quichForm").hide();
	$(".closeit").hide();
	$(".formtitle").show();
})
$(".enquire-button").click(function(){
	$("#quichForm").toggle();
	$(".closeit").toggle();
	$(".formtitle").toggle();
});
$(".formtitle").click(function(){
	$("#quichForm").toggle();
	$(".closeit").toggle();
	$(".formtitle").hide();
});

// navigation sidebar
function openNav() {
    document.getElementById("main-navigation").style.right = "0";
}
function closeNav() {
    document.getElementById("main-navigation").style.right = "-200px";
}
// search input
$(document).ready(function () {
	$("#main-input").click(function(){
	    $(".advance-search").toggle();
	});
	$(".close-advance-search").click(function(){
	    $(".advance-search").hide();
	});
	//select city
	$(".city-selector").click(function(){
	    $(".city-box").show();
	});
	$(".close-city").click(function(){
	    $(".city-box").hide();
	});
});
$(document).mouseup(function (e){
  var container = $(".hideonmouseout"); 
  if (!container.is(e.target)
      && container.has(e.target).length === 0)
  {
    container.hide();
  }
});
// slider
$(".slider-gallery").slick({
    dots: true,
    infinite: true,
    slidesToShow:1,
    autoplay: true,
    slidesToScroll:1,
    arrows: false,
    pauseOnHover: false
});

$(".similar-projects").slick({
    dots: false,
    infinite: true,
    slidesToShow:4,
    autoplay: false,
    slidesToScroll:1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow:3,
    slidesToScroll:1,
    infinite: true,
    autoplay:false,
    dots: true
      }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow:2,
    autoplay:false,
    slidesToScroll: 1
      }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow:2,
    autoplay:false,
    slidesToScroll: 1
      }
    }
  ]
});
$(".floorplans").slick({
    dots: false,
    infinite: true,
    slidesToShow:3,
    autoplay: true,
    slidesToScroll:1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow:3,
    slidesToScroll:1,
    infinite: true,
    autoplay:true,
    dots: false
      }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow:2,
    autoplay:true,
    slidesToScroll: 1
      }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow:1,
    autoplay:true,
    slidesToScroll: 1
      }
    }
  ]
});
$(".videos").slick({
    dots: false,
    infinite: true,
    slidesToShow:3,
    autoplay: false,
    slidesToScroll:1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow:2,
    slidesToScroll:1,
    infinite: true,
    autoplay:false,
    dots: true
      }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow:2,
    autoplay:false,
    slidesToScroll: 1
      }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow:2,
    autoplay:false,
    slidesToScroll: 1
      }
    }
  ]
});
$(".cupdate").slick({
    dots: false,
    infinite: true,
    slidesToShow:4,
    autoplay: false,
    slidesToScroll:1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow:3,
    slidesToScroll:1,
    infinite: true,
    autoplay:false,
    dots: true
      }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow:2,
    autoplay:false,
    slidesToScroll: 1
      }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow:2,
    autoplay:false,
    slidesToScroll: 1
      }
    }
  ]
});
$(".downloads").slick({
    dots: false,
    infinite: true,
    slidesToShow:4,
    autoplay: false,
    slidesToScroll:1,
    arrows: true,
    pauseOnHover: true,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow:4,
    slidesToScroll:1,
    infinite: true,
    autoplay:false,
    dots: true
      }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow:3,
    autoplay:false,
    slidesToScroll: 1
      }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow:3,
    autoplay:false,
    slidesToScroll: 1
      }
    }
  ]
});
//advanced filter
$("#typebtn").on('click', function() {
   $("#type-filter").toggle();
   $("#status-filter,#price-filter,#bhk-filter").hide();
   $("#typebtn").toggleClass('active');
   $("#statusbtn,#pricebtn,#bhkbtn").removeClass('active');
});
$("#statusbtn").on('click', function() {
   $("#status-filter").toggle();
   $("#type-filter,#price-filter,#bhk-filter").hide();
   $("#statusbtn").toggleClass('active');
   $("#typebtn,#pricebtn,#bhkbtn").removeClass('active');
});
$("#pricebtn").on('click', function() {
   $("#price-filter").toggle();
   $("#status-filter,#type-filter,#bhk-filter").hide();
   $("#pricebtn").toggleClass('active');
   $("#typebtn,#statusbtn,#bhkbtn").removeClass('active');
});
$("#bhkbtn").on('click', function() {
   $("#bhk-filter").toggle();
   $("#status-filter,#price-filter,#type-filter").hide();
   $("#bhkbtn").toggleClass('active');
   $("#typebtn,#pricebtn,#statusbtn").removeClass('active');
});
// register
$(".regnow").on('click', function() {
   $("#signup").show();
   $("#signin").hide();
});
$(".lognow").on('click', function() {
   $("#signup").hide();
   $("#signin").show();
});
// home login btn
$("#home-lognow").on('click', function() {
   $("#signup").hide();
   $("#signin").show();
});
$("#home-regnow").on('click', function() {
   $("#signup").show();
   $("#signin").hide();
});

// filter button
$("#filter-btn").on('click', function() {
   $(".research-filters").toggleClass('showfilter');
});

$(".research-input").on('click', function() {
   $(".research-filters").toggleClass('showfilter');
});

// wishlist
$(".wishlist").on('click', function() {
   $(".wishlist").toggleClass('shortlisted');
});

// table fixed
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();


// smooth scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    $('#navbarNav ul li a').each(function (event) {
      if (y >= $($(this).attr('href')).offset().top -120) {
        $('#navbarNav ul li a').not(this).removeClass('active');
        $(this).addClass('active');
      }
    });
  
  });
});


$('#navbarNav ul li a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
$('html, body').animate({
scrollTop: target.offset().top -70}, 1000);
return false;
}
}
});