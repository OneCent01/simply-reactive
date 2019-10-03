// your server domain
const host = 'http://localhost:3000'

// custom fetch polyfill using XMLHttpRequest for full browser support
const fetch = (method, url, payload=undefined) => new Promise((resolve, reject) => {
	const request = new XMLHttpRequest()

	request.addEventListener("load", e => resolve(e.target.response))
	request.addEventListener("error", reject)
	request.addEventListener("abort", reject)

	request.open(method, url)
	request.setRequestHeader("Content-type", "application/json")

	const token = localStorage.getItem('token')
	if(token) {
		request.withCredentials = true
		request.setRequestHeader('Authorization', token)
	}

	payload ? request.send(payload) : request.send()
})

/*************** FETCH UTILITIES ******************/
// namespace for functions meant to interact with servers

// example function calling authenticate on a user's username and password, returning its results
// const authUser = async (email, password) => await fetch('POST', `${host}/auth-user`, [JSON.stringify({ email, password })])


const serverApi = {
	// export fetch utilities here
	// authUser
}

export default serverApi