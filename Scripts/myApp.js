"use strict";

var myApp = angular.module('myApp', []);



myApp.factory('CanvasService', function (DataService){


	var objectForCheck = [];

	function addObject(){
		this.highlight = false;
		this.event4 = 0;
		this.fieldX = 0;
		this.fieldY = 0;
		this.goalX = 0;
		this.goalY = 0;
		this.areaX = 0;
		this.areaY = 0;
	}


	function getMousePos(canvas, evt) {
       		var rect = canvas.getBoundingClientRect();
       		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
        		};
	}

	function checkObject(canvas ,x,y) {
		var canvasField = document.getElementById("ResultFieldCanvas");
		var canvasGoal = document.getElementById("ResultGoalCanvas");
		var canvasArea = document.getElementById("ResultAreaCanvas");

		var l = objectForCheck.length;

		for (var i = 0; i < l; i++) {
			var event4 = objectForCheck[i].event4;
			var fieldX = objectForCheck[i].fieldX;
			var fieldY = objectForCheck[i].fieldY;
			var goalX = objectForCheck[i].goalX;
			var goalY = objectForCheck[i].goalY;
			var areaX = objectForCheck[i].areaX;
			var areaY = objectForCheck[i].areaY;

				
			if(objectForCheck[i].highlight){
				var notfound = false;
				if(canvas.id == 'ResultFieldCanvas'){
					if(Math.pow(4,2) < (Math.pow((fieldX-x),2)+Math.pow((fieldY-y),2))){
						notfound = true;
					}
				} else	if(canvas.id == 'ResultGoalCanvas'){
					if(Math.pow(4,2) < (Math.pow((goalX-x),2)+Math.pow((goalY-y),2))){
						notfound = true;
					}
				} else	if(canvas.id == 'ResultAreaCanvas'){
					if(Math.pow(4,2) < (Math.pow((areaX-x),2)+Math.pow((areaY-y),2))){
						notfound = true;
					}
				}
				if(notfound){
					if(event4 == 1){
						color = 'green';
					}else if(event4 == 2){
						color = 'red';
					}else if(event4 == 3){
						color = 'yellow';
					}else if(event4 == 4){
						color = 'blue';
					}else{
						color = 'black';
					}
					if(fieldX != 0 || fieldY != 0){
						drawCircle(canvasField,fieldX,fieldY,color);
					}
					if(goalX != 0 || goalY != 0){
						drawCircle(canvasGoal,goalX,goalY,color);
					}
					if(areaX != 0 || areaY != 0){ 
						drawCircle(canvasArea,areaX,areaY,color);
					}
					objectForCheck[i].highlight = false;
				}
			} else {
				var found = false;
				if(canvas.id == 'ResultFieldCanvas'){
					if(Math.pow(4,2) >= (Math.pow((fieldX-x),2)+Math.pow((fieldY-y),2))){
						found = true;
					}
				} else if(canvas.id == 'ResultGoalCanvas'){	
					if(Math.pow(4,2) >= (Math.pow((goalX-x),2)+Math.pow((goalY-y),2))){
						found = true;
					}
				} else if(canvas.id == 'ResultAreaCanvas'){						
					if(Math.pow(4,2) >= (Math.pow((areaX-x),2)+Math.pow((areaY-y),2))){
						found = true;
					}
				}
				if(found){
					var color = '#DF20DF';
					if(fieldX != 0 || fieldY != 0){
						drawCircle(canvasField,fieldX,fieldY,color);
					}
					if(goalX != 0 || goalY != 0){
						drawCircle(canvasGoal,goalX,goalY,color);
					}
					if(areaX != 0 || areaY != 0){ 
						drawCircle(canvasArea,areaX,areaY,color);
					}
					objectForCheck[i].highlight = true;
				}

			}
		}
	}


	function drawCircle(canvas,x,y,color) {
            		if (canvas.getContext) {
                		var context = canvas.getContext("2d");
				context.save();
				context.beginPath();
				context.arc(x, y, 4, 0, 2 * Math.PI, false);
				context.fillStyle = color;
				context.fill();
				context.closePath();
				context.restore();
			}
		}

	return {
		DrawResultCanvas:function(){
			var canvas = document.getElementById("ResultFieldCanvas");
			var canvas2 = document.getElementById("ResultGoalCanvas");
			var canvas3 = document.getElementById("ResultAreaCanvas");

			var contextOk = false;
			var context2Ok = false;
			var context3Ok = false;

			//var eventObject = DataService.getEventObject();
            		if (canvas.getContext) {	
                		var context = canvas.getContext("2d");
				contextOk = true;
				context.save();
				context.clearRect(0, 0, canvas.width, canvas.height);
			}

            		if (canvas2.getContext) {	
                		var context2 = canvas2.getContext("2d");
				context2Ok = true;
				context2.save();
				context2.clearRect(0, 0, canvas2.width, canvas2.height);
			}

            		if (canvas3.getContext) {	
                		var context3 = canvas3.getContext("2d");
				context3Ok = true;
				context3.save();
				context3.clearRect(0, 0, canvas3.width, canvas3.height);
			}
		var l = objectForCheck.length;
		//var l = eventObject.length;
			for (var i = 0; i < l; i++) {
/*				var attackDirection = objectForCheck[i].attackDirection;
				var period = objectForCheck[i].period;
				var whatField = objectForCheck[i].whatField;
				var event1 = objectForCheck[i].event1;
				var event2 = objectForCheck[i].event2;
				var event3 = objectForCheck[i].event3;*/
				var event4 = objectForCheck[i].event4;
				//var goalDifference = eventObject[i].goalDifference;
				var fieldX = objectForCheck[i].fieldX;
				var fieldY = objectForCheck[i].fieldY;
				var goalX = objectForCheck[i].goalX;
				var goalY = objectForCheck[i].goalY;
				var areaX = objectForCheck[i].areaX;
				var areaY = objectForCheck[i].areaY;
				var color;

				if(event4 == 1){
					color = 'green';
				}else if(event4 == 2){
					color = 'red';
				}else if(event4 == 3){
					color = 'yellow';
				}else if(event4 == 4){
					color = 'blue';
				}else{
					color = 'black';
				}

				if(contextOk){
					if(fieldX != 0 || fieldY != 0){
						drawCircle(canvas,fieldX,fieldY,color);
					}
				}
				if(context2Ok){

					if(goalX != 0 || goalY != 0){
						drawCircle(canvas2,goalX,goalY,color);
					}
				}
				if(context3Ok){ 
					if(areaX != 0 || areaY != 0){ 
						drawCircle(canvas3,areaX,areaY,color);
					}
				}
			}
				
			if(contextOk){
				context.restore();
			}	
			if(context2Ok){
 				context2.restore();
			}
			if(context3Ok){ 	
				context3.restore();
			}
		},
		ClearCanvas:function(canvasID){
			var canvas = document.getElementById(canvasID);

            		if (canvas.getContext) {	
                		var context = canvas.getContext("2d");
				context.save();
				context.clearRect(0, 0, canvas.width, canvas.height);
				context.restore();
			}
		},
		LoadAndDrawImage:function(canvasId,imageSrc){
			var canvas = document.getElementById(canvasId);

            		if (canvas.getContext) {	
                		var context = canvas.getContext("2d");
				var imageObj = new Image();
				imageObj.src = imageSrc;
								
				context.save();
				imageObj.onload = function() {
					context.drawImage(imageObj, 0, 0);
				};
				context.restore();
			}
		},
		AddMouseListener:function(canvasId){
			var canvas = document.getElementById(canvasId);

            		if (canvas.getContext) {	
                		var context = canvas.getContext("2d");

				canvas.addEventListener('mousedown', function(evt ) {
					var mousePos = getMousePos(canvas, evt);
  					var color = 'black';
  					console.log(canvas.id ,mousePos.x,mousePos.y);
					DataService.setCanvasCoordinate(canvas.id ,mousePos.x,mousePos.y);
					drawCircle(canvas,mousePos.x,mousePos.y,color);
				}, false);
			}
		},
		AddMouseListener2:function(canvasId){
			var canvas = document.getElementById(canvasId);

            		if (canvas.getContext) {	
                		var context = canvas.getContext("2d");

				canvas.addEventListener('mousemove', function(evt ) {
					var mousePos = getMousePos(canvas, evt);
					checkObject(canvas ,mousePos.x,mousePos.y);
				}, false);
			}
		},
		UpdateCanvasEventOBject:function(periods, strengths){
			objectForCheck = [];
			var eventObject = [];
			eventObject = DataService.getEventObject();

			var l = eventObject.length;

			for (var i = 0; i < l; i++) {
				for (var x in periods) {
					if(eventObject[i].period == periods[x].periodName && periods[x].isChecked){
						for (var y in strengths) {
							if(eventObject[i].whatField == strengths[y].strengthName && strengths[y].isChecked){
								var event4 = eventObject[i].event4;
								var fieldX = eventObject[i].fieldX;
								var fieldY = eventObject[i].fieldY;
								var goalX = eventObject[i].goalX;
								var goalY = eventObject[i].goalY;
								var areaX = eventObject[i].areaX;
								var areaY = eventObject[i].areaY;

								var object = new addObject;

								object.event4 = event4;
								object.fieldX = fieldX;
								object.fieldY = fieldY;
								object.goalX = goalX;
								object.goalY = goalY;
								object.areaX = areaX;
								object.areaY = areaY;	
	
								objectForCheck.push(object);
							}
						}
					}
				}
			}

		}

	};
});

