// Like a Controller: gets data from API and gives it to the frontend
class HorsesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/horses'
  }

  getHorses() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  createHorse(horse) {
    const horseCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ horse })
    }
    return fetch(this.baseUrl, horseCreateParams).then(res => res.json())
  }

  updateHorse(value, id, name) {
    let horse = {}
    horse[name] = value
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ horse }),
    }).then(res => res.json())
  }
}
