import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

class App extends React.Component{
	render(){
		return (
				<div className="container">
					<div>
						<AppContainer />
					</div>
				</div>
			)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();