myApp.factory('CalculationService', function (DataService) {


	function Event(){
		this.attackDirection = 0;
		this.period = 0;
		this.whatField = 0;
		this.event1 = 0;
		this.event2 = 0;
		this.event3 = 0;
		this.event4 = 0;
		this.goalDifference = 0;
		this.fieldX = 0;
		this.fieldY = 0;
		this.goalX = 0;
		this.goalY = 0;
		this.areaX = 0;
		this.areaY = 0;

	}

	return {
		saveProcent: function () {
			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var event4 = eventObject[i].event4;
					if(event4 == 1){
						save++;
					}else if(event4 == 2){
						goal++;
					}

				}
			if (save == 0){
				return 0;
			}else{
				return (save/(goal+save))*100;
			}
		},
		gcSaveProcent: function () {

			var sectorY = 121;
			var sectorX1 = 94;
			var sectorX2 = 388;

			var sectorR = 50;

			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var attackDirection = eventObject[i].attackDirection;
					var event2 = eventObject[i].event2;
					var event4 = eventObject[i].event4;
					var fieldX = eventObject[i].fieldX;
					var fieldY = eventObject[i].fieldY;
					var found = false;
					if(event4 == 1){ 
						if(attackDirection){
							if(Math.pow(sectorR,2) >= (Math.pow((fieldX-sectorX2),2)+Math.pow((fieldY-sectorY),2))){
								save++;
								found = true;
							}

						} else {
							if(Math.pow(sectorR,2) >= (Math.pow((fieldX-sectorX1),2)+Math.pow((fieldY-sectorY),2))){
								save++;
								found = true;
							}

						}
				
						if(!found){
							if(event2 == 3){
								save++;	
							}	

						}
					}else if(event4 == 2){
						if(attackDirection){
							if(Math.pow(sectorR,2) >= (Math.pow((fieldX-sectorX2),2)+Math.pow((fieldY-sectorY),2))){
								goal++;
								found = true;
							}
						} else {
							if(Math.pow(sectorR,2) >= (Math.pow((fieldX-sectorX1),2)+Math.pow((fieldY-sectorY),2))){
								goal++;
								found = true;
							}
			
						}
						if(!found){
							if(event2 == 3){
								goal++;	
							}	

						}
					}

				}
			if (save == 0){
				return 0;
			}else{
				console.log("DRAW",save, goal);
				return (save/(goal+save))*100;
			}
		},
		outgcSaveProcent: function () {

			var sectorY = 121;
			var sectorX1 = 94;
			var sectorX2 = 388;

			var sectorR = 50;

			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var attackDirection = eventObject[i].attackDirection;
					var event2 = eventObject[i].event2;
					var event4 = eventObject[i].event4;
					var fieldX = eventObject[i].fieldX;
					var fieldY = eventObject[i].fieldY;
					var found = false;
					if(event4 == 1){ 
						if(attackDirection){
							if(Math.pow(sectorR,2) < (Math.pow((fieldX-sectorX2),2)+Math.pow((fieldY-sectorY),2))){
								if(event2 != 3){
									save++;	
								}
							}

						} else {
							if(Math.pow(sectorR,2) < (Math.pow((fieldX-sectorX1),2)+Math.pow((fieldY-sectorY),2))){
								if(event2 != 3){
									save++;	
								}
							}

						}
				
					}else if(event4 == 2){
						if(attackDirection){
							if(Math.pow(sectorR,2) < (Math.pow((fieldX-sectorX2),2)+Math.pow((fieldY-sectorY),2))){
								if(event2 != 3){
									goal++;	
								}
							}
						} else {
							if(Math.pow(sectorR,2) < (Math.pow((fieldX-sectorX1),2)+Math.pow((fieldY-sectorY),2))){
								if(event2 != 3){
									goal++;	
								}
							}
			
						}
					}

				}
			if (save == 0){
				return 0;
			}else{
				console.log("DRAW",save, goal);
				return (save/(goal+save))*100;
			}
		},
		evenSaveProcent: function () {
			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var whatField = eventObject[i].whatField;
					var event4 = eventObject[i].event4;
					if(whatField =='5vs5'){
						if(event4 == 1){
							save++;
						}else if(event4 == 2){
							goal++;
						}
					}

				}
			if (save == 0){
				return 0;
			}else{
				return (save/(goal+save))*100;
			}
		},
		shSaveProcent: function () {
			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var whatField = eventObject[i].whatField;
					var event4 = eventObject[i].event4;
					if(whatField =='PP'){
						if(event4 == 1){
							save++;
						}else if(event4 == 2){
							goal++;
						}
					}

				}
			if (save == 0){
				return 0;
			}else{
				return (save/(goal+save))*100;
			}
		},
		oneGoalDifferenceSaveProcent: function () {
			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var goalDifference = eventObject[i].goalDifference;
					var event4 = eventObject[i].event4;
					if(goalDifference <= 1 && goalDifference >= -1){
						if(event4 == 1){
							save++;
						}else if(event4 == 2){
							goal++;
						}
					}

				}
			if (save == 0){
				return 0;
			}else{
				return (save/(goal+save))*100;
			}
		},
		plusTwoGoalDifferenceSaveProcent: function () {
			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var goalDifference = eventObject[i].goalDifference;
					var event4 = eventObject[i].event4;
					if(goalDifference >= 2){
						if(event4 == 1){
							save++;
						}else if(event4 == 2){
							goal++;
						}
					}

				}
			if (save == 0){
				return 0;
			}else{
				return (save/(goal+save))*100;
			}
		},
		minusTwoGoalDifferenceSaveProcent: function () {
			var goal=0;
			var save=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var goalDifference = eventObject[i].goalDifference;
					var event4 = eventObject[i].event4;
					if(goalDifference <= -2){
						if(event4 == 1){
							save++;
						}else if(event4 == 2){
							goal++;
						}
					}

				}
			if (save == 0){
				return 0;
			}else{
				return (save/(goal+save))*100;
			}
		},
		defenseRate: function () {

			var sectorY = 121;
			var sectorX1 = 94;
			var sectorX2 = 388;

			var sectorR = 50;

			var gc=0;
			var all=0;
			var eventObject = DataService.getEventObject();

			var l = eventObject.length;
				for (var i = 0; i < l; i++) {
					var attackDirection = eventObject[i].attackDirection;
					var event2 = eventObject[i].event2;
					var event4 = eventObject[i].event4;
					var fieldX = eventObject[i].fieldX;
					var fieldY = eventObject[i].fieldY;
					var found = false;
					if(event4 == 1 || event4 ==2){
						if(attackDirection){
							if(Math.pow(sectorR,2) >= (Math.pow((fieldX-sectorX2),2)+Math.pow((fieldY-sectorY),2))){
								gc++;
								found = true;
							}

						} else {
							if(Math.pow(sectorR,2) >= (Math.pow((fieldX-sectorX1),2)+Math.pow((fieldY-sectorY),2))){
								gc++;
								found = true;
							}

						}
					
						if(!found){
							if(event2 == 3){
								gc++;	
							}	

						}
						all++;
					}
				}
			if (all == 0){
				return 0;
			}else{
				return (gc/(all))*100;
			}
		}

	};
});




