import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  overlayActive:boolean=true;
  aisles:any=[];
  coordinators:any=[];
  form:any={name:'',aisle:'', coordinator:''};
  showAisles:boolean=false;
  showCoordinators:boolean=false;

  constructor(private details:DetailService, private notification:NotificationService) { }

  ngOnInit() {

    if(this.details.from_home) {

        this.resetDetails();
    }

    this.setValues();        
  }


  setValues() {

      if(this.details.with_coordinators) {

          this.overlayActive=false;
      }

      this.aisles=this.details.aisles;
      this.coordinators=this.details.coordinators;
  }


  setEventName(name:string) {

      this.details.event_name=name;
  }


  addAisle() {

  	if(this.form.aisle.length < 3) {

  		this.notification.showErrorMsg("Must be at least 3 characters", "Error");
  		return false;
  	}

  	this.details.aisles.push(this.form.aisle);
  	this.form.aisle='';
  	this.notification.showSuccessMsg("Aisle added successfully");
  }


  toggleCoordinators() {

  	this.overlayActive=this.details.with_coordinators;
  	this.details.with_coordinators=!this.details.with_coordinators;
  }


  addCoordinator() {

  	if(this.form.coordinator.length < 3) {

  		this.notification.showErrorMsg("Must be at least three characters", "Error");
  		return false;
  	}

  	this.details.coordinators.push(this.form.coordinator);
  	this.form.coordinator='';
  	this.notification.showSuccessMsg('Coordinator added successfully');
  }


  toggleViewAisles() {

      this.showAisles=!this.showAisles;
  }


  toggleViewCoordinators() {

      this.showCoordinators=!this.showCoordinators;
  }


  setNumPostings(num:number) {

      alert(num);
      this.details.postings_per_aisle=num;
  }


  setNumStewards(num:number) {

      alert(num);
      this.details.stewards_per_posting=num;
  }


  resetDetails() {

      this.details.event_name='ABC Event'
      this.details.postings_per_aisle=4;
      this.details.stewards_per_posting=2;
      this.details.aisles=[];
      this.details.coordinators=[];
      // this.details.with_coordinators:boolean=true;
  }

}
