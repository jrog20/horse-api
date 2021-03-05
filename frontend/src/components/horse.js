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
    this.offspring = horseJSON.offspring
    this.id = horseJSON.id
  }

  renderLi() {
    return `<li>${this.barn_name}</li>`
  }

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

//   render() {
//     return `<li data-horseid='${this.id}' data-props='${JSON.stringify(
//       this
//     )}' class='horse-element'><a class="show-link" href='#'>${
//       this.body
//     }</a> <button data-action='edit-horse'>Edit</button> <data-action='delete-horse'></li>`
//   }
}