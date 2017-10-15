import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';
import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils';
import Counter from './Counter';
import WeatherItems from './WeatherItems';



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
        return state.set(id, new WeatherItems({
          id,
          location: action.data.city.name,
          tempHourly : ['1 : 000', '2 : 000', '3 : 000', '4 : 000', '5 : 000', '6 : 000', '7 : 000', '8 : 000'],
        }));
      case AppActionTypes.REMOVE_DIV:
        return state.delete(action.id);
      default:
        return state;
    }
  }
}

export default new AppStore();