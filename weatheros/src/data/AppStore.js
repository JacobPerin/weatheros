import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';
import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils';
import Counter from './Counter';
import WeatherItems from './WeatherItems';
import weatherApi from './WeatherApi';



class AppStore extends ReduceStore {
  constructor(){
    super(AppDispatcher);
  }

  getInitialState(){
    return Immutable.OrderedMap();
  }

  reduce(state, action){
    switch(action.actionType){
      case AppActionTypes.ADD_DIV:
        const id = Counter.increment();
        var data = weatherApi.getWeatherObject(action.location);
        return state.set(id, new WeatherItems({
          id,
          location: action.location,
        }));
      case AppActionTypes.REMOVE_DIV:
        return state.delete(action.id);
      default:
        return state;
    }
  }
}

export default new AppStore();