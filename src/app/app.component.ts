import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Winvm } from './data models/winvm';
import { Link } from './data models/link';


@Component({
  selector: 'qa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private afs: AngularFirestore) {
  }
  ngOnInit() {
  }
}
