import React from 'react';
import WeatherList from './WeatherList';
import SearchBar from './SearchBar'; 



function AppView(props){
	return (
			<div>
				<header >
		          <h1 >WeatherList</h1>
		        </header>
				<SearchBar {...props} />
		        <WeatherList {...props} />
		    </div>
		);
}

export default AppView;