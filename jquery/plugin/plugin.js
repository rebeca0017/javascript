/*(function ($) {
	$.fn.extend({
		setBackground:function(color){
			$(this).each(function () {
				$(this).css("Background-color", color)
			});
			return this;
		}
	});
})(jQuery);*/


(function($) {
 
	// Declaración del plugin.
	$.fn.myPlugin = function(options) {
   
	   // Obtenemos los parámetros.
	   options = $.extend({}, $.fn.myPlugin.defaultOptions, options);
	
   
	  this.each(function() {
		var element = $(this);
		element.addClass(options.element_class);
		element.css("color","blue");
	  });
	  return this;
	}
   
  })(jQuery);

  /*v$("#micapa").click(function(){
	$(this).css("width", function(index, value){
	   //alert (value);
	   var aumento = prompt("cuanto quieres aumentar?", "25");
	   return (parseInt(value) + parseInt(aumento)) + "px";
	});
 })*/