myApp.factory('DataService', function () {
	var eventObject = [];

	var periodGroup = 'period1';
	var whatFieldGroup = '5vs5';

	var attackDirection = true;
	var goalDifference = 0;
	var event1Group = 0;
	var event2Group = 0;
	var event3Group = 0;
	var event4Group = 0;

	var period = 'period1';
	var whatField = '5vs5';
	var event1 = 0;
	var event2 = 0;
	var event3 = 0;
	var event4 = 0;
	var fieldX = 0;
	var fieldY = 0;
	var goalX = 0;
	var goalY = 0;
	var areaX = 0;
	var areaY = 0;


	function Event(){
		this.attackDirection = 0;
		this.period = 0;
		this.whatField = 0;
		this.event1 = 0;
		this.event2 = 0;
		this.event3 = 0;
		this.event4 = 0;
		this.goalDifference = 0;
		this.fieldX = 0;
		this.fieldY = 0;
		this.goalX = 0;
		this.goalY = 0;
		this.areaX = 0;
		this.areaY = 0;

	}

	return {
		addEvent: function () {
			var event = new Event;
			event.attackDirection = attackDirection;
			event.period = period;
			event.whatField = whatField;
			event.event1 = event1;
			event.event2 = event2;
			event.event3 = event3;
			event.event4 = event4;
			event.goalDifference = goalDifference;
			event.fieldX = fieldX;
			event.fieldY = fieldY;
			event.goalX = goalX;
			event.goalY = goalY;
			event.areaX = areaX;
			event.areaY = areaY;

			eventObject.push(event);
			console.log("ADD Event");
		},
		setEventValues: function(a, p, wf, e1,e2,e3,e4, gd, x, y, x2, y2, x3, y3){
				attackDirection = a;
				period = p;
				whatField = wf;
				event1 = e1;
				event2 = e2;
				event3 = e3;
				event4 = e4;
				goalDifference = gd;
				fieldX = x;
				fieldY = y;
				goalX = x2;
				goalY = y2;
				areaX = x3;
				areaY = y3;
		},
		setCanvasCoordinate: function(canvas,x,y){
			if(canvas == 'FieldCanvas'){
				console.log("FieldCanvas",x,y);
				fieldX = x;
				fieldY = y;
			}
			if(canvas == 'GoalCanvas'){
				console.log("GoalCanvas",x,y);
				goalX = x;
				goalY = y;
			}
			if(canvas == 'AreaCanvas'){
				console.log("AreaCanvas",x,y);
				areaX = x;
				areaY = y;
			}
		},
		resetCanvasCoordinate: function(){
				console.log("resetCanvas");
				fieldX = 0;
				fieldY = 0;
				goalX = 0;
				goalY = 0;
				areaX = 0;
				areaY = 0;
		},
		setPeriodGroup: function(value){
			periodGroup = value;
			period = value;
		},
		getPeriodGroup: function(){
			return periodGroup;
		},
		setEvent1Group: function(value){
			event1Group = value;
			event1 = value;
		},
		getEvent1Group: function(){
			return event1Group;
		},
		setEvent2Group: function(value){
			event2Group = value;
			event2 = value;
		},
		getEvent2Group: function(){
			return event2Group;
		},
		setEvent3Group: function(value){
			event3Group = value;
			event3 = value;
		},
		getEvent3Group: function(){
			return event3Group;
		},
		setEvent4Group: function(value){
			event4Group = value;
			event4 = value;
		},
		getEvent4Group: function(){
			return event4Group;
		},
		setWhatFieldGroup: function(value){
			whatFieldGroup = value;
			whatField = value;
		},
		getWhatFieldGroup: function(){
			return whatFieldGroup;
		},

		setAttackDirection:function(value){
			attackDirection = value;
		},
		setGoalDifference:function(value){
			goalDifference = value;
		},

		getEventObject: function () {
			return eventObject;
		}
	};
});


