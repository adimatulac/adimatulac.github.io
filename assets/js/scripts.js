// add scripts for:
//  - dynamic content addition (into cards/tiles?)
//  - navbar hide on scroll

// to load navbar for every page

// document.addEventListener("DOMContentLoaded", function() {
//     let 
// });

// jQuery.noConflict();
//      // Use jQuery via jQuery() instead of via $()
//      jQuery(document).ready(function(){
//        jQuery("attribution-container").hide();
//      });  

$(document).ready(function(){
    $("#nav-placeholder").load("navigation.html", function() {
        alert("this was load was performed");
    });
});