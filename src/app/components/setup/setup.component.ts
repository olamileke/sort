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
  @ViewChild('evtName') evtName;
  postings_per_aisle:number;
  stewards_per_posting:number;

  constructor(private details:DetailService, private notification:NotificationService, private renderer:Renderer2) { }

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
      this.postings_per_aisle=this.details.postings_per_aisle;
      this.stewards_per_posting=this.details.stewards_per_posting;
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


  setSelectedNumPostings(num:number) {

      if(num == this.postings_per_aisle) {

          return true;
      }

      return false;
  }


  setNumPostings(num:number) {

      this.postings_per_aisle=num;
      this.details.postings_per_aisle=num;
  }


  setSelectedNumStewards(num:number) {

      if(num == this.stewards_per_posting) {

          return true;
      }

      return false;
  }


  setNumStewards(num:number) {

      this.stewards_per_posting=num;
      this.details.stewards_per_posting=num;
  }


  resetDetails(auto=true) {

      this.details.event_name='ABC Event'
      this.renderer.setProperty(this.evtName.nativeElement, 'value', '');

      this.details.postings_per_aisle=4;
      this.postings_per_aisle=4;

      this.details.stewards_per_posting=2;
      this.stewards_per_posting=2;

      this.details.aisles=[];
      this.aisles=[];

      this.details.coordinators=[];
      this.coordinators=[];
      // this.details.with_coordinators=true;

      this.setValues();

      if(!auto) {

          this.notification.showSuccessMsg("Reset Successful");
      }
  }

}
