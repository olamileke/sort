import { Component, OnInit } from '@angular/core';

import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private detail:DetailService) { }

  event_name:string=this.detail.event_name;
  date:string;
  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  ngOnInit() {

  	this.date=this.setDate();
  }


  setDate():string {

  	let dateObj=new Date();

  	let month=this.months[dateObj.getMonth() - 1].slice(0,3);
  	let date=dateObj.getDate();
  	let year=dateObj.getFullYear();

  	return `${month} ${date}, ${year}`;
  }

}
