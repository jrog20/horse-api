class Offspring {
  constructor(offspringJSON) {
    this.year = offspringJSON.year
    this.sex = offspringJSON.sex
    this.sire = offspringJSON.sire
    this.id = offspringJSON.id
  }



  // renderOffspringYear() {
  //   console.log(this)
  //   return `<p><strong>Year: </strong><span data-id=${this.id} data-field="year">${this.year}</span></p>`
  // }

  // renderOffspringSex() {
  //   // console.log(this.sex)
  //   return `<p><strong>Sex: </strong><span data-id=${this.id} data-field="year">${this.sex}</span></p>`
  // }

  // renderOffspringSire() {
  //   // console.log(this.offspring)
  //   return `<p><strong>Sire: </strong><span data-id=${this.id} data-field="year">${this.sire}</span></p>`
  // }
}
