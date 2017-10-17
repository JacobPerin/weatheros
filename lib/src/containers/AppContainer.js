/*
Example :: https://github.com/facebook/flux/tree/master/examples/flux-todomvc
Code for FluxContainer :: https://github.com/facebook/flux/blob/master/src/container/FluxContainer.js
*/
import {Container} from 'flux/utils';
import AppStore from '../data/AppStore';
import AppActions from '../data/AppActions';
import AppView from '../views/AppView';


function getStores() {
	return [
		AppStore,
	];
}

function getState(){
	return {
		weatherItems: AppStore.getState(),

		onAdd: AppActions.addDiv,
		onRemove: AppActions.removeDiv,
		onUpdate: AppActions.updateDiv,
	};
}

export default Container.createFunctional(AppView, getStores, getState);