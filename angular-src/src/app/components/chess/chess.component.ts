import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-chess',
templateUrl: './chess.component.html',
styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

		lat1: number = 36.9914;
        lng1: number = -122.0609;
        zoom1: number = 8;


        lat2: number = 36.9643;
        lng2: number = 122.0189;

constructor() { }

ngOnInit() {

}

}
