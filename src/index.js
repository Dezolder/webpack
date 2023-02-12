import './index.scss'
import data from './data'

let playingSoundId
const list = document.querySelector('.weather-list')

const soundElement = new Audio()
soundElement.loop = true

const volume = document.querySelector('.volume-controller')
volume.addEventListener('input', (e) => {
  soundElement.volume = e.currentTarget.value / 100
})

list.addEventListener('click', ({ target }) => {
  const targetId = target.closest('[data-item-id]')?.dataset.itemId
  if (!targetId) return

  const item = data.find((i) => i.id === targetId)

  if (playingSoundId !== item.id) {
    playingSoundId = item.id
    soundElement.src = item.sound
    soundElement.play()
    document.body.style.backgroundImage = `url('${item.background}')`
    return
  }

  if (soundElement.paused) {
    soundElement.play()
  } else {
    soundElement.pause()
  }
})

function renderItem(item) {
  const listItem = document.createElement('li')
  listItem.classList.add('weather-list__item')
  
  const weatherItem = document.createElement('button')
  weatherItem.classList.add('weather-item')
  weatherItem.dataset.itemId = item.id
  weatherItem.style.backgroundImage = `url('${item.background}')`

  const itemIcon = document.createElement('img')
  itemIcon.classList.add('weather-item__icon')
  itemIcon.src = item.ico

  weatherItem.append(itemIcon)
  listItem.append(weatherItem)
  list.append(listItem)
}

data.forEach(renderItem)
