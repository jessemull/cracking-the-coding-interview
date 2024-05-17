import { faker } from '@faker-js/faker'
import { Mappable } from './Map'

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
    this.name = faker.person.fullName()
  }

  markerContent() {
    return this.name
  }
}
