import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  @Input() drugObject: any = {};
  constructor() { }

  ngOnInit(): void {
   
    this.drugObject.fields = this.drugObject.fields.sort((a: any, b: any) => a.order - b.order);
    console.log(this.drugObject.fields);
  }

}
