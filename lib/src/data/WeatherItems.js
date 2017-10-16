import Immutable from 'immutable';


const WeatherItems = Immutable.Record({
	id: '',

	city: '',
	tempHourly : [''],
	condition: '',
	graphList: [],
});

export default WeatherItems;