import { Component } from '@angular/core';
import { DRUG_1, DRUG_2 } from './drugs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drug';
  drug = DRUG_1;
  isObjectChanged = true;
  changeObj() {
    this.drug = this.isObjectChanged ? DRUG_2 : DRUG_1;
    this.isObjectChanged = !this.isObjectChanged;
  }
}
