import { ROOT_MODAL } from '../../constants/root'

import './Error.css'

class Error {
  render() {
    const htmlWrapper = `
			<div class="error__wrapper">
				<div class="error__inner">
				<span class="error__message">Произошла ошибка.<br>Попробуйте позже</span>
				<button data-close class="error__btn">X</button>
				</div>
			</div>
		`

    ROOT_MODAL.innerHTML = htmlWrapper
  }


  closeModal() {
	const element = document.querySelector('.error__wrapper')


	element.addEventListener('click', (e) => {
		const target = e.target
		console.log("hehe")

		if (target.matches('.error__wrapper') || target.matches('[data-close]')) {
			const parent = target.closest('#modal')
				parent.innerHTML = ''
		}
	})
  }
}

export default new Error()
