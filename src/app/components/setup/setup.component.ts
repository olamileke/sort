import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  overlayActive:boolean=true;
  formDetails:any={aisle:''};

  constructor(private details:DetailService) { }

  ngOnInit() {

  	if(this.details.with_coordinators) {

  		this.overlayActive=false;
  	}
  }

  addAisle() {

  	alert(this.formDetails.aisle);
  }


  toggleCoordinators() {

  	this.overlayActive=this.details.with_coordinators;
  	this.details.with_coordinators=!this.details.with_coordinators;
  }

  addCoordinator() {

  	alert('leke');
  }

}
