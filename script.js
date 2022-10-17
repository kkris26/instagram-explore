// swiper
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: false,
//   },
// });
// swiper

$("#following").hide();
$("#follow").click(function () {
  $("#follow").hide();
  $("#following").show();
});
$("#following").click(function () {
  $("#follow").show();
  $("#following").hide();
});

$("#heart-fill").hide();
$("#heart, .heart-empety-active").click(function () {
  $("#heart, .heart-empety-active").hide();
  $("#heart-fill").show();
  $("#likes").html("998");
});

$(".like-content").hide();
$(".content").dblclick(function () {
  $("#heart, .heart-empety-active").hide();
  $("#heart-fill").fadeIn();
  $(".like-content").show();
  setTimeout(function () {
    $(".like-content").hide();
  }, 1000);
  $("#likes").html("998");
});
$(".heart-empety-active").hide();
$("#heart-fill").click(function () {
  $("#heart").hide();
  $(".heart-empety-active").show();
  $("#heart-fill").hide();
  $("#likes").html("997");
});

$(".bookmark-fill, .bookmark-empety").hide();
$(".bookmark, .bookmark-empety").click(function () {
  $(".bookmark, .bookmark-empety").hide();
  $(".bookmark-fill").fadeIn();
  $(".saved").addClass("active");
  setTimeout(function () {
    $(".saved").removeClass("active");
  }, 2000);
  $(".save-action").addClass("active");
  $(".profile-menu").addClass("active");
});
$(".bookmark-fill").click(function () {
  $(".bookmark, .bookmark-empety").fadeIn();
  $(".bookmark").hide();
  $(".bookmark-fill").hide();
  $(".save-action").removeClass("active");
  $(".profile-menu").removeClass("active");
});

// $(".more-wrapper, .more").hide();
$("#more-button").click(function () {
  $(".more-wrapper, .more").addClass("active");
});
$(".more-wrapper").click(function () {
  $(".more-wrapper, .more").removeClass("active");
});
$(window).scroll(function () {
  $(".more-wrapper, .more").removeClass("active");
});
