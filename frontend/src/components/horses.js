class Horses {
  constructor() {
    this.horses = []
    this.adapter = new HorsesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadHorses()
  }

  fetchAndLoadHorses() {
    this.adapter
    .getHorses()
    .then(horses => {
      horses.forEach(horse => this.horses.push(horse))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const horsesContainer = document.getElementById('horses-container')
    horsesContainer.innerHTML = 'HI!!!!!'
  }
}