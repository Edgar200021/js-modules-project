import { getDataApi } from '../../services/getDataApi'
import Notification from '../Notification/Notification'
import { ROOT_MODAL } from '../../constants/root'
import { IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api'


import './Characters.css'

class Characters {
  async render(uri) {
    const data = await getDataApi.getData(uri)

    data.length ? this.showRequestInfo(data) : Notification.render() 
  }

  showRequestInfo(data) {
    if (data.length) {
      let htmlElement = ''

      data.forEach(({ name, thumbnail: { path, extension } }) => {
        if (path.match(new RegExp(IMG_NOT_AVAILABLE, 'i'))) {
          return
        }
        htmlElement += `
					<li class="character__item">
						<img src="${path}/${IMG_STANDARD_XLARGE}.${extension}">
						<span class="character__name">${name}</span>
					</li>
				`
      })

      const htmlWrapper = `
			  <div class="character__wrapper"> 
			   <ul class="character__list">${htmlElement}
	 				 <button data-close onclick="modal.innerHTML = ''
					 document.body.style.overflow = 'auto'
					 ">X</button> 
  					 </ul>
					 </div>
	`

      document.body.style.overflow = 'hidden'

      ROOT_MODAL.innerHTML = htmlWrapper
    }
  }
}

export default new Characters()
