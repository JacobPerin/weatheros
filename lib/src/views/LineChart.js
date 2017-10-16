import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './LineChart.css';

class Axis extends React.Component {
 
    componentDidUpdate() { 
    	this.renderAxis(); 
    }
    componentDidMount() { 
    	this.renderAxis(); 
    }

    renderAxis() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);
    }

    render = function () {
 
        var translate = "translate(0,"+(this.props.h)+")";
 
        return (
            <g className="axis" transform={this.props.axisType==='x'?translate:""} >
            </g>
        );
    }
}

Axis.propTypes = {
    h: PropTypes.number,
    axis: PropTypes.func,
    axisType: PropTypes.oneOf(['x','y'])
}
 




class LineChart extends React.Component {

	constructor(props){
		super(props);

		this.state = {
            width: 0,
            height: 180
		};

		/* Bind event listener function */
		this.updateWidth = this.updateWidth.bind(this);
	}

	updateWidth(e) {
        let elem = ReactDOM.findDOMNode(this);
        let width_update = elem.offsetWidth;

        this.setState({
            width: width_update
        });
	}

	componentDidMount() {
		/* Initail set of width once elements are created in DOM*/
		this.setState({
			width : this.divRef.clientWidth
		});

		/* Setting the width dynamically on window resize*/
		window.addEventListener("resize", this.updateWidth);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWidth);
	}

    render  = function(){

    	/* TODO :: Update w/ incomming data */ 
        var dataArr = this.props._map._root.entries[4];
        dataArr = dataArr[1];
        var data = dataArr;

        var margin = {top: 5, right: 50, bottom: 20, left: 50},
            w = this.state.width - (margin.left + margin.right),
            h = this.state.height - (margin.top + margin.bottom);


        var x = d3.scaleTime().range([0, w]);
		var y = d3.scaleLinear().range([h, 0]);

		var arr = [];

		var yAxis = d3.axisLeft(y).tickSize([4]);
		var xAxis = d3.axisBottom(x).tickFormat(function(d){
			if(arr.includes(d.getDay()));
			else{
				arr.push(d.getDay());
				switch(d.getDay()) {
					case 0 : return "Sun";
					case 1 : return "Mon";
					case 2 : return "Tues";
					case 3 : return "Wed";
					case 4 : return "Thur";
					case 5 : return "Fri";
					case 6 : return "Sat";
					default :
				}
			}
		});

		var parseTime = d3.timeParse("%d-%b-%y");

		// define the line
		var valueline = d3.line()
    	.x(function(d) { return x(d.day); })
    	.y(function(d) { return y(d.count); });


		// format the data
		data.forEach(function(d) {
            if(!(parseTime(d.day) === null))
		       d.day = parseTime(d.day);
		});

  		// Scale range of data
  		x.domain(d3.extent(data, function(d) { return d.day; }));
  		y.domain([0, d3.max(data, function(d) { return d.count; })]);


        var transform='translate(' + margin.left + ',' + margin.top + ')';

        var viewbox =  [0, 0, this.state.width, this.state.height].join(' ');

		return((
			<div ref = {element => this.divRef = element}>
                <svg id={this.props.id} viewBox = {viewbox} preserveAspectRatio = 'xMinYMin meet' width={this.state.width} height={this.state.height}>
                    <g transform={transform}>
                        <path className="line" d={valueline(data)}/>
                        <Axis h={h} axis={xAxis} axisType="x"/>
                        <Axis h={h} axis={yAxis} axisType="y"/>
                    </g>
                </svg>
	        </div>
	    ));
	}
}

LineChart.propType = {
    id:PropTypes.string
}


LineChart.defaultProps = {
    id: 'weatherPlot'
}

export default LineChart;