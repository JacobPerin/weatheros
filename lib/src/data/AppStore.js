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
          city: action.city,
          tempHourly : action.timeList,
          condition : action.condition,
          graphList: action.graphList,
        }));

      case AppActionTypes.REMOVE_DIV:
        return state.delete(action.id);

      case AppActionTypes.UPDATE_DIV:
        const upID = action.id;
        return state.update( 
          (weatheritem) => {
            return weatheritem.set(upID, new WeatherItems({
              id: upID,
              city: action.ret.city,
              tempHourly: action.ret.timeList,
              condition: action.ret.condition,
              graphList: action.ret.graphList,
            }));
          });

      default:
        return state;
    }
  }
}

export default new AppStore();