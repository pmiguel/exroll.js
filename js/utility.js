divCounter = 0;

function generateColor() {
	var output = "#";
	for(var i = 0; i < 3; i++) {
		var hex = Math.floor(Math.random() * 255).toString(16);
		if(hex.length == 1)
			hex = "0"+ hex;
		output += hex;
	}
	return output;
}

function generateDiv() {
	var color = generateColor();
	var div = $("<div></div>").height("48px").css("background-color", color).html(++divCounter);
	console.log(divCounter, color);
	return div;
}

$(document).ready(function() {
	//ctrl = new ContainerController($("#divcontainer")[0]);

	$("#append").click(function(event) {
		event.preventDefault();
		$("#divcontainer").dynamicAppend(generateDiv);
		//ctrl.dynamicAppend(generateDiv()[0]);
	});
	$("#prepend").click(function(event) {
		event.preventDefault();
		$("#divcontainer").staticPrepend(generateDiv);
		//ctrl.staticPrepend(generateDiv()[0]);
	});
	$("#clear").click(function(event) {
		event.preventDefault();
		$("#divcontainer").empty();
		divCounter = 0;
	});
	$("#grow").click(function(event) {
		$("#divcontainer").saveScrollState();
		if($("#divcontainer").children()[2]) {
			var h = $($("#divcontainer").children()[2]).height()
			$($("#divcontainer").children()[2]).height(h += 20);
			$("#divcontainer").readjust();
		}
	});
	$("#shrink").click(function(event) {
		$("#divcontainer").saveScrollState();
		if($("#divcontainer").children()[2]) {
			var h = $($("#divcontainer").children()[2]).height()
			if(h > 48) {
				$($("#divcontainer").children()[2]).height(h -= 20);
				$("#divcontainer").readjust();
			}			
		}
	});

})