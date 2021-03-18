class Horses {
  constructor() {
    this.horses = []
    this.initBindingsAndEventListeners()
    this.adapter = new HorsesAdapter()
    this.fetchAndLoadHorses()
    this.horseNameTesting()
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

    this.testNewHorse = document.getElementById('test-new-horse')


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
      console.log(this.horses.map(horse => horse.barn_name))
      this.horseNameTesting()
    }).then(() => {
      this.createGrid()
    })
      // .then(this.horsesContainer.innerHTML = this.horses.map(horse => horse.renderLi()).join(''))
  }

  // HOW TO GET EACH HORSE INTO A SEPARATE GRID?

  createGrid() {
    // How do I create a new Grid here for each horse's data to populate one grid each

    // this.photo.innerHTML = this.horses.map(horse => horse.renderHorseImage())
    // this.barnName.innerHTML = this.horses.map(horse => horse.renderBarnName())

    this.horses.map(horse => {
    
      let clone = this.grid.cloneNode(true)
      clone.classList.remove('hide')
      
      console.log(clone.getElementsByClassName('photo'))

      clone.getElementsByClassName('photo')[0].innerHTML = horse.renderHorseImage()
      // clone.barnName.innerHTML = horse.renderBarnName()
      // clone.registeredName.innerHTML = `Registered Name: ${horse.registered_name}`
      // clone.sire.innerHTML = `Sire: ${horse.sire}`
      // clone.dam.innerHTML = `Dam: ${horse.dam}`
      // clone.pedigree.innerHTML = `Pedigree: ${horse.pedigree}`
      // clone.registration.innerHTML = `Registration: ${horse.registration}`
      // clone.color.innerHTML = `Color: ${horse.color}`
      // clone.patternType.innerHTML = `Pattern Type: ${horse.pattern_type}`
      // clone.tested.innerHTML = `Tested: ${horse.tested}`
      // clone.tobianoGene.innerHTML = `Tobiano Gene: ${horse.tobiano_gene}`

      this.horsesContent.append(clone)

      // Also need to iterate over each offspring here
      // this.offsprings.innerHTML = `Offspring: <p>Year: ${horse.offsprings[0].year}</p>`
      // <p>Sex: ${horse.offsprings.sex}</p><p>Sire: ${horse.offsprings.sire}</p>`
      })
    }
    
  horseNameTesting() {
    // this.testNewHorse.innerHTML = this.horses.map(horse => `<li>${horse.barn_name}</li>`)
    this.testNewHorse.innerHTML = this.horses.map(horse => horse.renderLi()).join('')
    console.log(this.testNewHorse.innerHTML)
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
