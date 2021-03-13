// Create new instance of App
// const app = new App()


const url = 'http://localhost:3000/api/v1/horses'
fetch(url)
.then(function(res) {
  return res.json()
}).then(function(horses){
  console.log(horses[0])
})
