import React from 'react';
import modelApi from '../../model/modelApi.js'

// server utilities can be made available in the components where they are used
import serverApi from '../../serverApi/serverApi.js'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const model = this.props
		return (
			<div style={{textAlign: 'center'}}>
				<h1>Hello World</h1>
				<div>Count: {model.counter}</div>
				<button onClick={e=>modelApi.dispatch({type: 'INCREMENT'})}>Inc</button>
				<button onClick={e=>modelApi.dispatch({type: 'DECREMENT'})}>Dec</button>
			</div>
		)
	}

}