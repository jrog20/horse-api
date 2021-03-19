class Horses {
  constructor() {
    this.horses = []
    this.initBindingsAndEventListeners()
    this.adapter = new HorsesAdapter()
    this.fetchAndLoadHorses()
  }

  initBindingsAndEventListeners() {
    this.horsesContainer = document.getElementById('horses-container')
    this.horsesContent = document.getElementById('horses-content')
    this.grid = document.getElementsByClassName('grid')[document.getElementsByClassName('grid').length-1]
    this.photo = document.getElementsByClassName('photo')
    this.barnName = document.getElementsByClassName('barn-name')
    this.registeredName = document.getElementsByClassName('registered-name')
    this.sire = document.getElementsByClassName('sire')
    this.dam = document.getElementsByClassName('dam')
    this.pedigree = document.getElementsByClassName('pedigree')
    this.registration = document.getElementsByClassName('registration')
    this.color = document.getElementsByClassName('color')
    this.patternType = document.getElementsByClassName('pattern-type')
    this.tested = document.getElementsByClassName('tested')
    this.tobianoGene = document.getElementsByClassName('tobiano-gene')
    this.offsprings = document.getElementsByClassName('offsprings')

    this.newBarnName = document.getElementById('new-barn-name')
    this.horseForm = document.getElementById('new-horse-form')
    // Bind createHorse to Horses class to make 'this' in createHorse method the Horses class object, rather than just the form.
    // this.horseForm.addEventListener('submit', this.createHorse.bind(this))

    // this.horsesForm.addEventListener('submit', this.handleAddHorse.bind(this))

    // this.horseInput = document.getElementById('new-horse-body')
    // this.horsesNode = document.getElementById('horses-container')
    // this.horsesNode.addEventListener('click',this.handleDeleteHorse.bind(this))
  }
  
  fetchAndLoadHorses() {
    this.adapter.getHorses().then(horses => {
      // this.horses = array of 7 horse objects (including offspring)
      horses.forEach(horse => this.horses.push(new Horse(horse)))
    })
    .then(() => {
      this.createGrid()
    // }).then(() => {
    //   this.createGrid()
    })
      // .then(this.horsesContainer.innerHTML = this.horses.map(horse => horse.renderLi()).join(''))
  }

  // HOW TO GET EACH HORSE INTO A SEPARATE GRID?

  createGrid() {
    this.horses.map(horse => {
      let clone = this.grid.cloneNode(true)
      clone.classList.remove('hide')

      clone.getElementsByClassName('photo')[0].innerHTML = horse.renderHorseImage()
      clone.getElementsByClassName('barn-name')[0].innerHTML = horse.renderBarnName()
      clone.getElementsByClassName('registered-name')[0].innerHTML = `Registered Name: ${horse.registered_name}`
      clone.getElementsByClassName('sire')[0].innerHTML = `Sire: ${horse.sire}`
      clone.getElementsByClassName('dam')[0].innerHTML = `Dam: ${horse.dam}`
      clone.getElementsByClassName('pedigree')[0].innerHTML = `Pedigree: ${horse.pedigree}`
      clone.getElementsByClassName('registration')[0].innerHTML = `Registration: ${horse.registration}`
      clone.getElementsByClassName('color')[0].innerHTML = `Color: ${horse.color}`
      clone.getElementsByClassName('pattern-type')[0].innerHTML = `Pattern Type: ${horse.pattern_type}`
      clone.getElementsByClassName('tested')[0].innerHTML = `Tested: ${horse.tested}`
      clone.getElementsByClassName('tobiano-gene')[0].innerHTML = `Tobiano Gene: ${horse.tobiano_gene}`

      this.horsesContent.append(clone)

      // Also need to iterate over each offspring here
      // this.offsprings.innerHTML = `Offspring: <p>Year: ${horse.offsprings[0].year}</p>`
      // <p>Sex: ${horse.offsprings.sex}</p><p>Sire: ${horse.offsprings.sire}</p>`
      })
    }
  

  // createHorse(event) {
  //   event.preventDefault()
  //   // value = 'Sam'
  //   const value = this.newBarnName.value

  //   this.adapter.createHorse(value).then(horse => {
  //     console.log(horse)
  //     })
  //     // debugger
  //   }



      // .catch(error => console.log(error))
        // console.log("Test")
        // Worked on w/Kyle, still not working:
        // let horseData = this.horses.map(horse => horse.barn_name)
        // this.horsesContainer.innerHTML = horseData
      
}
