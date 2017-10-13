var AppActionTypes = require('./AppActionTypes');
var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = Object.assign;

var CHANGE_EVENT = 'change';


var weatherStore = {
  weatherItems: []
};

var addItem = function(item){
  weatherStore.weatherItems.push(item);
};

var removeItem = function(index){
  weatherStore.weatherItems.splice(index, 1);
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
      case AppActionTypes.ADD_DIV:
        addItem(action.data);
        AppStore.emit(CHANGE_EVENT);
        break;
      case AppActionTypes.REMOVE_DIV:
        removeItem(action.data);
        AppStore.emit(CHANGE_EVENT);
        break;
      default:
        return true;
    }
  }),

  getList: function() {
    return weatherStore.weatherItems;
  }
});

module.exports =  AppStore;