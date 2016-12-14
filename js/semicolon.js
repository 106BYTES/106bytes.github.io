const NAVBAR_BACKGROUND = "rgba(0,0,0, 0.7)";

var navbar = $('nav:first-child');
var navbar_height = navbar.height();

$(function() {
  //# 링크에 대해 애니메이션
  $('a[href*="#"]').click(function(){
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - navbar_height
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  $('section#intro div[data-fadeIn="true"]').fadeIn(1000);
});

$(window).scroll(function(){
  var scroll = $(this).scrollTop();

  var intro = $('section#intro');

  if(scroll >= intro.offset().top + intro.height()){
    $('.navbar-inverse .navbar-brand').fadeIn(0);
    navbar.css("background-color", NAVBAR_BACKGROUND);
  }else{
    $('.navbar-inverse .navbar-brand').fadeOut(0);
    navbar.css("background-color", "rgba(0,0,0, 0.0)");
  }
});
