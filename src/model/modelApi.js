let model = {
	count: 0
}
const subscribers = []

const reducers = {
	INCREMENT: (state, action) => ({...state, count: state.count+1}),
	DECREMENT: (state, action) => ({...state, count: state.count-1})
}

const reduce = (state, action) => {
	if(reducers[action.type]) {
		return reducers[action.type](state, action)
	} else {
		console.log('No reducer found associated with key: ', action)
	}
}

const modelApi = {
	getState(){ 
		return model 
	},
	dispatch(action) {
		model = reduce(model, action)
		subscribers.forEach(sub => sub(model))
	},
	subscribe(fn) {
		subscribers.push(fn)
	}
}

export default modelApi