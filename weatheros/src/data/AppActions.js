var AppActionTypes = require('./AppActionTypes');
var AppDispatcher = require('./AppDispatcher');

var AppActions = {
	addDiv: function(item) {
		AppDispatcher.handleViewAction({
			actionType : AppActionTypes.ADD_DIV,
			data: item,
		});
	},

	removeDiv: function(index){
		AppDispatcher.handleViewAction({
			actionType: AppActionTypes.REMOVE_DIV,
			data: index
		})
	}
};

module.exports = AppActions;