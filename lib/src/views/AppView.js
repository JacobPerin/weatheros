import React from 'react';
import WeatherList from './WeatherList.js';
import SearchBar from './SearchBar.js'; 
import './styles/AppView.css';



function AppView(props){


	return (
			<div>
				<div className = "infive">
		          	<h1 className = "floatLeft"><span className = "blue">weather</span><span className = "red">os</span></h1>
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