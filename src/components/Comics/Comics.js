import {
  API_URL,
  URL_COMICS,
  URL_CHARACTERS,
  IMG_STANDARD_XLARGE,
  IMG_NOT_AVAILABLE,
} from '../../constants/api'
import { getDataApi } from '../..//services/getDataApi'
import { ROOT_INDEX } from '../../constants/root'

import './Comics.css'

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS)

    let htmlContent = ''

    data.forEach(({ id, title, thumbnail: { path, extension } }) => {
      if (path.match(new RegExp(IMG_NOT_AVAILABLE, 'i'))) {
        return
      }
      htmlContent += `<li data-id="${id}" class="comics__item">
	  <h1 class="comics__title first-title">${title}</h1>
	  <img class="comics__img" src = "${path}/${IMG_STANDARD_XLARGE}.${extension}">
  </li>`

      const htmlWrapper = `
		<ul class="comics__list">
			${htmlContent}
		</ul>
  `

      ROOT_INDEX.innerHTML = htmlWrapper
    })
  }


  eventListener() {
	const ul = document.querySelector('.comics__list') 

	ul.addEventListener('click', async (e) => {
		if (!e.target.closest('.comics__item')) {
			return
		}
		
		const li = e.target.closest('.comics__item')

		const data = await getDataApi.getData(`${API_URL}${URL_COMICS}/${li.dataset.id}/${URL_CHARACTERS}`)

	})
  }
}

export default new Comics()
