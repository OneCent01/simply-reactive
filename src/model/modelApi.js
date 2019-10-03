import counterReducers from './reducers/counter'
// import additional reducer files here

import initState from './modelTemplate'

import createStore from './flux.js'

const reducers = {
	...counterReducers
	// and pass them into the combined reducers 
	// object here using the spread operator
}

export default createStore(initState, reducers)