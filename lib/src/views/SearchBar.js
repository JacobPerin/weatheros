import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			input : this.props.input,
			valid : this.props.valid
		}
	}

	render = (props) => {
		const onKeyDown = (e) => {
			if(e.keyCode === 13 ){
				sendAddItem(e);
			}

		};

		const handleClick = (e) => {
			sendAddItem(e);
		}

		const sendAddItem = (e) => {

			if(this.state.input === '' || !this.state.valid)
				return;
			else {
				e.target.value = '';

				//Set the search bar back to the placeholder
				this.props.onAdd(this.state.input);

				this.setState({
					input : '',
					valid: false
				});
			}
		};

		const updateState = (e) => {
			let send;

			if(allDigit(e.target.value) || allAlpha(e.target.value)){
				send = true;
			} 
			else {
				send = false;
			}

			this.setState({
				input : e.target.value,
				valid : send
			});
		};

		const allDigit = (value) => {
			var re = /^\d+$/;
			return re.test(value);
		}

		const allAlpha = (value) => {
			var re = /^[a-zA-Z]+$/;
			return re.test(value);
		}

		return (
			<div>
				<p className = {this.state.valid ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove'}/>
				<input 
					type="text" id="textInput" 
					value={this.props.draft} 
					placeholder="City Name/Zip Code" 
					onKeyDown = {onKeyDown} 
					onChange = {updateState}/>

				<input 
					type = "button"
					value = "Add"
					onClick = {handleClick}
				/>
			</div>
		);
	}
}

SearchBar.propType = {
    input: PropTypes.string,
    valid: PropTypes.bool
}


SearchBar.defaultProps = {
    input: '',
    valid: false
}


export default SearchBar;