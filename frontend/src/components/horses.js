class Horses {
  constructor() {
    this.horses = []
    this.initBindingsAndEventListeners()
    this.adapter = new HorsesAdapter()
    this.fetchAndLoadHorses()
  }

  initBindingsAndEventListeners() {
    this.horsesContainer = document.getElementById('horses-container')
    this.photo = document.getElementById('photo')
    this.barnName = document.getElementById('barn-name')
    this.registeredName = document.getElementById('registered-name')

    // this.newBarnName = document.getElementById('new-barn-name')
    // this.horseForm = document.getElementById('new-horse-form')
    // Bind createHorse to Horses class to make 'this' in createHorse method the Horses class object, rather than just the form.
    // this.horseForm.addEventListener('submit', this.createHorse.bind(this))

    // this.horseInput = document.getElementById('new-horse-body')
    // this.horsesNode = document.getElementById('horses-container')
    // this.horsesForm.addEventListener('submit',this.handleAddHorse.bind(this))
    // this.horsesNode.addEventListener('click',this.handleDeleteHorse.bind(this))
  }
  
  fetchAndLoadHorses() {
    this.adapter.getHorses().then(horses => {
      // this.horses = array of 7 horse objects (including offspring)
      horses.forEach(horse => this.horses.push(new Horse(horse)))
    })
    .then(() => {
      this.render()
    })
      // .then(this.horsesContainer.innerHTML = this.horses.map(horse => horse.renderLi()).join(''))
  }

  render() {
    // const photo = document.getElementById('photo')
    const barnName = document.getElementById('barn-name')
    const registeredName = document.getElementById('registered-name')

    // horsesJSON.map(horse => this.horses.push(new Horse(horse)))

    this.photo.innerHTML = this.horses.map(horse => horse.photo)
    barnName.innerHTML = this.horses.map(horse => `<p>Horse Name:  ${horse.barn_name}</p>`).join('')
    registeredName.innerHTML = this.horses.map(horse => `<p>Registered Name: ${horse.registered_name}</p>`).join('')
  }

  horsesHTML() {
    return this.horses.map(horse => horse.render()).join('')
  }

  // render() {
  //   this.horsesContainer.innerHTML = `<ul>${this.horsesHTML()}</ul>`
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


  //   this.horsesContainer.innerHTML = this.horses.map(horse => horse.renderLi()).join('')

      // .catch(error => console.log(error))
        // console.log("Test")
        // Worked on w/Kyle, still not working:
        // let horseData = this.horses.map(horse => horse.barn_name)
        // this.horsesContainer.innerHTML = horseData
      
}
