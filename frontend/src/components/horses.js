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
    this.sire = document.getElementById('sire')
    this.dam = document.getElementById('dam')
    this.pedigree = document.getElementById('pedigree')
    this.registration = document.getElementById('registration')
    this.color = document.getElementById('color')
    this.patternType = document.getElementById('pattern-type')
    this.tested = document.getElementById('tested')
    this.tobianoGene = document.getElementById('tobiano-gene')
    this.offspring = document.getElementById('offspring')

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

    // horsesJSON.map(horse => this.horses.push(new Horse(horse)))

    // HOW TO GET EACH HORSE INTO A SEPARATE GRID?
    
    // Attempt 1:
    // this.horses.forEach(horse => 
    //   this.photo.innerHTML = horse.photo, this.barnName.innerHTML = horse.barn_name);

    // Attempt 2: 
    for(let horse of this.horses) {
      this.photo.innerHTML = `<img src=${horse.photo}></img>`
      this.barnName.innerHTML = `Barn Name: ${horse.barn_name}`
      this.registeredName.innerHTML = `Registered Name: ${horse.registered_name}`
      this.sire.innerHTML = `Sire: ${horse.sire}`
      this.dam.innerHTML = `Dam: ${horse.dam}`
      this.pedigree.innerHTML = `Pedigree: ${horse.pedigree}`
      this.registration.innerHTML = `Registration: ${horse.registration}`
      this.color.innerHTML = `Color: ${horse.color}`
      this.patternType.innerHTML = `Pattern Type: ${horse.pattern_type}`
      this.tested.innerHTML = `Tested: ${horse.tested}`
      this.tobianoGene.innerHTML = `Tobiano Gene: ${horse.tobiano_gene}`
      // Also need to iterate over each offspring here
      this.offspring.innerHTML = `Offspring: <p>Year: ${horse.offspring.year}</p><p>Sex: ${horse.offspring.sex}</p><p>Sire: ${horse.offspring.sire}</p>`
    }


    // this.photo.innerHTML = this.horses.map(horse => horse.photo)
    // barnName.innerHTML = this.horses.map(horse => `<p>Horse Name:  ${horse.barn_name}</p>`).join('')
    // registeredName.innerHTML = this.horses.map(horse => `<p>Registered Name: ${horse.registered_name}</p>`).join('')
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
