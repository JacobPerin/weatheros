import React from 'react';
import WeatherList from './WeatherList';
import SearchBar from './SearchBar'; 
import './AppView.css';



function AppView(props){
	return (
			<div>
				<div className = "intwo">
		          	<h1 className = "floatLeft"><span className = "blue">Weather</span><span class = "red">os</span></h1>
		        	<div className = "floatRight">
		        		<SearchBar {...props} />
		        	</div>

		        </div>
		        <div className = "floatClear fill">
		        	<WeatherList {...props} />
		        </div>
		    </div>
		);
}

export default AppView;