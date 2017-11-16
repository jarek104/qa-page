import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Winvm } from './data models/winvm';


@Component({
  selector: 'qa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'qa';

  wvmCollection: AngularFirestoreCollection<Winvm>;
  wvms: Observable<Winvm[]>;
  constructor(private afs: AngularFirestore) {

  }
  ngOnInit() {
    this.wvmCollection = this.afs.collection('WinWms');
    this.wvms = this.wvmCollection.valueChanges();
  }
}
