(function( $ ){
	$.fn.peeper = function(options) {

		var defaults = {
			peepsies: 3000,
			peepington: 1000,
		}
		var options =  $.extend(defaults, options);
		
		
		return this.each(function() {

			var peeps = $(this);
			console.log(peeps.html());
			
			
		});
	};
})( jQuery );