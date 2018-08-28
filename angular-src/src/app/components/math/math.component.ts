import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
  geometry: string;
  algii: string;
  trig: string;
  phys: string;
  chem: string;
  sat: string;

  constructor() {
    this.geometry = '/assets/images/math/geometry.png',
    this.algii = '/assets/images/math/algii.png',
    this.trig = '/assets/images/math/trig.png',
    this.phys = '/assets/images/math/phys.png',
    this.chem = '/assets/images/math/chem.png',
    this.sat = '/assets/images/math/sat.png'
  }

  ngOnInit() {
  }

}
