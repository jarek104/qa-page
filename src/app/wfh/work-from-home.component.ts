import { Component, OnInit, HostBinding, Output } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'qa-work-from-home',
  templateUrl: './work-from-home.component.html',
  styleUrls: ['./work-from-home.component.css']
})
export class WorkFromHomeComponent implements OnInit {
  authState: any = null;
  @Output() currentUser = '';
  error: any;

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }
  constructor(public af: AngularFireAuth) {}

  ngOnInit() {
    this.af.authState.subscribe((auth) => this.authState = auth);
    this.af.authState.subscribe((user: firebase.User) => {
      console.log('user is: ' + user.email);
      this.currentUser = user.email;
    });
  }

  createUser(username, password) {
    if (username !== '' || password !== '') {
      this.af.auth
        .createUserWithEmailAndPassword(username, password)
        .then(user => {
          this.authState = user;
          this.login(username, password); // Log in
        })
        .catch(err => console.log('Signup error: ' + err));
    }
  }
  login(username, password) {
    console.log('Login clicked');
    this.af.auth
      .signInWithEmailAndPassword(username, password)
      .then(succ => {
        console.log('User logged in');
        this.currentUser = this.af.auth.currentUser.email;
      })
      .catch(err => console.log('Login error: ' + err));
  }

}
