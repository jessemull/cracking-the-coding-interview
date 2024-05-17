export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent: () => string
  name: string
}

export class Map {
  private map: google.maps.Map

  constructor(anchor: Element) {
    this.map = new google.maps.Map(anchor, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      label: mappable.name.charAt(0),
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      title: mappable.name,
    })

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    })

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker)
    })
  }
}
