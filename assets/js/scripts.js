// add scripts for:
//  - dynamic content addition (into cards/tiles?)
//  - navbar hide on scroll

// to load navbar for every page - (jk too many problems)
// $(document).ready(function(){
//     $("#nav-placeholder").load("navigation.html");

//     $("#foot-placeholder").load("footer.html");
// });

// $(window).scroll(function(e) {

//     // add/remove class to navbar when scrolling to hide/show
//     var scroll = $(window).scrollTop();
//     if (scroll >= 100) {
//         $(".navbar").addClass("navbar-hide");
//     } else {
//         $(".navbar").removeClass("navbar-hide");
//     }

// });

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("nav").outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
     hasScrolled();
      didScroll = false;
    }
}, 250);

function hasScrolled() {
  let st = $(this).scrollTop();
      
    if (Math.abs(lastScrollTop - st) <= delta)
      return;
      
    if (st > lastScrollTop && st > navbarHeight){
    // scroll down
      $("nav").addClass("navbar-hide");
    } else {
    // scroll up
    if(st + $(window).height() < $(document).height()) {
      $("nav").removeClass("navbar-hide");
    }
  }   
  lastScrollTop = st;
} 