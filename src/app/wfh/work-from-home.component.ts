import { Component, OnInit, HostBinding, Output } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';
import { AppUser } from '../data models/appuser';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'qa-work-from-home',
  templateUrl: './work-from-home.component.html',
  styleUrls: ['./work-from-home.component.css']
})
export class WorkFromHomeComponent implements OnInit {
  authState: any = null;
  @Output() currentUser = '';
  error: any;
  loginUser = new AppUser('' , '');

  // loginGroup = new FormGroup({
  //   user: new FormControl(),
  //   password: new FormControl()
  // });

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }
  constructor(public af: AngularFireAuth) {}

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.login();
    }
  }
  ngOnInit() {
    this.af.authState.subscribe((auth) =>
    this.authState = auth
    );
    this.af.authState.subscribe((user: firebase.User) => {
      this.currentUser = user.email;
    });
  }

  createUser(username, password) {
    if (username !== '' || password !== '') {
      this.af.auth
        .createUserWithEmailAndPassword(this.loginUser.username, this.loginUser.password)
        .then(user => {
          this.authState = user;
          this.login(); // Log in
        })
        .catch(err => console.log('Signup error: ' + err));
    }
  }
  login() {
    this.af.auth
      .signInWithEmailAndPassword(this.loginUser.username, this.loginUser.password)
      .then(succ => {
        this.currentUser = this.af.auth.currentUser.email;
        this.error = null;
      })
      .catch(err => {
        console.log('Login error: ' + err);
        this.error = err;
      });
  }

}
