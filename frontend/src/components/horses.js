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

    this.horseForm = document.getElementById('new-horse-form')
    // Bind createHorse to Horses class to make 'this' in createHorse method the Horses class object, rather than just the form.
    this.horseForm.addEventListener('submit', this.createHorse.bind(this))

    this.newBarnName = document.getElementById('new-barn-name')
    this.newRegisteredName = document.getElementById('new-registered-name')
    this.newSire = document.getElementById('new-sire')
    this.newDam = document.getElementById('new-dam')
    this.newDob = document.getElementById('new-dob')
    this.newColor = document.getElementById('new-color')
    this.newPatternType = document.getElementById('new-pattern-type')
    this.newPedigree = document.getElementById('new-pedigree')
    this.newRegistration = document.getElementById('new-registration')
    this.newTested = document.getElementById('new-tested')
    this.newTobianoGene = document.getElementById('new-tobiano-gene')
    this.newPhoto = document.getElementById('new-photo')


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
    })
  }

  createGrid() {
    this.horses.map(horse => {
      let clone = this.grid.cloneNode(true)
      clone.classList.remove('hide')

      clone.getElementsByClassName('photo')[0].innerHTML = horse.renderHorseImage()
      clone.getElementsByClassName('barn-name')[0].innerHTML = horse.renderBarnName()
      clone.getElementsByClassName('registered-name')[0].innerHTML = horse.renderRegisteredName()
      clone.getElementsByClassName('sire')[0].innerHTML = horse.renderSire()
      clone.getElementsByClassName('dam')[0].innerHTML = horse.renderDam()
      clone.getElementsByClassName('pedigree')[0].innerHTML = horse.renderPedigree()
      clone.getElementsByClassName('registration')[0].innerHTML = horse.renderRegistration()
      clone.getElementsByClassName('color')[0].innerHTML = horse.renderColor()
      clone.getElementsByClassName('pattern-type')[0].innerHTML = horse.renderPatternType()
      clone.getElementsByClassName('tested')[0].innerHTML = horse.renderTested()
      clone.getElementsByClassName('tobiano-gene')[0].innerHTML = horse.renderTobianoGene()

      this.horsesContent.append(clone)

      // Also need to iterate over each offspring here
      // this.offsprings.innerHTML = `Offspring: <p>Year: ${horse.offsprings[0].year}</p>`
      // <p>Sex: ${horse.offsprings.sex}</p><p>Sire: ${horse.offsprings.sire}</p>`
    })
  }
  
  createHorse(event) {
    event.preventDefault()
    // value = 'Sam'
    // const ?? = this.newBarnName.value

    // this.adapter.createHorse(value).then(horse => {
      console.log(this)
      console.log(this.newBarnName.value)
      console.log(this.newRegisteredName.value)
      console.log(this.newColor.value)
    // })
  }
}
