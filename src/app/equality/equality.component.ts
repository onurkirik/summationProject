import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css']
})
export class EqualityComponent {

  form = new FormGroup({
    firstNumber: new FormControl(this.generateRandomNumber()),
    secondNumber: new FormControl(this.generateRandomNumber()),
    answer: new FormControl('')
  })

  get firstNumber() {
    return this.form.value.firstNumber;
  }

  get secondNumber() {
    return this.form.value.secondNumber;
  }

  constructor() { }

  ngOnInit(): void { }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

}
