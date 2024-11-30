const ANIMAL_TYPES = {
  CAT: 'CAT',
  DOG: 'DOG'
}

class Animal {
  constructor(type) {
    this.type = type
  }
}

module.exports = {
  ANIMAL_TYPES,
  Animal
}