$(document).ready(function() {
	var isMenuTop = false;
	
	$('#toggle-menu-position').click(function() {
		if (!isMenuTop) {
			// Move menu to top
			$('#colorlib-aside').hide();
			$('#colorlib-header').show();
			$('#colorlib-footer').show();
			$('#colorlib-main').css('margin-left', '0');
			$('body').addClass('menu-top');
			$(this).text('Move Menu to Side');
			isMenuTop = true;
		} else {
			// Move menu to side
			$('#colorlib-header').hide();
			$('#colorlib-footer').hide();
			$('#colorlib-aside').show();
			$('#colorlib-main').css('margin-left', '');
			$('body').removeClass('menu-top');
			$(this).text('Move Menu to Top');
			isMenuTop = false;
		}
	});
});