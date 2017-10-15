import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';
import WeatherApi from './WeatherApi';

const AppActions = {
	addDiv(location) {
		WeatherApi.getWeatherObject(location).then(data => {
			var result = {
				data: [],
			};
			if(data.fail){
				return;
			}
			result.data = data.data;
			AppDispatcher.dispatch({
				actionType : AppActionTypes.ADD_DIV,
				data: result.data,
			});
		});

	},

	removeDiv(id){
		AppDispatcher.dispatch({
			actionType: AppActionTypes.REMOVE_DIV,
			id,
		});
	},
};

export default AppActions;