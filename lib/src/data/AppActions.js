import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';
import WeatherApi from './WeatherApi';
import * as d3 from 'd3';
import AppStore from './AppStore';

const getImmutableObj = function(data){
			if(data.fail){
				return false;
			}
			var result = {
				actionType: AppActionTypes.ADD_DIV,
				city: data.data.city.name,
				timeList: [],
				condition: '',
				graphList: [],

			};

			//Get length of weather data returned..  For some reason it isnt always 40
			var count = data.data.cnt;

			var list = data.data.list;
			var i =0;
			
			var dayFormat = d3.timeFormat("%H");
			var initTime = dayFormat(new Date(list[0].dt * 1000)) - 3;
			if(initTime < 0)
				initTime = 24 + initTime;
			var temp = 0;
			var hour = 0;
			//Start to fill the return object with weather data
			for(i = 0; i < count; i++){

				var mill = list[i].dt * 1000;
				dayFormat = d3.timeFormat("%H");
				hour = dayFormat(new Date(mill)) - 0;
				temp += list[i].main.temp;

				//Get the average for our 5 day forecast (for the graph)
				if(initTime === hour){
					dayFormat = d3.timeFormat("%d-%b-%y");
					var obj = {	day : '', count : '', };
					obj.day = dayFormat(new Date(mill));
					obj.count = temp/8;
					result.graphList.push(obj);
					temp = 0;
				}
				//Get the first 8 3 hour values.
				if(i<8){
					dayFormat = d3.timeFormat("%I %p:");
					var date = dayFormat(new Date(mill)) + '';
					var temper = (list[i].main.temp).toFixed(0);
					date = (date + " " + temper + " F");

					result.timeList.push(date);
				}


			}
			//Have to get the final day
			if(result.graphList.length < 5){
				dayFormat = d3.timeFormat("%d-%b-%y");
				var ob = {	day : '', count : '', };
				ob.day = dayFormat(new Date(list[i-1].dt * 1000));
				if(ob.day === result.graphList[3].day){
					ob.day = dayFormat(new Date(list[i-1].dt * 1000 + (86400000)));
				}
				ob.count = temp/((i%8)+1);
				result.graphList.push(ob);
			}
			
			result.condition = list[0].weather[0].main;
			return result;
}

	setInterval(function(){
		var state = AppStore.getState();
					state._list.reverse().map(WeatherItem => {
						return AppActions.updateDiv(WeatherItem);
					});

	}, 300000, AppStore);

const AppActions = {
	addDiv(location) {
		WeatherApi.getWeatherObject(location).then(data => {
			//returning object
			var result = getImmutableObj(data);
			if(!result)
				return;
			AppDispatcher.dispatch(result);
		});

	},

	removeDiv(id){
		AppDispatcher.dispatch({
			actionType: AppActionTypes.REMOVE_DIV,
			id,
		});
	},

	updateDiv(item){
		var ret;
		if(!item)
			return;
		var id = item[0];
		WeatherApi.getWeatherObject(item[1].city).then(data => {
			ret = getImmutableObj(data);
			if(!ret)
				return;
			AppDispatcher.dispatch({
				actionType: AppActionTypes.UPDATE_DIV,
				ret: ret,
				id: id,
			});
		});
		
		

		
	},
};

export default AppActions;