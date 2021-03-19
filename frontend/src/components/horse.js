class Horse {
  constructor(horseJSON) {
    this.barn_name = horseJSON.barn_name
    this.registered_name = horseJSON.registered_name
    this.sire = horseJSON.sire
    this.dam = horseJSON.dam
    this.dob = horseJSON.dob
    this.color = horseJSON.color
    this.pattern_type = horseJSON.pattern_type
    this.pedigree = horseJSON.pedigree
    this.registration = horseJSON.registration
    this.tested = horseJSON.tested
    this.tobiano_gene = horseJSON.tobiano_gene
    this.photo = horseJSON.photo
    this.id = horseJSON.id
  }

  renderHorseImage() {
    return `<img src=${this.photo}></img>`
  }

  renderBarnName() {
    return `<strong>Barn Name: </strong>${this.barn_name}`
  }

  renderRegisteredName() {
    return `<strong>Registered Name: </strong>${this.registered_name}`
  }

  renderSire() {
    return `<strong>Sire: </strong>${this.sire}`
  }

  renderDam() {
    return `<strong>Dam: </strong>${this.dam}`
  }

  renderPedigree() {
    return `<a href="${this.pedigree}">Pedigree</a>`
  }

  renderRegistration() {
    return `<strong>Registration: </strong>${this.registration}`
  }

  renderColor() {
    return `<strong>Color: </strong>${this.color}`
  }

  renderPatternType() {
    return `<strong>Pattern Type: </strong>${this.pattern_type}`
  }

  renderTested() {
    return `<strong>Tested: </strong>${this.tested}`
  }

  renderTobianoGene() {
    return `<strong>Tobiano Gene: </strong>${this.tobiano_gene}`
  }

}

//   render() {
//     return `<li data-horseid='${this.id}' data-props='${JSON.stringify(
//       this
//     )}' class='horse-element'><a class="show-link" href='#'>${
//       this.body
//     }</a> <button data-action='edit-horse'>Edit</button> <data-action='delete-horse'></li>`
//   }


  //   renderShow() {
//     return `<h3>${this.barn_name}</h3>`
// ${this.registered_name}
// ${this.sire}
// ${this.dam}
// ${this.dob}
// ${this.color}
// ${this.pattern_type}
// ${this.pedigree}
// ${this.registration}
// ${this.tested}
// ${this.tobiano_gene}
// ${this.photo}
//   }
