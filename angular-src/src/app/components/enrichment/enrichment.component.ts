import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrichment',
  templateUrl: './enrichment.component.html',
  styleUrls: ['./enrichment.component.css']
})
export class EnrichmentComponent implements OnInit {
  scroll(el) {
    el.scrollIntoView();
  }
  chesspng: string;
  competitivepng: string;
  intropng: string;


  constructor() {
    this.chesspng ='assets/images/enrichment/chess.png',
    this.competitivepng = 'assets/images/enrichment/competitive.png',
    this.intropng = 'assets/images/enrichment/intro.png'
  }

  ngOnInit() {
  }

}
