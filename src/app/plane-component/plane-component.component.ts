import { Component, OnInit } from '@angular/core';
import { PlanesServiceService } from '../planes-service.service';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionType } from 'angular-cesium';
import { AcNotification } from '../ac-notification';

@Component({
  selector: 'app-plane-component',
  templateUrl: './plane-component.component.html',
  styleUrls: ['./plane-component.component.css']
})
export class PlaneComponentComponent implements OnInit {
  planes$: Observable<AcNotification>;


  constructor(private planesService: PlanesServiceService) { }

  ngOnInit() {
    this.planes$ = this.planesService.getPlanes().pipe(
      map(plane => ({
        id: plane.id,
        actionType: ActionType.ADD_UPDATE,
        entity: plane,
      }))
    );
  }

  getColor(plane) {
    if (plane.name.startsWith('Boeing')) {
      return Cesium.Color.Green;
    } else {
      return Cesium.Color.White;
    }
  }
}


