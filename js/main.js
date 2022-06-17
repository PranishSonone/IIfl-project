$(document).ready(function () {

  //  alert("hello")
  // Headers
  $('.hamburger').on('click', function () {
    $('.navigation').toggleClass('menu-open');
    $('.hamburger').toggleClass('menu-close');
    $('html').toggleClass('menu-page')
  });

  // .slider

  $(".bannerSlider").slick({
    dots: true,
    autoplay: false,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slideswToScroll: 1,
    arrows: false
  });

});







$(window).on('load', function () {
  // alert("Window Loaded");

  if ($(window).width() < 768) {
    $(".content").hide();
  } else {
    $(".content").show();
  }

});
$(window).resize(function () {
  if ($(window).width() < 768) {
    $(".content").hide();
  } else {
    $(".content").show();
  }
});

$(".accordion1").click(function () {
  console.log($(this));
  $(this).next(".content").slideToggle("slow");

  // var x = $(".plus").text();
  // if (x == "-") {
  //   $(".plus").show("slow").text("+");
  // } else {
  //   $(".plus").show("slow").text("-");
  // }


})

$(".accordion").click(function () {

  if ($(this).find(".content").slideToggle("slow")) {
 

  }else{
  
  }



  // var x =$(".plus").text();
  // if(x == "-"){
  //   $(".plus").show("slow").text("+");
  // }else{
  //   $(".plus").show("slow").text("-");
  // }
})



$(".single-acco h2").click(function () {
  // self clicking close
  if ($(this).next(".accodion-body").hasClass("active")) {
    $(this).next(".accodion-body").removeClass("active").slideUp();
    // $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
    $(this).children("span").html('+');
  } else {
    $(".accodion-body").removeClass("active").slideUp();
    // $(".single-acco h2 span").removeClass("fa-minus").addClass("fa-plus");
    $(".single-acco h2 span").html('+');

    $(this).next(".accodion-body").addClass("active").slideDown();
    // $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
    $(this).children("span").html('-');
  }
})