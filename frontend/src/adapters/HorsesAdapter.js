// Controller: gets data from API and gives it to the frontend
class HorsesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/horses'
  }

  getHorses() {
    return fetch(this.baseUrl).then(res => res.json())
  }
}