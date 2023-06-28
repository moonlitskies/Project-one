import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formarr',
  templateUrl: './formarr.component.html',
  styleUrls: ['./formarr.component.css']
})
export class FormarrComponent {
  fieldmessage = "Please enter valid input";
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@gmail.com')]),  //.pattern(<regx>) for the specific pattern
    password: new FormControl('',[Validators.required, Validators.maxLength(7)]),
    skills: new FormArray([])
  })
  submits(){
    console.warn(this.emailForm.value)
  }
  addNew(): FormGroup{
    return new FormGroup({
      skill: new FormControl('', [Validators.required])
      
    }) 
  }
  get email()
  {
  return this.emailForm.get('email')
  }
  get password()
  {
  return this.emailForm.get('password')
  }
}




