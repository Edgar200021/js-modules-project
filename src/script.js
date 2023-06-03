import App from './components/App'
import Comics from './components/Comics'
import Error from './components/Error'

window.addEventListener('DOMContentLoaded', () => {
  ;(async () => {
    await App.render()
    Comics.eventListener()
  })()
})
