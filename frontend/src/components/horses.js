// class Horses {
//   constructor() {
//     this.horses = []
//     // this.initBindingsAndEventListeners()
//     this.adapter = new HorsesAdapter()
//     // this.fetchAndLoadHorses()
//   }
  // console.log('http://localhost:3000/api/v1/horses')


  // initBindingsAndEventListeners() {
  //   this.horsesContainer = document.getElementById('horses-container')
  //   // this.newBarnName = document.getElementById('new-barn-name')
  //   // this.horseForm = document.getElementById('new-horse-form')
  //   // Bind createHorse to Horses class to make 'this' in createHorse method the Horses class object, rather than just the form.
  //   // this.horseForm.addEventListener('submit', this.createHorse.bind(this))

  //   // this.horseInput = document.getElementById('new-horse-body')
  //   // this.horsesNode = document.getElementById('horses-container')
  //   // this.horsesForm.addEventListener('submit',this.handleAddHorse.bind(this))
  //   // this.horsesNode.addEventListener('click',this.handleDeleteHorse.bind(this))
  // }

  // // createHorse(e) {
  // //   e.preventDefault()
  // //   // value = 'Sam'
  // //   const value = this.newBarnName.value

  // //   this.adapter.createHorse(value).then(horse => {
  // //     // Trying to get console log to stay (only flashes and disappears)
  // //     console.log(horse)
  // //     })
  // //     // debugger
  // //   }
  

  // fetchAndLoadHorses() {
  //   this.adapter
  //     .getHorses()
  //     .then(horsesJSON => 
  //       horsesJSON.map(horse => this.horses.push(new Horse(horse)))
  //       // console.log(this.horses)
  //       // debugger
  //     )
  //     .then(this.render.bind(this))
  //     // .catch(error => console.log(error))
  //       // console.log("Test")
  //       // Worked on w/Kyle, still not working:
  //       // let horseData = this.horses.map(horse => horse.barn_name)
  //       // this.horsesContainer.innerHTML = horseData
      
  // }
  // horsesHTML() {
  //   return this.horses.map(horse => horse.render()).join('')
  // }

  // render() {
  //   this.horsesContainer.innerHTML = `<ul>${this.horsesHTML()}</ul>`
  // }

  // Work on this function => for each loop += to innerHTML
  // render() {
  //   // console.log(this.horses.forEach(element => console.log(element)))
  //   // This is what I had:
  //   console.log(this)
  //   // debugger

  //   this.horsesContainer.innerHTML = this.horses.map(horse => horse.renderLi()).join('')

  // }
// }