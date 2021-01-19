// $(".slider__courses-class").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// });

//first slider

$(".slider__courses-class").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

//video area slider
$(".video__area__slider__inner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".owl__prev"),
  nextArrow: $(".owl__next"),
});

//third slider
$(".second__slider__slick").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".second_slider__prev"),
  nextArrow: $(".second_slider__next"),
});

const prevVideoBtn = document.querySelector("slick-prev");

// prevVideoBtn.style.background = 'url("../img/prev.png")';

//nav

const btnNav = document.querySelectorAll(".dropdown-toggle"),
  dropdownMenu = document.querySelector(".dropdown-menu"),
  dropdownMenuItem = document.querySelectorAll(".dropdown-item");

btnNav.forEach((e) => {
  e.addEventListener("mouseover", () => {
    dropdownMenu.classList.add("show");
    dropdownMenu.style.opacity = "1";
    dropdownMenu.classList.remove("hide");
    console.log("show");
  });
  //   dropdownMenu.addEventListener("mouseout", (e) => {
  //     dropdownMenu.classList.add("hide");
  //     dropdownMenu.style.opacity = "0";
  //     dropdownMenu.classList.remove("show");
  //     console.log("hide");
  //   });
});

// dropdownMenu.addEventListener("mouseout", (e) => {
//         dropdownMenu.classList.add("hide");
//         dropdownMenu.style.opacity = "0";
//         dropdownMenu.classList.remove("show");
//         console.log("hide");
//       });

dropdownMenuItem.forEach((e) => {
  e.addEventListener("mouseover", () => {
    dropdownMenu.classList.add("show");
    dropdownMenu.style.opacity = "1";
    dropdownMenu.classList.remove("hide");
    console.log("show");
  });
  e.addEventListener("mouseout", () => {
    dropdownMenu.classList.add("hide");
    dropdownMenu.style.opacity = "0";
    dropdownMenu.classList.remove("show");
    console.log("hide");
  });
});


//sticky

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }
});

// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.querySelector(".header");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// if (document.offsetTop == 0) {
//   navbar.classList.remove("sticky");

// }