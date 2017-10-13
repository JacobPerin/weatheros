var React = require('react');


class WeatherList extends React.Component{
	render() {
		var styles = {
			//Here Jake, do your bullshit.
			listStyle: {

			}
		};
		var WeatherItems = this.props.items.map(function(item, index){
			return (
				<li key={index} className="list-group-item" style={styles.listStyle}>
					<span
			            className="glyphicon glyphicon-remove"
			            onClick={this.props.remove.bind(null, index)}>
			        </span>
			        <span >
			            {item}
			        </span>
			    </li>
		    )
		}.bind(this));
		return (
	    	<ul >
	    	    {WeatherItems}
	    	</ul>
		)
	}
}

module.exports = WeatherList;