myApp.controller('TabsCtrl', function($scope,$http,DataService,CanvasService) {

	$scope.tab = 1;

	$scope.isSet = function(checkTab) {
		return $scope.tab === checkTab;
	};

	$scope.setTab = function(activeTab) {
		$scope.tab = activeTab;
	};



	$scope.getBlob = function(){
		var data = DataService.getEventObject();
		var json = JSON.stringify(data);

		var blob = new Blob([json], {type: 'application/json'});
		var url  = URL.createObjectURL(blob);


		var a = document.createElement('a');
		document.body.appendChild(a);
		a.download    = "pihvi.json";
		a.href        = url;
        	a.click();
		document.body.removeChild(a);
    	};



	$scope.fileChanged = function() {

  	// define reader
  	var reader = new FileReader();

  	// A handler for the load event (just defining it, not executing it right now)
  	reader.onload = function(e) {
	$scope.$apply(function() {
		var dataFile = reader.result;
    		var jsonObj = JSON.parse(dataFile);

	
		var l = jsonObj.length;
			for (var i = 0; i < l; i++) {
				var attackDirection = jsonObj[i].attackDirection;
				var period = jsonObj[i].period;
				var whatField = jsonObj[i].whatField;
				var event1 = jsonObj[i].event1;
				var event2 = jsonObj[i].event2;
				var event3 = jsonObj[i].event3;
				var event4 = jsonObj[i].event4;
				var goalDifference = jsonObj[i].goalDifference;
				var fieldX = jsonObj[i].fieldX;
				var fieldY = jsonObj[i].fieldY;
				var goalX = jsonObj[i].goalX;
				var goalY = jsonObj[i].goalY;
				var areaX = jsonObj[i].areaX;
				var areaY = jsonObj[i].areaY; 
			DataService.setEventValues(attackDirection, period, whatField, event1, event2, event3, event4, goalDifference, fieldX, fieldY, goalX, goalY, areaX, areaY);
			DataService.addEvent(); 					
			}
		DataService.setEvent1Group(0);
		DataService.setEvent2Group(0);
		DataService.setEvent3Group(0);
		DataService.setEvent4Group(0);
		DataService.resetCanvasCoordinate();
		CanvasService.UpdateCanvasEventOBject();
		CanvasService.DrawResultCanvas();
	});
	};

	// get <input> element and the selected file 
	var dataFileInput = document.getElementById('fileInput');    
	var dataFile = dataFileInput.files[0];

	// use reader to read the selected file
	// when read operation is successfully finished the load event is triggered
	// and handled by our reader.onload function
	reader.readAsText(dataFile);
};



});

