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
    return `<p><strong>Barn Name: </strong><span data-id=${this.id} data-field="barn_name">${this.barn_name}</span></p>`
  }

  renderRegisteredName() {
    return `<p><strong>Registered Name: </strong><span data-id=${this.id} data-field="registered_name">${this.registered_name}</span></p>`
  }

  renderSire() {
    return `<p><strong>Sire: </strong><span data-id=${this.id} data-field="sire">${this.sire}</span></p>`
  }

  renderDam() {
    return `<p><strong>Dam: </strong><span data-id=${this.id} data-field="dam">${this.dam}</span></p>`
  }

  renderPedigree() {
    if (`${this.pedigree}`) {
      return `<a href="${this.pedigree}">Pedigree</a>`
    } else {
      return 'No Pedigree Listed'
    }
  }

  renderRegistration() {
    return `<p><strong>Registration: </strong><span data-id=${this.id} data-field="registration">${this.registration}</span></p>`
  }

  renderColor() {
    return `<p><strong>Color: </strong><span data-id=${this.id} data-field="color">${this.color}</span></p>`
  }

  renderPatternType() {
    return `<p><strong>Pattern Type: </strong><span data-id=${this.id} data-field="pattern_type">${this.pattern_type}</span></p>`
  }

  renderTested() {
    return `<p><strong>Tested: </strong><span data-id=${this.id} data-field="tested">${this.tested}</span></p>`
  }

  renderTobianoGene() {
    return `<p><strong>Tobiano Gene: </strong><span data-id=${this.id} data-field="tobiano_gene">${this.tobiano_gene}</span></p>`
  }

  renderHorseId() {
    return this.id
  }
}
