import { faker } from '@faker-js/faker'
import { Mappable } from './Map'

export class Company implements Mappable {
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }
  name: string
  constructor() {
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
    this.name = faker.company.name()
  }

  markerContent() {
    return `<div><strong>${this.name}</strong></div><div>${this.catchPhrase}</div>`
  }
}
