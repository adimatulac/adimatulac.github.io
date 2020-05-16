// add scripts for:
//  - dynamic content addition (into cards/tiles?)

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

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

$('.projectModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var projectName = button.data('name');

  var project = search(projectName, projects);

  var modal = $(this)
  modal.find('.project-title').text(projectName);
  modal.find('.project-description').text(project.description);
  modal.find('.project-stack').text(project.stack);
  modal.find('.modal-footer').html('<a href="https://github.com/' + project.url + '"><img src="assets/images/svg/github-logo.svg" class="modal-icon"></a>');
});

function search(name, projects) {
  for (let i=0; i < projects.length; i++) {
    if (projects[i].title === name) {
      return projects[i];
    }
  }
}

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});

// $('#projectModal').modal();

// function afterModalTransition(e) {
//   e.setAttribute('style', 'display: none !important;');
// }
// $('#projectModal').on('hide.bs.modal', function (e) {
// 	setTimeout( () => afterModalTransition(this), 200);
// })