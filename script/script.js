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

	var valActiveCheckbox = [];

	$("button.button-orange").click(function () {				
		valActiveCheckbox = [];		
		var activeCheckbox = $(this).parents("ul.dropdown-menu-custom").find("input:checked"); 
		$(activeCheckbox).each (
			function(){
				valActiveCheckbox.push($(this).val());
			}
		);
		console.log(valActiveCheckbox);
		addActiveCheckbox (valActiveCheckbox, $(this).parents(".button-selected-container"));
		console.log($(this).parents(".button-selected-container"));
   	});

   	$("button.closeFilters").click(function () {	
   		valActiveCheckbox = [];
   		addActiveCheckbox (valActiveCheckbox,$(this).parents(".button-selected-container"));
   		$(this).parent().find("input").prop("checked", false);
   	});

   	$(".filter-value").click(function () {
   		valActiveCheckbox.push($(this).text());
   		addActiveCheckbox (valActiveCheckbox, $(this).parents(".button-selected-container"));
   		console.log(valActiveCheckbox);
   	});

	function addActiveCheckbox (valActiveCheckbox, container){
		var selectedFilters = $(container).find("button.selectedFilters");
		var closeFilters = $(container).find("button.closeFilters");
		if (valActiveCheckbox.length > 0) {
			$(selectedFilters).removeClass("hidden");
			$(closeFilters).removeClass("hidden");
		} else {
			$(selectedFilters).addClass("hidden");
			$(closeFilters).addClass("hidden");
		}

   		if (valActiveCheckbox.length == 1){
   			$(selectedFilters).text(valActiveCheckbox[0]);
   		}

   		if (valActiveCheckbox.length > 1){
   			$(selectedFilters).text("("+valActiveCheckbox.length+")");
   		}

   	}
});



