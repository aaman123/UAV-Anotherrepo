import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker , imageOverlay , layerControls  } from 'leaflet';

declare let L;

@Component({
  selector: 'app-livewindows',
  templateUrl: './livewindows.component.html',
  styleUrls: ['./livewindows.component.css']
})
export class LivewindowsComponent implements OnInit {
  constructor() { }

  map: Map;
  layercontrol: layerControls;

  mapOptions = {
    center: [22.9951692846931, 72.5156190462574],
    zoom: 18,
  };

 // map = new L.map('map', this.mapOptions);

  imageURL = [ 'https://i.postimg.cc/W4gmCmp4/DJI-0588.jpg',
    'https://i.postimg.cc/zGLFSZ9K/DJI-0589.jpg',
    'https://i.postimg.cc/P5BzSVjc/DJI-0590.jpg',
    'https://i.postimg.cc/Twxj6yhJ/DJI-0591.jpg',
    'https://i.postimg.cc/0QCY28wR/DJI-0592.jpg',
    'https://i.postimg.cc/vTHW4pr1/DJI-0593.jpg',
    'https://i.postimg.cc/C5Pbkm7c/DJI-0594.jpg',
    'https://i.postimg.cc/44B6DxGp/DJI-0595.jpg',
    'https://i.postimg.cc/vHKWm2cB/DJI-0596.jpg',
    'https://i.postimg.cc/c4CR0G12/DJI-0597.jpg',
    ] ;
 // imageURL1 = 'http://i.postimg.cc/NfvtwBxf/DJI-0589.jpg';
  // imageURL2 = 'https://i.postimg.cc/T3Cvmmvp/DJI-0590.jpg';
  // imageURL3 = 'https://i.postimg.cc/QCL2sJ1n/DJI-0597.jpg';

  imagebounds = [[[  22.99554272	, 72.51561905] , [  22.99516928	, 72.51611695]], [ 22.99554872	, 72.51570605],
  [22.99517528	 , 72.51620395 ] , [  22.99555472	, 72.51581205 ] , [ 22.99518128 , 	72.51630995 ] ,
  [ 22.99533072	, 72.51576405 ] , [ 22.99495728	 , 72.51626195  ]];
  // imagebounds1 = [[ 22.99554872	, 72.51570605  ] , [22.99517528	 , 72.51620395  ] ];
  // imagebounds2 = [[ 22.99555472	, 72.51581205] , [22.99518128 , 	72.51630995] ];
  // imagebounds3 = [[22.99533072	, 72.51576405  ] , [22.99495728	 , 72.51626195  ] ];

  latlng = [22.995884 , 72.516012];

  overlay: imageOverlay;
  overlay1: imageOverlay;
  overlay2: imageOverlay;
  overlay3: imageOverlay;


  ngOnInit() {
      this.map = new L.Map('mapId').setView(new L.latLng(22.995884, 72.516012), 18);
      tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        attribution: 'vartronics.com © ionic LeafLet',
      },
     ).addTo(this.map);

      this.overlay = new L.imageOverlay(this.imageURL , this.imagebounds ).addTo(this.map);
  //    this.overlay1 = new L.imageOverlay(this.imageURL1 , this.imagebounds1).addTo(this.map);
   //   this.overlay2 = new L.imageOverlay(this.imageURL2 , this.imagebounds2).addTo(this.map);




    }
  }



