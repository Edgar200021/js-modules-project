import Comics from '../Comics/Comics'

import './App.css'

class App {
	async render() {
		await Comics.render()
	}
}

export default new App()