import React from 'react';

function WeatherList(props) {

	const onClick = (e) => {
		props.onRemove(e.target.id)
	}
	const WeatherItems = [...props.weatherItems.values()].reverse().map(WeatherItem =>
			(
				<li key={WeatherItem.id} >
					<span
						id={WeatherItem.id}
						className="glyphicon glyphicon-remove"
			            onClick={onClick}>
			        </span>
			        <span >
			            {WeatherItem.temp}
			        </span>
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
