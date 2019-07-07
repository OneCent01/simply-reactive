let model = {
	count: 0
}
const subscribers = []

const reducers = {
	INCREMENT: (state, action) => ({...state, count: state.count+1}),
	DECREMENT: (state, action) => ({...state, count: state.count-1})
}

const reduce = (state, action) => reducers[action.type] ? reducers[action.type](state, action) : state

const modelApi = {
	getState: () => model,
	dispatch: (action) => {
		model = reduce(model, action)
		subscribers.forEach(sub => sub(model))
	},
	subscribe: fn => subscribers.push(fn)
}

export default modelApi