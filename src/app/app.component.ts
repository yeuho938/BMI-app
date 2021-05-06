import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BMI App';
  formValue: FormGroup;
  resultBmi: number;
  commentBmi: string;
  male: true;
  female: true;
  showResult = 'none';

  constructor(private fb: FormBuilder, public dataService: DataService) {
  }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.formValue = this.fb.group({
      male: [''],
      female: [''],
      age: ['', [Validators.pattern('^[0-9]*$')]],
      height: ['', [Validators.required, Validators.pattern('^[0-9.]*$')]],
      weight: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    this.formValue.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    this.dataService.calculate(this.formValue.value.height, this.formValue.value.weight, this.formValue.value.male, this.formValue.value.female);
    this.resultBmi = this.dataService.result;
    this.commentBmi = this.dataService.bmi;
    this.showResult = 'block';
  }
}

