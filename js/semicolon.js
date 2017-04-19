const NAVBAR_BACKGROUND = "#F6F6F6";
const NAVBAR_TEXTCOLOR = "#2E2E2E";

const THEME_COLOR_SUPERLIGHT = "#b3e5fc";
const THEME_COLOR_LIGHT = "#4fc3f7"
const THEME_COLOR = "#03a9f4";
const THEME_COLOR_SEMIDEEP = "#0288d1";
const THEME_COLOR_DEEP = "#01579b";

const BRAND_NORMAL_COLOR = "#2E2E2E"
const BRAND_HOVER_COLOR = THEME_COLOR;
const BRAND_CLICK_COLOR = THEME_COLOR_DEEP;

const NAVMENU_NORMAL_COLOR = "#2E2E2E"
const NAVMENU_HOVER_COLOR = THEME_COLOR;
const NAVMENU_CLICK_COLOR = THEME_COLOR_DEEP;

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

$('.navbar-menu').hover(
  function() {
    $(this).find('*').css("color", NAVMENU_HOVER_COLOR);
  },
  function() {
    $(this).find('*').css("color", NAVBAR_TEXTCOLOR);
  }
);

$(document).ready(function(){
  $('.main_box#intro div[data-fadeIn="true"]').fadeIn(1000);
});

var position = 0; //0: 인트로, 1: 다른 것들

$(window).scroll(function(){
  var scroll = $(this).scrollTop();

  var intro = $('section#intro');

  if(scroll >= intro.offset().top + intro.height()){
    if(position !=1 ) {
      $('.navbar-inverse .navbar-brand').fadeIn(0);
      navbar.find('hr').fadeIn(0);
      /* navbar.css("background-color", NAVBAR_BACKGROUND);
      $('.navbar-menu > *').css("color", NAVBAR_TEXTCOLOR);
      $('nav:first-child hr').css("border-color", THEME_COLOR); */
    }
    position = 1;
  }else{
    if(position !=0 ) {
      $('.navbar-inverse .navbar-brand').fadeOut(0);
      navbar.find('hr').fadeOut(0);
      /* navbar.css("background-color", "rgba(0,0,0, 0.0)");
      $('.navbar-menu > *').css("color", "#FFF");
      $('nav:first-child hr').css("border-color", "#FFF"); */
    }
    position = 0;
  }
});
