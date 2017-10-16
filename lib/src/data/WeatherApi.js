import { Promsie } from 'es6-promise';
import fetch from 'isomorphic-fetch';
var URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var APPID = ',us&units=imperial&appid=23f3e0e1377031e7c41fde6f6da17f9b';

export default {
	getWeatherObject: function(city){
	return fetch(URL + city + APPID)
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