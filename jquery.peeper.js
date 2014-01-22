(function( $ ){
	$.fn.peeper = function(options) {

		var defaults = {
			peeps: 'li',
			peepsToShow: 3,
			peepListIdentifier: 'peeper',
			expandText: 'MORE',
			expandIdentifier: 'peeper-clicker',
			jqueryAnimSpeed:200,
			anim: '',
			animClose: 'closed'
		}
		var options =  $.extend(defaults, options);
		
		return this.each(function() {
			var peepList = $(this);
			var listLength =peepList.find(options.peeps).length;
			var contentToBeHidden = '<div class="' + options.peepListIdentifier + ((options.anim != '') ? options.anim : '') + '">';
			
			peepList.find(options.peeps).each(function(index, element){

				if(index >= options.peepsToShow){
					contentToBeHidden = contentToBeHidden + $(this).wrap('<p/>').parent().html();
					$(this).unwrap();
					$(this).remove();
				}
			});
			contentToBeHidden = contentToBeHidden + '</div>';
			peepList.append(contentToBeHidden);
			peepList.after('<a href="#" class="' + options.expandIdentifier + '">'+options.expandText+'</a>');
			togglePeeperVisibility(peepList.find('.'+options.peepListIdentifier));	
			$(peepList.next('.' + options.expandIdentifier)).click(function(e){
				togglePeeperVisibility(peepList.find('.'+options.peepListIdentifier));
				e.preventDefault();
			});

		});
		
		
		function togglePeeperVisibility(thePeeper){
			if (options.anim == ''){
				thePeeper.slideToggle(options.jqueryAnimSpeed);
			} else {
				if (thePeeper.hasClass(options.animClose)){
					thePeeper.removeClass(options.animClose);
				} else {
					thePeeper.addClass(options.animClose);
				}
			}
		};

		
		
	};
})( jQuery );