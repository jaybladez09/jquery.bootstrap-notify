/**
* Bootstrap Notify Plugin 
*
* @author Jeremiah O. Ogbomo
* @version 0.0.1
*
* $('div').notify('I just made a notice', {forever: true, type: 'e'})
*/
;(function($){
  /**
  * @var message [string]             The notice to display
  * @var options [object] (optional)  Options to pass to notice
  */
	$.fn.notify = function(message, options){
		var defaults = {
		  // Duration to stay on screen before auto-remove from screen in miliseconds
			duration : 5000,
			// Ignore auto-remove and stay on screen forever
			forever: false,
			// Allow notice to ignore DOM position and float on the middle of the screen
			float: true,
			// Position of notice against the DOM element - 'before' and 'after'
			position: 'before',
			// Type of notice - 's', 'e', 'w' and 'i'
			type : 's'
		}, 
		types = {
			'e' : ['danger', 'remove'],
			'w' : ['warning', 'warning-sign'],
			's' : ['success', 'ok'],
			'i' : ['info', 'info-sign']
		},
		clear = function(){
			$('#my-very-own-notify-plugin').remove();
		};

		return this.each(function(){
			$this = $(this);
			count = count || 1;
			options = $.extend(defaults, options);
	
			if(!options.forever && options.duration){
				setTimeout(clear, options.duration);
			}
			var M = '<div data-dismiss="alert" id="my-very-own-notify-plugin" class="alert alert-'+types[options.type][0]+'">'
				+'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'
				+'<i class="glyphicon glyphicon-'+types[options.type][1]+' fa-lg"></i>&nbsp;&nbsp;&nbsp;'+message+'&nbsp;&nbsp;&nbsp;</div>';
	
			if(options.float === true){
				M = $(M).css({
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%)',
					zIndex: 9999+count
				})
			}
			++count;
			return options.position == 'before' ? $this.prepend(M) : $this.append(M);
		});
	}
})(jQuery);
