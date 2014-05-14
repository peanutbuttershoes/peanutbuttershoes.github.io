$(document).ready(function() {

	// initialize Masonry
	var $container = $('#content').masonry();
	// layout Masonry again after all images have loaded
	$container.imagesLoaded( function() {
  	$container.masonry();
	});

	// Initialize Masonry
	$('#content').masonry({
		columnWidth: 300,
		itemSelector: '.item',
	}).imagesLoaded(function() {
		$(this).masonry('reload');
	});

});