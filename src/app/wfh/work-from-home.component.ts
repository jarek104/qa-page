import { Component, OnInit, HostBinding, Output } from '@angular/core';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'qa-work-from-home',
  templateUrl: './work-from-home.component.html',
  styleUrls: ['./work-from-home.component.css']
})
export class WorkFromHomeComponent implements OnInit {

  isLoggedIn = false;
  @Output() currentUsername = '';
  error: any;
  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
  }

  createUser(username, password) {
    if (username !== '' || password !== '') {
      this.af.auth.createUserWithEmailAndPassword(username, password).then(
        (success) => {
          console.log('User created');
          this.af.auth.signInWithEmailAndPassword(username, password).then(
            (succ) => {
              console.log('User logged in');
              this.currentUsername = this.af.auth.currentUser.email;
              this.isLoggedIn = true;
          }).catch(
            (err) => console.log('Login error: ' + err));
        }).catch (
          (err) => console.log('Signup error: ' + err));
    }
  }
  login(username, password) {
    console.log('Login clicked');
    this.af.auth.signInWithEmailAndPassword(username, password).then(
      (succ) => {
        console.log('User logged in');
        this.isLoggedIn = true;
        this.currentUsername = this.af.auth.currentUser.email;
    }).catch(
      (err) => console.log('Login error: ' + err));
  }

}
