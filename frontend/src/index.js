// Create new instance of App
// const app = new App()


const url = 'http://localhost:3000/api/v1/horses'
const horsesContainer = document.getElementById('horses-container')

fetch(url)
.then(function(res) {
  return res.json()
}).then(function(horses){
  for(let horse of horses) {
    let li = document.createElement('li')
    li.innerText = horse.barn_name
    horsesContainer.appendChild(li)
  }
})
