$(document).ready(function() {

	var $container = $('#content');
	// initialize Masonry after all images have loaded  
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