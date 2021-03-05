class Horses {
  constructor() {
    this.horses = []
    this.adapter = new HorsesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadHorses()
  }

  initBindingsAndEventListeners() {
    this.horsesContainer = document.getElementById('horses-container')
    this.horseForm = document.getElementById('new-horse-form')
    // Bind createHorse to Horses class to make 'this' in createHorse method the Horses class object, rather than just the form.
    this.horseForm.addEventListener('submit', this.createHorse.bind(this))
    this.newBarnName = document.getElementById('new-barn-name')
    // this.horseInput = document.getElementById('new-horse-body')
    // this.horsesNode = document.getElementById('horses-container')
    // this.horsesForm.addEventListener('submit',this.handleAddHorse.bind(this))
    // this.horsesNode.addEventListener('click',this.handleDeleteHorse.bind(this))
  }

  createHorse(e) {
    e.preventDefault()
    // value = 'Sam'
    const value = this.newBarnName.value

    this.adapter.createHorse(value)
  }

  fetchAndLoadHorses() {
    this.adapter.getHorses()
    .then(horses => {
      horses.forEach(horse => this.horses.push(new Horse(horse)))
      // console.log(this.horses)
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    this.horsesContainer.innerHTML = this.horses.map(horse => horse.renderLi()).join('')
  }
}