import React from 'react';
import './WeatherList.css';

function WeatherList(props) {

	const onClick = (e) => {
		props.onRemove(e.target.id)
	}

	const WeatherItems = [...props.weatherItems.values()].reverse().map(WeatherItem =>
			(
				<li className = "a" key={WeatherItem.id} >
					<div className = "fill">
						<span className = "sharedSpan">
							<div className = "shareA city">
								<span className = "t"></span>
								<div className = "shareB">{WeatherItem.temp}</div>
							</div>
							<div className = "shareA">
								<span className = "t"></span>								
								<div className = "shareB">80</div>
							</div>
						</span>
						<span className = "hourlyList">
							<nav>
								<ul>
									{WeatherItem.tempHourly.map(function(listValue, index){
										return <li key = {index}>{listValue}</li>
									})}
								</ul>
							</nav>
						</span>
						<span className = "barGraph"></span>
						<span
								className = "exit"
								id={WeatherItem.id}
			            		onClick={onClick}></span>
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