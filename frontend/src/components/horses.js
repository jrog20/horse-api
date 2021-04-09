class Horses {
  constructor() {
    this.horses = [];
    this.initBindingsAndEventListeners();
    this.adapter = new HorsesAdapter();
    this.fetchAndLoadHorses();
  }

  initBindingsAndEventListeners() {
    this.darkMode = document.getElementById('dark-mode');
    this.darkMode.addEventListener('click', this.darkModeClick.bind(this));

    // Horse Fields
    this.horsesContainer = document.getElementById('horses-container');
    this.horsesContent = document.getElementById('horses-content');
    this.grid = document.getElementsByClassName('grid')[document.getElementsByClassName('grid').length-1];
    this.photo = document.getElementsByClassName('photo');
    this.barnName = document.getElementsByClassName('barn-name');
    this.registeredName = document.getElementsByClassName('registered-name');
    this.sire = document.getElementsByClassName('sire');
    this.dam = document.getElementsByClassName('dam');
    this.pedigree = document.getElementsByClassName('pedigree');
    this.registration = document.getElementsByClassName('registration');
    this.color = document.getElementsByClassName('color');
    this.patternType = document.getElementsByClassName('pattern-type');
    this.tested = document.getElementsByClassName('tested');
    this.tobianoGene = document.getElementsByClassName('tobiano-gene');
    // Offspring Fields
    this.offspringContainer = document.getElementsByClassName('offspring-container');
    this.offspringYear = document.getElementsByClassName('offspring-year');
    this.offspringSex = document.getElementsByClassName('offspring-sex');
    this.offspringSire = document.getElementsByClassName('offspring-sire');
    // Form
    this.horseForm = document.getElementById('new-horse-form');
    // Bind createHorse to Horses class to make 'this' in createHorse method 
    // the Horses class object, rather than just the form.
    this.horseForm.addEventListener('submit', this.createHorse.bind(this));
    // Form Fields
    let newHorseContainer = document.getElementById('new-horse-container');
    this.newBarnName = document.getElementById('new-barn-name');
    this.newRegisteredName = document.getElementById('new-registered-name');
    this.newSire = document.getElementById('new-sire');
    this.newDam = document.getElementById('new-dam');
    this.newDob = document.getElementById('new-dob');
    this.newColor = document.getElementById('new-color');
    this.newPatternType = document.getElementById('new-pattern-type');
    this.newPedigree = document.getElementById('new-pedigree');
    this.newRegistration = document.getElementById('new-registration');
    this.newTested = document.getElementById('new-tested');
    this.newTobianoGene = document.getElementById('new-tobiano-gene');
    this.newPhoto = document.getElementById('new-photo');
    // Edit
    this.horsesContent.addEventListener('dblclick', this.handleHorseClick.bind(this));
    // Reference the parent element to listen for click element
    this.horsesContainer.addEventListener('blur', this.updateHorse.bind(this), true);
    // Show horse form button
    this.newHorseButton = document.getElementById('new-horse-button');
    this.newHorseButton.addEventListener('click', function(){
      // console.log(newHorseContainer.style.display)
      if(newHorseContainer.style.display == 'none' || newHorseContainer.style.display == '') {
        newHorseContainer.style.display = 'block';
        this.innerText = 'Hide new horse form';
      } else {
        newHorseContainer.style.display = 'none';
        this.innerText = 'Add new Horse';
      }
    })
  }

  darkModeClick() {
    if(document.body.style.backgroundColor == 'rgb(88, 175, 88)') {
      document.body.style.backgroundColor = 'grey'
    } else {
      document.body.style.backgroundColor = 'rgb(88, 175, 88)'
    }
  }

  handleHorseClick(e) {
    this.toggleHorse(e);
  }
  
  toggleHorse(e) {
    const field = e.target;
    field.contentEditable = true;
    field.focus();
    field.classList.add('editable');
  }

  updateHorse(e) {
    const field = e.target;
    field.contentEditable = false;
    field.classList.remove('editable');
    const newValue = field.innerHTML;
    const id = field.dataset.id;
    const name = field.dataset.field;
    this.adapter.updateHorse(newValue, id, name);
  }

  fetchAndLoadHorses() {
    this.adapter.getHorses().then(horses => {
      // this.horses = array of 7 horse objects (including offspring)
      horses.forEach(horse => this.horses.push(new Horse(horse)))
    })
    .then(() => {
      this.createGrid()
    })
  }

  createGrid() {
    this.horses.map(horse => {
      this.createSingleHorse(horse)
    })
  }

  createSingleHorse(horse){
    let clone = this.grid.cloneNode(true);
    clone.classList.remove('hide');

    clone.getElementsByClassName('photo')[0].innerHTML = horse.renderHorseImage();
    clone.getElementsByClassName('barn-name')[0].innerHTML = horse.renderBarnName();
    clone.getElementsByClassName('registered-name')[0].innerHTML = horse.renderRegisteredName();
    clone.getElementsByClassName('sire')[0].innerHTML = horse.renderSire();
    clone.getElementsByClassName('dam')[0].innerHTML = horse.renderDam();
    clone.getElementsByClassName('pedigree')[0].innerHTML = horse.renderPedigree();
    clone.getElementsByClassName('registration')[0].innerHTML = horse.renderRegistration();
    clone.getElementsByClassName('color')[0].innerHTML = horse.renderColor();
    clone.getElementsByClassName('pattern-type')[0].innerHTML = horse.renderPatternType();
    clone.getElementsByClassName('tested')[0].innerHTML = horse.renderTested();
    clone.getElementsByClassName('tobiano-gene')[0].innerHTML = horse.renderTobianoGene();

    let data = ''

    if (horse.offsprings.length != 0) {
      for(let offspring in horse.offsprings) {
        data += `<p>`
        data += `<span class="offspring-year"><strong>Year: </strong>${horse.offsprings[offspring].year} </span>`
        data += `<span class="offspring-sex"><strong>Sex: </strong>${horse.offsprings[offspring].sex} </span>`
        data += `<span class="offspring-sire"><strong>Sire: </strong>${horse.offsprings[offspring].sire}</span>`
        data += `</p>`
      } 
    } else {
      data = `<p>None</p>`
    }

    clone.getElementsByClassName('offspring-container')[0].innerHTML = data
    this.horsesContent.append(clone)      
  }

  createHorse(e) {
    e.preventDefault()
    const horse = {
      barn_name: this.newBarnName.value, 
      registered_name: this.newRegisteredName.value,
      sire: this.newSire.value,
      dam: this.newDam.value,
      dob: this.newDob.value,
      color: this.newColor.value,
      pattern_type: this.newPatternType.value,
      pedigree: this.newPedigree.value,
      registration: this.newRegistration.value,
      tested: this.newTested.value,
      tobiano_gene: this.newTobianoGene.value,
      photo: this.newPhoto.value
    }

    this.adapter.createHorse(horse).then(horse => {
      let newHorse = new Horse(horse);
      // console.log(newHorse)
      this.horses.push(newHorse);
      this.clearFormFields();
      this.createSingleHorse(newHorse);
    })
  }  

  clearFormFields() {
    this.newBarnName.value = ''
    this.newRegisteredName.value = ''
    this.newSire.value = ''
    this.newDam.value = ''
    this.newDob.value = ''
    this.newColor.value = ''
    this.newPatternType.value = ''
    this.newPedigree.value = ''
    this.newRegistration.value = ''
    this.newTested.value = ''
    this.newTobianoGene.value = ''
    this.newPhoto.value = ''
  }
}
