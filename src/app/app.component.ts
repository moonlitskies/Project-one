import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  topics = ["HTML", "CSS", "JavaScript"];

  userModel = new User('bimo', 'bimo@gmail.com',98100000, 'HTML', 'morning', true);
}