myApp.controller('dumpCtrl', function($scope,DataService) {

	$scope.event = DataService.getEventObject();

});

myApp.controller('CanvasCtrl',function($scope,CanvasService) {

	//CanvasService.LoadAndDrawImage('FieldCanvas','kentta.gif');
	//CanvasService.LoadAndDrawImage('GoalCanvas','maali.png');
	//CanvasService.LoadAndDrawImage('AreaCanvas','alue.gif');
	CanvasService.AddMouseListener('FieldCanvas');
	CanvasService.AddMouseListener('GoalCanvas');
	CanvasService.AddMouseListener('AreaCanvas');

});


myApp.controller('MainSelectorCtrl', function($scope,DataService) {

	$scope.periodGroup = DataService.getPeriodGroup();
	$scope.whatFieldGroup = DataService.getWhatFieldGroup();
	$scope.goalDifference = 0;
	$scope.attackDirect = true;
	$scope.buttonText='->';

	$scope.changeAttackDirection = function(){
		$scope.attackDirect=!$scope.attackDirect;
		if($scope.attackDirect){
			$scope.buttonText='->';
		}else{
			$scope.buttonText='<-';
		}
		DataService.setAttackDirection($scope.attackDirect);
	};


	$scope.addGoal = function(value){
		if(value == 1){
			$scope.goalDifference++;
		} else {
			$scope.goalDifference--;
		}
		DataService.setGoalDifference($scope.goalDifference);
	};


	$scope.setPeriodGroup = function(value){
		DataService.setPeriodGroup(value);
	};

	$scope.setWhatfieldGroup = function(value){
		DataService.setWhatFieldGroup(value);
	};
});


