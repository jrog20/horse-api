class Horses {
  constructor() {
    this.horses = []
    this.adapter = new HorsesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadHorses()
  }

  fetchAndLoadHorses() {
    this.adapter.getHorses().then(horses => {
      console.log(horses)
    })
  }
}