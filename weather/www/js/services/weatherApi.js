angular.module('weather').factory('weatherApi',['$http', '$q', WeatherApi]); 
	// body...
function WeatherApi($http, $q){

	function getWeather() {
		var deferred = $q.defer(); 
			$http.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text=%2213.7563,100.5018%22%20and%20gflags=%22R%22")
			.success(function(data) {
				deferred.resolve(data);


			})
			.error(function() {
				console.log("Error");
				deferred.reject();
			});

			return deferred.promise;
		}

		return {
			//public: private
			getWeather: getWeather
		};
}