myApp.controller('EventSelectorCtrl', function($scope,DataService,CanvasService) {

	$scope.event1Group = DataService.getEvent1Group();
	$scope.event2Group = DataService.getEvent2Group();
	$scope.event3Group = DataService.getEvent3Group();
	$scope.event4Group = DataService.getEvent4Group();

	$scope.setEvent1Group = function(value){
		DataService.setEvent1Group(value);
	};

	$scope.setEvent2Group = function(value){
		DataService.setEvent2Group(value);
	};

	$scope.setEvent3Group = function(value){
		DataService.setEvent3Group(value);
	};

	$scope.setEvent4Group = function(value){
		DataService.setEvent4Group(value);
	};

	$scope.takeAction = function(){
		DataService.addEvent();
		DataService.setEvent1Group(0);
		DataService.setEvent2Group(0);
		DataService.setEvent3Group(0);
		DataService.setEvent4Group(0);
		$scope.event1Group = DataService.getEvent1Group();
		$scope.event2Group = DataService.getEvent2Group();
		$scope.event3Group = DataService.getEvent3Group();
		$scope.event4Group = DataService.getEvent4Group();
		DataService.resetCanvasCoordinate();
		CanvasService.ClearCanvas('FieldCanvas');
		CanvasService.ClearCanvas('GoalCanvas');
		CanvasService.ClearCanvas('AreaCanvas');
	}
   
});


