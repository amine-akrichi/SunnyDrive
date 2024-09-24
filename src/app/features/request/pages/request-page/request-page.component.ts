import { Component } from '@angular/core';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrl: './request-page.component.css'
})
export class RequestPageComponent {
  numberOfDays = 1;
  dailyRate = 60;
  insuranceFee = 200;
  totalFee = 0;
  depositFee = 1000;

  ngOnInit() {
    this.calculateTotalFee();
  }

  calculateTotalFee() {
    this.totalFee = this.dailyRate * this.numberOfDays + this.insuranceFee;
  }

  onAddDay() {
    this.numberOfDays++;
    this.calculateTotalFee();
  }

  onRemoveDay() {
    if (this.numberOfDays > 1) {
      this.numberOfDays--;
      this.calculateTotalFee();
    }
  }



}
