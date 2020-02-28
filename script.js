$('[data-slick]').slick({
 dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});


$( "#item-date" ).click(function() {
  $( "#intro" ).toggle( "intro", function() {
  });
});

    $( "#burger" ).click(function() {
      $( "#burger__content" ).toggle( "burger__content", function() {
      });
    });
$( "#dashboard__button" ).click(function() {
      $( "#dashboard__content" ).toggle( "dashboard__content", function() {
      });
    });


$("#burger").click(function(){
  $(".burger_el").toggleClass("burger_el-active");
});

$("#dashboard__button").click(function(){
  $(".dashboard__block").toggleClass("dashboard__block-active");
});

$("#burger").click(function(){
  $(".footer__container").toggleClass("footer__container-active");
});
$("#dashboard__button").click(function(){
  $(".footer__container").toggleClass("footer__container-active");
});
$("#dashboard__button").click(function(){
  $(".header__nav").toggleClass("header__nav-active");
});
$("#dashboard__button").click(function(){
  $(".dashboard__show").toggleClass("dashboard__show-active");
});
$("#notification__button").click(function(){
  $(".notification__show").toggleClass("notification__show-active");
});
$("#notification__button").click(function(){
  $(".item-number").toggleClass("item-number-hide");
});
$("#info__show-button").click(function(){
  $(".info__show").toggleClass("info__show-active");
});


