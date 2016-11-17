var app = angular.module('app', ['ngMaterial']);

Object.defineProperty(Array.prototype, 'valueForKeyPath', {
    enumerable: false,
    value: function (key) {
        return this.map(function (obj) {
            return obj[key];
        });
    }
});

app.controller('Q3Controller', function($scope) {
	var scope = $scope;

	var dataDemand = data_demand;
	var dataConsumption = data_consumption;

	console.log('dataDemand: ', dataDemand);
	console.log('dataConsumption: ', dataConsumption);

	// Reference link: http://c3js.org/gettingstarted.html
	var chart = c3.generate(
	{
		bindTo: '#chart',
		padding: {
			left: 40
		},
		data: {
	    xs: {
	      'demand': 'x1',
	      'consumption': 'x2',
	    },
			columns: [
	    	['x1'].concat(dataDemand.values.valueForKeyPath('ts')),
	    	['x2'].concat(dataConsumption.values.valueForKeyPath('ts')),
	    	['demand'].concat(dataDemand.values.valueForKeyPath('value')),
	    	['consumption'].concat(dataConsumption.values.valueForKeyPath('value'))
			],
			types: {
				consumption: 'step'
			},
			axes: {
				data1: 'y',
				data2: 'y2'
			}
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%H:%M %d%b'
				}
			},
			y: {
				min: 0,
				padding: 0
			}
		},
		size: {
			width: 1280,
			height: 800
		},
		point: {
			show: false
		}
	}
	);
});

// 	var chart = c3.generate(
// 	{
// 		bindTo: '#chart',
// 		padding: {
// 			left: 40
// 		},
// 		data: {
// 			x: 'x',
// 			columns: [
// 				['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
// 				['data1', 30, 200, 100, 400, 150, 250],
// 				['data2', 130, 340, 200, 500, 250, 350]
// 			],
// 			types: {
// 				data2: 'step'
// 			}
// 		},
// 		axis: {
// 			x: {
// 				type: 'timeseries',
// 				tick: {
// 					format: '%Y-%m-%d'
// 				}
// 			},
// 			y: {
// 				min: 0,
// 				padding: 0
// 			}
// 		},
// 		size: {
// 			width: 1280,
// 			height: 800
// 		},
// 		point: {
// 			show: false
// 		}
// 	}
// 	);
// });