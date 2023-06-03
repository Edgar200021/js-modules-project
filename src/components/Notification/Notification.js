import { ROOT_MODAL } from '../../constants/root'

import './Notification.css'

class Notification{
	render(){
		const htmlWrapper = `
			<div class="notification">
				<span class ="notification__message">Нет контента</span>
				<button class="notification__btn" onclick="modal.innerHTML = ''">X</button>
			</div>
		`
		ROOT_MODAL.innerHTML = htmlWrapper
	}
}

export default new Notification()