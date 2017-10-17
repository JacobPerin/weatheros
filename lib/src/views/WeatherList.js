import React from 'react';
import './styles/WeatherList.css';
import LineChart from './LineChart.js';

 function WeatherList(props){


		const onClick = (e) => {
			props.onRemove(e.target.id)
		};

		const displayA = (city, condition) => ((
			<span className = "sharedSpan">
				<div className = "shareA city">
					<span className = "t"></span>
					<div className = "shareB">{city}</div>
				</div>
				<div className = "shareA">
					<span className = "t"></span>								
					<div className = "shareB">{condition}</div>
				</div>
			</span>	
		));

		const displayB = (values) => ((
			<span className = "hourlyList">
				<nav>
					<ul>
						{values.map(function(listValue, index){
							return <li key = {index}>{listValue}</li>
						})}
					</ul>
				</nav>
			</span>
		));




		/* Display C --> Bar graph :: to large to place here must be in own file */


		const displayD = (id) => ((
			<span
					className = "exit"
					id={id}
		    		onClick={onClick}>
		    </span>
		));

		const WeatherItems = [...props.weatherItems.values()].reverse().map(WeatherItem =>
				(
					<li className = "a" key={WeatherItem.id} >
						<div className = "fill">
							{displayA(WeatherItem.city, WeatherItem.condition)}
							{displayB(WeatherItem.tempHourly)}
							<span className = "barGraph">
								<LineChart {...WeatherItem}/>
							</span>
							{displayD(WeatherItem.id)}
						</div>
				    </li>
		));


		return (
			<section id="list">
	    	<ul id="weatherList">
	    	    {WeatherItems}
	    	</ul>
	    	</section>
		);
}
export default WeatherList;