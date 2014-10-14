$(document).ready(function(){
	
	var $window = $(window);

	function checkWidth(){
			
		if($window.width() > 976){
			$('.contentContainer').css("width", 976);
		}
		else if($window.width() > 750){
			$(".contentContainer").css("width", 750);
		}

	}

	// Execute on load
	checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);
});