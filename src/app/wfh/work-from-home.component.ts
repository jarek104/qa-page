import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'qa-work-from-home',
  templateUrl: './work-from-home.component.html',
  styleUrls: ['./work-from-home.component.css']
})
export class WorkFromHomeComponent implements OnInit {

  isLoggedIn = false;
  currentUsername;
  error: any;
  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
  }

  createUser(username, password) {
    if (username !== '' || password !== '') {
      this.af.auth.createUserWithEmailAndPassword(username, password).then(
        (success) => {
          console.log('User created');
          this.isLoggedIn = true;
          this.af.auth.signInWithEmailAndPassword(username, password).then(
            (succ) => console.log('User logged in')).catch(
            (err) => console.log('Login error: ' + err));
        }).catch (
          (err) => console.log('Signup error: ' + err));
    }
  }

}
