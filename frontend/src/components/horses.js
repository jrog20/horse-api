class Horses {
  constructor() {
    this.horses = []
    this.adapter = new HorsesAdapter()
    // this.initBindingsAndEventListeners()
    this.fetchAndLoadHorses()
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
    const horsesContainer = document.getElementById('horses-container')
    horsesContainer.innerHTML = this.horses.map(horse => `<li>${horse.barn_name}</li>`).join('')
  }
}