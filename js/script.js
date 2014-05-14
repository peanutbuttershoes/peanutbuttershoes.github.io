$(document).ready(function() {

	// Initialize Masonry
	$('#content').masonry({
		columnWidth: 300,
		itemSelector: '.item',
	}).imagesLoaded(function() {
		$(this).masonry('reload');
	});

});