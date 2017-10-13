var React = require('react');

class SearchBar extends React.Component{
	handleButtonSubmit(e) {
		if(e.keyCode === 13 ){
			var city = this.refs.city.value;
			if(city === '') //Not taking empty input, also not throwing error message
				return;
			this.refs.city.value = ''; //Set the search bar back to the placeholder
			this.props.add(city);
		}

	}

	handleSubmit (e) {
		var city = this.refs.city.value;
		if(city === '') //Not taking empty input, also not throwing error message
			return;
		this.refs.city.value = ''; //Set the search bar back to the placeholder
		this.props.add(city);  //Start the creation of a new div, 
								  //Will need to replace with a try catch on the api call. //Get the entered value
			
	}

	sendAddItem(city) {

	}

	render(){
		return (
			<div>
				<input type="text" ref="city" className="form-control" placeholder="City (ex. Ames)" onKeyDown={this.handleButtonSubmit} />
				<input type="submit" onClick={this.handleSubmit.bind(this)} />
			</div>
			)
	}
}

module.exports = SearchBar;