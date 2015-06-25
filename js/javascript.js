$(document).ready(function(){

var axisX = 0;
var axisY = 0;

	$("#start").click(function(){

		$(this).toggle(100);

		axisX = prompt("Number of squares on the X axis.");
		axisY = prompt("Number of squares on the Y axis.");


		
			$("body").append("<div id='mainDiv'></div>");
			$("#mainDiv").css({
				"background-color": "black", 
				"width": (axisX * 52) + "px", 
				"height": (axisY * 52) + "px"
			});



			for(i = 0; i <= (axisX * axisY); i++)
			{
				$("#mainDiv").append("<div class='gridSquares'></div>");

			}



			$(".gridSquares").hover( function(){
				
				$(this).css("background-color", "black");
				$(this).toggle();
				
			});



			//Reset button.


	});

	
	

});