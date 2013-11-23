$(document).ready(function() {
	$(".demo").click(function(e) {
		e.preventDefault();
		$("body").highlightFeatures("show");
	});
});