myApp.controller('ResultCtrl', function($scope,DataService,CanvasService) {

	$scope.periods = [
				{ periodName : "period1" , isChecked : false },
				{ periodName : "period2" , isChecked : false },
				{ periodName : "period3" , isChecked : false },
				{ periodName : "period4" , isChecked : false }
			]


	$scope.strengths = [
				{ strengthName : "5vs5" , isChecked : false },
				{ strengthName : "PP" , isChecked : false },
				{ strengthName : "SH" , isChecked : false },
				{ strengthName : "WG" , isChecked : false },
				{ strengthName : "EN" , isChecked : false },
				{ strengthName : "SO" , isChecked : false }
			]

	$scope.event = DataService.getEventObject();

	CanvasService.AddMouseListener2('ResultFieldCanvas');
	CanvasService.AddMouseListener2('ResultGoalCanvas');
	CanvasService.AddMouseListener2('ResultAreaCanvas');
	$scope.takeAction = function(){
		CanvasService.UpdateCanvasEventOBject($scope.periods, $scope.strengths);
		CanvasService.DrawResultCanvas();
	}
	$scope.selectAll = function(){
		for (var x in $scope.periods){
			$scope.periods[x].isChecked = true;
		}
		for (var x in $scope.strengths){
			$scope.strengths[x].isChecked = true;
		}
		CanvasService.UpdateCanvasEventOBject($scope.periods, $scope.strengths);
		CanvasService.DrawResultCanvas();
	}
	$scope.unselectAll = function(){
		for (var x in $scope.periods){
			$scope.periods[x].isChecked = false;
		}
		for (var x in $scope.strengths){
			$scope.strengths[x].isChecked = false;
		}
		CanvasService.UpdateCanvasEventOBject($scope.periods, $scope.strengths);
		CanvasService.DrawResultCanvas();
	}

});


myApp.controller('CalculationCtrl', function($scope,CalculationService) {
	$scope.savep = 0;
	$scope.gcsavep = 0;
	$scope.outgcsavep = 0;
	$scope.evensavep = 0;
	$scope.shsavep = 0;
	$scope.ogdsavep = 0;
	$scope.plustwogdsavep = 0;
	$scope.minustwogdsavep = 0;
	$scope.defenserate = 0;


	$scope.takeAction = function(){
		$scope.savep = CalculationService.saveProcent();
		$scope.gcsavep = CalculationService.gcSaveProcent();
		$scope.outgcsavep = CalculationService.outgcSaveProcent();
		$scope.evensavep = CalculationService.evenSaveProcent();
		$scope.shsavep = CalculationService.shSaveProcent();
		$scope.ogdsavep = CalculationService.oneGoalDifferenceSaveProcent();
		$scope.plustwogdsavep = CalculationService.plusTwoGoalDifferenceSaveProcent();
		$scope.minustwogdsavep = CalculationService.minusTwoGoalDifferenceSaveProcent();
		$scope.defenserate = CalculationService.defenseRate();
	}



});
