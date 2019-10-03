export default {
	INCREMENT: (state, action) => ({...state, counter: state.counter+1}),
	DECREMENT: (state, action) => ({...state, counter: state.counter-1}),
}