import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after',
  templateUrl: './after.component.html',
  styleUrls: ['./after.component.css']
})
export class AfterComponent implements OnInit {
	pic1: string;
	pic2: string;
	pic3: string;

	constructor() {
		this.pic1 = '/assets/images/after/pic1.JPG',
		this.pic2 = '/assets/images/after/pic2.JPG',
		this.pic3 = '/assets/images/after/pic3.JPG'
	}

  ngOnInit() {
  }

}
