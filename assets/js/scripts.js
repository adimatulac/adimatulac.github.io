// add scripts for:
//  - dynamic content addition (into cards/tiles?)

// hiding navbar on scroll

// let didScroll;
// let lastScrollTop = 0;
// let delta = 5;
// let navbarHeight = $("nav").outerHeight();

// $(window).scroll(function(event) {
//   didScroll = true;
// });

// setInterval(function() {
//   if (didScroll) {
//      hasScrolled();
//       didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//   let st = $(this).scrollTop();
      
//     if (Math.abs(lastScrollTop - st) <= delta)
//       return;
      
//     if (st > lastScrollTop && st > navbarHeight){
//     // scroll down
//       $("nav").addClass("navbar-hide");
//     } else {
//     // scroll up
//     if(st + $(window).height() < $(document).height()) {
//       $("nav").removeClass("navbar-hide");
//     }
//   }   
//   lastScrollTop = st;
// } 

var $root = $('html, body');

$('a[href^=\\#]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    event.preventDefault();
});