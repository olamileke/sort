import { Component, OnInit } from '@angular/core';

import { DetailService } from '../../services/detail.service';
import { NotificationService } from '../../services/notification.service';

import { Stewards } from '../steward/stewards';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private detail:DetailService, private notification:NotificationService) { }

  event_name:string=this.detail.event_name;
  date:string;
  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  form:any={steward:''};
  stewards=Stewards;

  postings:any=[];
  assignedCoordinators=[];
  assignedStewards:any=[];
  unAssignedStewards:any=[];
  showUnAssigned:boolean=false;
  sorted:boolean=false;
  showNumStewards:boolean=false;
  requiredStewards:number;

  unassignedClass:any={};

  ngOnInit() {

  	this.date=this.setDate();

    for(let i=0; i < this.detail.aisles.length; i++) {

        let obj={aisle:this.detail.aisles[i],sorts:[]};

        this.postings.push(obj);
    }

    this.requiredStewards=this.postings.length * this.detail.postings_per_aisle * this.detail.stewards_per_posting;
  }


  setDate():string {

  	let dateObj=new Date();

  	let month=this.months[dateObj.getMonth()].slice(0,3);
  	let date=dateObj.getDate();
  	let year=dateObj.getFullYear();

  	return `${month} ${date}, ${year}`;
  }


  addSteward() {

    if(this.sorted) {

        this.notification.showErrorMsg("Sorting completed!");
        return false;
    }

    if(this.form.steward.length < 3) {

        this.notification.showErrorMsg("Must be at least 3 characters", "Error");
        return false;
    }

    this.stewards.push(this.form.steward);
    this.notification.showSuccessMsg('Steward added successfully');
  	this.form.steward='';
  }


  deleteSteward(steward:string) {

      let index=this.stewards.indexOf(steward);
      this.stewards.splice(index,1);
  }


  sort() {

    if(this.sorted) {

        this.notification.showErrorMsg("Sorting completed!");
        return false;
    }


    if(this.detail.aisles.length == 0) {

      this.notification.showErrorMsg('No aisles', 'Incomplete Setup')
      return false;
    }


    if(!this.checkStewardsLength()) {

        return false;
    }


    this.assignStewards();

    if(this.detail.with_coordinators) {

        if(this.detail.aisles.length > this.detail.coordinators.length) {

            this.notification.showErrorMsg('More aisles than coordinators')
            return false;
        }

        if(this.detail.coordinators.length > this.detail.aisles.length) {

            this.notification.showErrorMsg('More coordinators than aisles');
            return false;
        }

        this.assignCoordinators();
    }

     this.unassignedClass={'justify-content-center':this.unAssignedStewards.length <= 5, 'justify-content-start':this.unAssignedStewards.length > 5};
     this.sorted=true;
  }


  checkStewardsLength():boolean {

      if(this.requiredStewards > this.stewards.length) {

          this.notification.showErrorMsg("Stewards are not enough", "Error");
          return false;
      }

      return true;
  }


  assignCoordinators() {

      let i=0;

      while(i < this.detail.coordinators.length) {

          let val=Math.round(Math.random() * (this.detail.coordinators.length - 1))

          if(this.assignedCoordinators.indexOf(this.detail.coordinators[val]) == -1) {

              this.postings[i]['coordinator']=this.detail.coordinators[val];
              this.assignedCoordinators.push(this.detail.coordinators[val]);
              i++;
          }
       }
  }


  assignStewards() {

      for(let i=0; i < this.postings.length ; i++) {

          for(let j=0; j < this.detail.postings_per_aisle; j++) {

              let posting=[];
              let count=0;

              while(count < this.detail.stewards_per_posting) {

                  let val=Math.round(Math.random() * (this.stewards.length -1)) 

                  if(this.assignedStewards.indexOf(this.stewards[val]) == -1) {

                      posting.push(this.stewards[val]);
                      this.assignedStewards.push(val);
                      this.stewards.splice(val,1);
                      count++;
                  }
              }

              this.postings[i].sorts.push(posting)
          }
      }

      this.getUnAssignedStewards();
  }



  getUnAssignedStewards() {

      this.unAssignedStewards=this.stewards;
  }


  toggleShowUnAssigned() {

      this.showUnAssigned=!this.showUnAssigned;
  }


  toggleNumStewards() {

      this.showNumStewards=!this.showNumStewards;
  }


  getStewardCount():number {

      if(!this.sorted) {

          return this.stewards.length;
      }

      return this.stewards.length + this.assignedStewards.length;
  }

}
