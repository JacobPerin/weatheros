/*
Example :: https://github.com/facebook/flux/tree/master/examples/flux-todomvc
Code for FluxContainer :: https://github.com/facebook/flux/blob/master/src/container/FluxContainer.js
*/

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import AppStore from '../data/AppStore';

function getStores() {
  return [
    AppStore,
  ];
}

function getState() {
  return {
    todos: AppStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);