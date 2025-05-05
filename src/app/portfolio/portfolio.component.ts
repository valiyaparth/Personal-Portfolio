import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-portfolio',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  name='';
  email='';
  phone='';
  address='';
  submitted=false;
  showHeading = true;
  qualification=[{school: '', degree:'', year:''}];

  addQualification(){
    this.qualification.push({school: '', degree:'', year:''});
  }

  formSubmit(){
    this.submitted=true;
    this.showHeading = false;
  }

  formEdit(){
    this.submitted=false;
    this.showHeading = true;
  }
}
