$(window).on('load resize', function(){
	if($(window).width() <= '1024') {
    	$('.index-footer__list').unwrap();
    }
    if($(window).width() <= '768') {
    	$('.our-team-slider .bx-wrapper').remove();
    }
    if($(window).width() <= '540') {
    	$('.description-surf__wrapp').removeClass('fadeInLeft');
    	$('.description-surf__wrapp').addClass('fadeInUp');
    }
});
