var app = angular.module('app', ['ngMaterial']);

app.controller('Q2Controller', function($scope) {
	var scope = $scope;

	scope.sensorList = [
		{
			name : "Sensor 1",
			battery_level : 100
		},
		{
			name : "Sensor 2",
			battery_level : 0
		},
		{
			name : "Sensor 3",
			battery_level : 50
		},
		{
			name : "Sensor 4",
			battery_level : 49
		},
		{
			name : "Sensor 5",
			battery_level : 30
		},
		{
			name : "Sensor 6",
			battery_level : 20
		},
		{
			name : "Sensor 7",
			battery_level : null
		},
		{
			name : "Sensor 8",
			battery_level : 75
		},
		{
			name : "Sensor 9",
			battery_level : 9.99
		}
	]
	
	


	
});