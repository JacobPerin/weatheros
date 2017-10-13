/* Create a new dispatcher to be used throughout application */
var Dispatcher = require("flux").Dispatcher;
var assign = Object.assign;


var AppDispatcher = assign(new Dispatcher(), {
	handleViewAction: function(action){
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;