import App from './components/App'
import Comics from './components/Comics/Comics'

window.addEventListener('DOMContentLoaded', () => {
  ;(async () => {
    await App.render()
    Comics.eventListener()
  })()
})
