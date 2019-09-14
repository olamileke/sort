import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  event_name:string='Communion Sunday';
  postings_per_aisle=4;
  stewards_per_posting=2;
  aisles:any=[];
  coordinators:any=[];
  with_coordinators:boolean=true;

  from_home:boolean=false;

  constructor() { }
}