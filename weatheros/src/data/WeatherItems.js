import Immutable from 'immutable';


const WeatherItems = Immutable.Record({
	id: '',
	otherDays: {
		
	},
	currentDay: {
		hoursArr: []
	},
	location: '',
});

export default WeatherItems;