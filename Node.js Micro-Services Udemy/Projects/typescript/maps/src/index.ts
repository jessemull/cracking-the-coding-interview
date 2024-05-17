/// <reference types="@types/googlemaps" />

import { User } from './User'
import { Company } from './Company'
import { Map } from './Map'

const company = new Company()
const user = new User()
const map = new Map(document.getElementById('map') as Element)

map.addMarker(user)
map.addMarker(company)