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
    if (`${this.photo}`) {
      return `<img src=${this.photo}></img>`
    } else {
      return 'No Photo Available'
    }
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
    if (`${this.pedigree}`) {
      return `<a href="${this.pedigree}">Pedigree</a>`
    } else {
      return 'No Pedigree Listed'
    }
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

  render() {
    console.log(this)
    // let clone = this.grid.cloneNode(true)
      // clone.classList.remove('hide')

      // clone.getElementsByClassName('photo')[0].innerHTML = horse.renderHorseImage()
      // clone.getElementsByClassName('barn-name')[0].innerHTML = "Hello"
      // clone.getElementsByClassName('registered-name')[0].innerHTML = this.renderRegisteredName()
      // clone.getElementsByClassName('sire')[0].innerHTML = this.renderSire()
      // clone.getElementsByClassName('dam')[0].innerHTML = this.renderDam()
      // clone.getElementsByClassName('pedigree')[0].innerHTML = this.renderPedigree()
      // clone.getElementsByClassName('registration')[0].innerHTML = this.renderRegistration()
      // clone.getElementsByClassName('color')[0].innerHTML = this.renderColor()
      // clone.getElementsByClassName('pattern-type')[0].innerHTML = this.renderPatternType()
      // clone.getElementsByClassName('tested')[0].innerHTML = this.renderTested()
      // clone.getElementsByClassName('tobiano-gene')[0].innerHTML = this.renderTobianoGene()

      // this.horsesContent.append(clone)

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
