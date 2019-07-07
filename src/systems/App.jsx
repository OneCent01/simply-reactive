import React from 'react';
import modelApi from '../model/modelApi.js'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const model = this.props
		return (
			<div style={{textAlign: 'center'}}>
				<h1>Hello World</h1>
				<div>Count: {model.count}</div>
				<button onClick={e=>modelApi.dispatch({type: 'INCREMENT'})}>Inc</button>
				<button onClick={e=>modelApi.dispatch({type: 'DECREMENT'})}>Dec</button>
			</div>
		)
	}

}