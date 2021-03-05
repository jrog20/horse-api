// Controller: gets data from API and gives it to the frontend
class HorsesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/horses'
  }

  getHorses() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  // createHorse(body) {
  //   const horseCreateParams = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ body })
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
}