import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';

const AppActions = {
	addDiv(temp) {
		AppDispatcher.dispatch({
			actionType : AppActionTypes.ADD_DIV,
			temp,
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