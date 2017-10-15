import React from 'react';

var SearchBar = (props) => {
	const onKeyDown = (e) => {
		if(e.keyCode === 13 ){
			sendAddItem(e.target.value, e);
		}

	};

	const sendAddItem = (city, e) => {
		if(city === '') //Not taking empty input, also not throwing error message
			return;
		e.target.value = '';
		 //Set the search bar back to the placeholder
		props.onAdd(city);  
	};

		return (
			<div>
				<input 
					type="text" id="textInput" 
					value={props.draft} 
					placeholder="City (ex. Ames)" 
					onKeyDown={onKeyDown} />
			</div>
		);
}

export default SearchBar;