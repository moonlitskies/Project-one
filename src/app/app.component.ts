import { Component } from '@angular/core';
//import { User } from './user';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}
  // title = 'forms';
  // topics = ["HTML", "CSS", "JavaScript"];
  // userModel = new User('bimo', 'bimo@gmail.com',98100000, 'HTML', 'morning', true);

  //Same functionality can be acheived using FormBuilder Service
  // registerForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // })

  //USING FORMBUILDER SERVICE

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email:['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@gmail.com')]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['', [Validators.required]],
    address: this.fb.group({
      city: [''],
      state:[''],
      postalCode: [''],
    }),
    alternateEmail: this.fb.array([])
  })

  get UserName(){
    return this.registerForm.get('username')
  }
  get UserPass(){
    return this.registerForm.get('password')
  }
  get UserEmail(){
    return this.registerForm.get('email')
  }
  get AltEmail(){
    return this.registerForm.get('alternateEmail') as FormArray;
  }
  addAltEmail(){
    this.AltEmail.push(this.fb.control(''));
  }


  //for assigning form values form API and services
  
//   loadData(){
//     this.registerForm.setValue({    //is strict and used only if you have to load data in all fields
//       username: "pato",
//       password: "1234",
//       confirmPassword: "1234",
//       address:{
//         city: 'Biratnagar',
//         state: 'koshi',
//         postalCode:'1234'
//       }
//     })
//   }
// }

loadData(){
  this.registerForm.patchValue({    //used only if you need to load data initially for some specific field
    address:{
        city: 'Biratnagar',
        state: 'koshi',
        postalCode:'1234'
      }
  })
}
}
