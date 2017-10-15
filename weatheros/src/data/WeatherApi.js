import { Promsie } from 'es6-promise';
import fetch from 'isomorphic-fetch';

var WeatherApi = {


	getWeatherObject: function(city) {
		var ApiKey = '23f3e0e1377031e7c41fde6f6da17f9b';
		return fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + ApiKey)
		.then(response =>{
			var result = {
					data: [],
					fail: false,
			};
			if(response.ok){
					
					return response.json().then(item =>{
						result.data = item;
						return result;
					});
			}
			else{
				result.fail = true;
				return result;
			}
		}).catch(err => console.log(err));
	}
}

export default WeatherApi