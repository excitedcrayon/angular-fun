import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationFormGroup!: FormGroup;

  ngOnInit(): void {
    this.registrationFormGroup = new FormGroup({
      firstname: new FormControl(null),
      middlename: new FormControl(null),
      lastname: new FormControl(null),
      age: new FormControl(null),
      gender: new FormControl('male'),
    });
  }

  showFormGroupInConsole(){
    console.log(this.registrationFormGroup.value);
  }

}
