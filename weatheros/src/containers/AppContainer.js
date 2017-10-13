/*
Example :: https://github.com/facebook/flux/tree/master/examples/flux-todomvc
Code for FluxContainer :: https://github.com/facebook/flux/blob/master/src/container/FluxContainer.js
*/
var React = require('react');
var WeatherList = require('../views/WeatherList');
var SearchBar = require('../views/SearchBar');
var AppStore = require('../data/AppStore');
var AppActions = require('../data/AppActions');


class Container extends React.Component{

	constructor(props){
		super(props);
		this.state = {list:AppStore.getList()}
	}

	componentWillMount = () => {
		AppStore.addChangeListener(this._change)
	}

	componentWillUnmount = () => {
		AppStore.removeChangeListener(this._change)
	}

	handleAddItem(newItem){
		AppActions.addDiv(newItem);
	}

	handleRemoveItem(index){
		AppActions.removeDiv(index);
	}
	_change = () => {
		this.setState({
			list: AppStore.getList()
		})
	}
	render(){
		return (
				<div>
					<div>
						<header className="App-header">
				          <h1 className="text-center">WeatherList</h1>
				        </header>
				        <SearchBar add={this.handleAddItem.bind(this)}/>
				        <WeatherList items={this.state.list} remove={this.handleRemoveItem.bind(this)}/>
				    </div>
				</div>
			)
	}
}

module.exports = Container;