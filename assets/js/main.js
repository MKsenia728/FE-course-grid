
$(document).ready(function () {

  $('.header-navbar__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });

});

$(document).ready(function(){
	$('.header-navbar__button').on('click', function () {
		$(this).toggleClass('header-navbar__button--active');
    $('.header-navbar__list').stop(true, true).toggleClass('header-navbar__list--active'); 
	});
});