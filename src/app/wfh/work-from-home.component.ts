import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qa-work-from-home',
  templateUrl: './work-from-home.component.html',
  styleUrls: ['./work-from-home.component.css']
})
export class WorkFromHomeComponent implements OnInit {

  isLoggedIn = false;

  constructor() { }

  ngOnInit() {
  }
  createUser(username, password) {

  }
}
