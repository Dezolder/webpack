import data from './data'
import './index.scss'
// import css from "file.css";
const root = document.querySelector('#app')

function renderItem(item) {
    const li = document.createElement('li')
    li.textContent = item.title
    console.log(item.title)
    console.log('')

    root.append(li)
}

data.forEach(renderItem)
