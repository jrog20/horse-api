class Horses {
  constructor() {
    this.horses = []
    this.adapter = new HorsesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadHorses()
  }

  initBindingsAndEventListeners() {
    this.horsesContainer = document.getElementById('horses-container')

    // this.horsesForm = document.getElementById('new-horse-form')
    // this.horseInput = document.getElementById('new-horse-body')
    // this.horsesNode = document.getElementById('horses-container')
    // this.horsesForm.addEventListener('submit',this.handleAddHorse.bind(this))
    // this.horsesNode.addEventListener('click',this.handleDeleteHorse.bind(this))
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