jQuery(document).ready(function($) {
    $(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
	responsive: {
	    0: {
		items: 1
	    },
	    600: {
		items: 3
	    },
	    1000: {
		items: 5
	    }
	}
    });
});
