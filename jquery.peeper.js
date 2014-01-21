(function( $ ){
	$.fn.peeper = function(options) {

		var defaults = {
			peeps: 'li',
			peepsToShow: 3,
		}
		var options =  $.extend(defaults, options);
		
		return this.each(function() {
			var peep = $(this);
			var listLength =peep.find(options.peeps).length;
			var blah = '<div class="peeper">';
			
			peep.find(options.peeps).each(function(index, element){
				
			/*	if(index == options.peepsToShow){
					$(this).before('<div class="peeper">');
				} else if (index == (listLength - 1)){
					$(this).after('</div>');
				}
				console.log(index);*/
			
			
				if(index >= options.peepsToShow){
					blah = blah + $(this).wrap('<p/>').parent().html();
					$(this).unwrap();
					console.log(blah);
					$(this).remove();
				}
			});
					blah = blah + '</div>';
					peep.append(blah);
			//console.log(peep.html());
			//console.log(options.child);
			
		});
	};
})( jQuery );