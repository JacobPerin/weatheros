import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';

const AppActions = {
	addDiv(location) {
		AppDispatcher.dispatch({
			actionType : AppActionTypes.ADD_DIV,
			location: location,
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