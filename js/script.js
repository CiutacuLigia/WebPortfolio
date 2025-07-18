$('nav a').click(function(){     
	$('html').animate({
    	scrollTop: $( $(this).attr('href') ).offset().top
	}, 500);
});
