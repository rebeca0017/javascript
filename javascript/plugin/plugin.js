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


(function ($) {

	$.myPlugin = function (options) {
		settings = $.extend({
			color='',
			data='',
		},options);

		function drawTable(){
			var head = ["APELLIDOS", "NOMBRES", "EDAD"];

			var data = [["susana", "martinez", 18], ["susa", "jose", 20], ["susa", "mora", 20], ["susa", "morales", 20]];
	
	
	
	
			var body = document.getElementsByTagName("body")[0];
			var table = document.createElement("table");
			var div=document.createElement("div");
			div.className='table-responsive'
			table.className='table table-hover';
			var tblBody = document.createElement("tbody");
			var tblHead = document.createElement("thead");
	
	
	
			var row = document.createElement("th")
			var cell = document.createElement("tr");
			var textcell = document.createTextNode(head[1]);
			cell.appendChild(textcell);
			row.appendChild(cell);
			tblHead.appendChild(row);
	
	
			var row = document.createElement("th")
			var cell = document.createElement("tr");
			var textcell = document.createTextNode(head[0]);
			cell.appendChild(textcell);
			row.appendChild(cell);
			tblHead.appendChild(row);
	
			var row = document.createElement("th")
			var cell = document.createElement("tr");
			var textcell = document.createTextNode(head[2]);
			cell.appendChild(textcell);
			row.appendChild(cell);
			tblHead.appendChild(row);
	
			data.forEach(data => {
					var row = document.createElement("tr")
					var cell = document.createElement("td");
					var textcell = document.createTextNode(data[0]);
					cell.appendChild(textcell);
					row.appendChild(cell);
					tblBody.appendChild(row);
					textcell = document.createTextNode(data[1]);
					cell = document.createElement("td");
					cell.appendChild(textcell);
					row.appendChild(cell);
					textcell = document.createTextNode(data[2]);
					cell = document.createElement("td");
					cell.appendChild(textcell);
					row.appendChild(cell);
			});
			body.appendChild(div);
			body.appendChild(table);
			div.appendChild(table)
			table.appendChild(tblBody);
			table.appendChild(tblHead);
			table.setAttribute("border", "2");
		}
		return this;
	}

})(jQuery);

/* v$("#micapa").click(function(){
 $(this).css("width", function(index, value){
		//alert (value);
		var aumento = prompt("cuanto quieres aumentar?", "25");
		return (parseInt(value) + parseInt(aumento)) + "px";
 });
})*/

/*	(function ($) {
	$.enviar=function(options){
		var herramientas= $.extend ({
			color='',
		},options)

		$(this).each(function () {
			$(this).css("Background-color", herramientas.color)
		});
		return this;
	}
})*/


jQuery.comprobarAlert = function( mensaje ){
	alert(mensaje);
}


jQuery.fn.alerter = function(){
	this.each( function(){
			alert(this);
	});
}