// Like a Controller: gets data from API and gives it to the frontend
class HorsesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/horses'
  }

  getHorses() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  createHorse(value) {
    const horseCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value })
    }
    return fetch(this.baseUrl, horseCreateParams).then(res => res.json())
  }
}

  // createHorse(horse_params) {
  //   const horseCreateParams = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ horse_params })
  //   }
  //   return fetch(this.baseUrl, horseCreateParams).then(res => res.json())
  // }

 
  // deleteHorse(horseId) {
  //   const horseDeleteParams = {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  //   return fetch(`${this.baseUrl}/${horseId}`, horseDeleteParams).then(res =>
  //     res.json()
  //   )
  // }
