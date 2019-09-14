import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-steward',
  templateUrl: './steward.component.html',
  styleUrls: ['./steward.component.css']
})
export class StewardComponent implements OnInit {

  @Input() name:string;
  @Input() sorted:boolean=false;
  @Output() delete=new EventEmitter();
  class:any;

  constructor() { }

  ngOnInit() {

    this.class={'justify-content-between':!this.sorted, 'justify-content-center':this.sorted};
  }


  deleteSteward() {

  	this.delete.emit(this.name);
  }

}
