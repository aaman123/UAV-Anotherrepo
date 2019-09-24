import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanesServiceService {

  constructor() { }
  private planes = [
    {
      id: '1',
      position: Cesium.Cartesian3.fromDegrees(72, 22),
      name: 'Airbus a320',
      image: 'https://cdn3.iconfinder.com/data/icons/airport-collection/100/23-512.png'

    },
    {
      id: '2',
      position: Cesium.Cartesian3.fromDegrees(31, 45),
      name: 'Boeing 777',
      image: 'https://cdn1.iconfinder.com/data/icons/fly-airbus-and-aeroplane/154/fly-air-plane-airbus-aeroplane-512.png'
    }
  ];

  getPlanes() {
    // Or get it from a real updating data source
    return from(this.planes);
  }
}

