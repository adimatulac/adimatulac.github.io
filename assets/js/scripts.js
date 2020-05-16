// add scripts for:
//  - dynamic content addition (into cards/tiles?)

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});