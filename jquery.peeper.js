(function( $ ){
	$.fn.peeper = function(options) {

		var defaults = {
			peeps: 'li',
			peepsToShow: 3,
			peepListIdentifier: 'peeper',
			expandText: 'MORE',
			closeText: 'LESS',
			expandIdentifier: 'peeper-clicker',
			maxWidth: 0,
			anim: '',
			animClose: 'closed',
			jqueryAnimSpeed:200,
			
		}
		var options =  $.extend(defaults, options);
		
		return this.each(function() {
			var peepList = $(this);
			$(window).load(function(){responsiveCheck(peepList);});
			if (options.maxWidth > 0){
				$(window).resize(function () { 
					 responsiveCheck(peepList);
				});
			} 
		});
		
		function responsiveCheck(peepList){
			if (options.maxWidth > 0){
				if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= options.maxWidth && peepList.find('.'+options.peepListIdentifier).length == 0){
					addPeeper(peepList);
				} else if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > options.maxWidth &&  peepList.find('.'+options.peepListIdentifier).length > 0){
					removePeeper(peepList);
				}
			} else {
					addPeeper(peepList);
			}
		}
		
		
		function addPeeper (peepList){
			var listLength =peepList.find(options.peeps).length;
			var contentToBeHidden = '<div class="' + options.peepListIdentifier + ' ' + ((options.anim != '') ? options.anim: '') + '">';
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
				if($(this).html() == options.expandText){
					$(this).html(options.closeText);
				} else {
					$(this).html(options.expandText);
				}
				togglePeeperVisibility(peepList.find('.'+options.peepListIdentifier));
				e.preventDefault();
			});
		}
		
		
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
		
		function removePeeper (obj){
			obj.next('.' + options.expandIdentifier).remove();
			var listToKeep = obj.find('.'+options.peepListIdentifier).html();
			obj.find('.'+options.peepListIdentifier).remove();
			obj.append(listToKeep);
		}

					
	};
})( jQuery );