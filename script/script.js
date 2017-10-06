$(document).ready(function(){
	$(".stars").each(function() {
	    $(this).rateBar({
				defaultStarColor : '#777777',
				ratedStarColor : '#FFD700',
				onRate : function(rate) {
					console.log(rate);
				}
		});
	});
});

