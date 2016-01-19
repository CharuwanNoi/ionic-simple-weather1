angular.module('weather').controller('WeatherCtrl', ['weatherApi', WeatherCtrl ]);

function WeatherCtrl(weatherApi) {
	var vm = this;

	 weatherApi.getWeather().then(function(data){
		console.log(data);
		var x2js = new X2JS();
		var json = x2js.xml_str2json(data);


		console.log(json.query.results.Result);
		vm.weather = json.query.results.Result; //weather is varible

		

	});

	 
	
}

 