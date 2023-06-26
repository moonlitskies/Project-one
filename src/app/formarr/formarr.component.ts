import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarr',
  templateUrl: './formarr.component.html',
  styleUrls: ['./formarr.component.css']
})
export class FormarrComponent {
  fieldmessage = "Please enter valid input";
  emailForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),  //.pattern(<regx>) for the specific pattern
    password: new FormControl('',[Validators.required, Validators.maxLength(7)]),
  })
  submits(){
    console.warn(this.emailForm.value)
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




