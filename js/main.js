$(document).ready(function() {
    $('.scrollspy').scrollSpy();
    $('.pushpin').pushpin();
    $('.project-tech').hide();
    $('.project').hover(function() {
        $(this).find('.project-tech').show();
    }, function() {
        $(this).find('.project-tech').hide();
    });

    $('.parallax').parallax();
    M.updateTextFields();
});
