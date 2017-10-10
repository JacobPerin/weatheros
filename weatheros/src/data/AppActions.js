import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
	addDiv(text) {
		AppDispatcher.dispatch({
			Type : AppActionTypes.ADD_DIV,
			text,
		});
	},
};

export default Actions;