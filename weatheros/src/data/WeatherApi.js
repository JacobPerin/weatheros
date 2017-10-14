import { Promsie } from 'es6-promise';
import fetch from 'isomorphic-fetch';

var WeatherApi = {
	getWeatherObject: function(city) {
		fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify()
		}).then(response =>{
			if(response.ok){
				var result = [];
				response.json().then(data => {
					result.data = data;
				})
			}
		})
	}
}

export default WeatherApi