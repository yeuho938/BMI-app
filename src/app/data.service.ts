import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: number;
  bmi: string;

  constructor() {
  }

  calculate(height: number, weight: number, male?: boolean, female?: boolean) {
    this.result = weight / (height * height);
    if (male === true) {
      if (this.result < 20) {
        return this.bmi = 'Underweight';
      } else if (20 <= this.result && this.result <= 24.9) {
        return this.bmi = 'Healthy';
      } else if (25 <= this.result && this.result <= 30) {
        return this.bmi = 'Overweight';
      } else {
        return this.bmi = 'Obese';
      }
    } else if (female === true) {
      if (this.result < 18) {
        return this.bmi = 'Underweight';
      } else if (18 <= this.result && this.result <= 23) {
        return this.bmi = 'Healthy';
      } else if (24 <= this.result && this.result <= 30) {
        return this.bmi = 'Overweight';
      } else {
        return this.bmi = 'Obese';
      }
    } else {
      if (this.result < 18.5) {
        return this.bmi = 'Underweight';
      } else if (18.5 <= this.result && this.result <= 24.9) {
        return this.bmi = 'Healthy';
      } else if (20 <= this.result && this.result <= 29.9) {
        return this.bmi = 'Overweight';
      } else {
        return this.bmi = 'Obese';
      }
    }
  }

}
