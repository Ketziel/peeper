(function( $ ){
	$.fn.peeper = function(options) {

		var defaults = {
			peeps: 'li',
			peepsToShow: 3,
			expandText: 'MORE',
			viewMoreIdentifier: 'peeper-clicker',
			anim: '',
			animClose: 'closed'
		}
		var options =  $.extend(defaults, options);
		
		return this.each(function() {
			var peep = $(this);
			var listLength =peep.find(options.peeps).length;
			var contentToBeHidden = '<div class="peeper ' + ((options.anim != '') ? options.anim : '') + '">';
			
			peep.find(options.peeps).each(function(index, element){

				if(index >= options.peepsToShow){
					contentToBeHidden = contentToBeHidden + $(this).wrap('<p/>').parent().html();
					$(this).unwrap();
					$(this).remove();
				}
			});
			contentToBeHidden = contentToBeHidden + '</div>';
			peep.append(contentToBeHidden);
			peep.after('<a href="#" class="' + options.viewMoreIdentifier + '">'+options.expandText+'</a>');
			togglePeeperVisibility(peep.find('.peeper'));	
			$(peep.next('.' + options.viewMoreIdentifier)).click(function(e){
				//togglePeeperVisibility($(this).prev('ul').find('.peeper'));
				togglePeeperVisibility(peep.find('.peeper'));
				e.preventDefault();
			});

		});
		
		
		function togglePeeperVisibility(thePeeper){
			if (options.anim == ''){
				thePeeper.slideToggle();
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