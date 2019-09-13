import { Component, OnInit, OnDestroy } from '@angular/core';

import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private details:DetailService) { }

  ngOnInit() {
  }


  ngOnDestroy() {

  	this.details.from_home=true;
  }

}
