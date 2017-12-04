import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { WfhRequest } from '../data models/wfhRequest';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'qa-wfh-user-data',
  templateUrl: './wfh-user-data.component.html',
  styleUrls: ['./wfh-user-data.component.css']
})
export class WfhUserDataComponent implements OnInit {

  @Input() user: string;
  wfhFirestoreCollection: AngularFirestoreCollection<WfhRequest>;
  wfhFirestoreDocument: AngularFirestoreDocument<WfhRequest>;
  requests: any;
  requestToEdit: Observable<WfhRequest>;
  list: any;
  query: any;

  constructor(public af: AngularFireAuth, private afs: AngularFirestore) { }

  ngOnInit() {
    // this.query = this.afs.firestore.collection('WFH').where('user', '==', this.user);
    this.wfhFirestoreCollection = this.afs.collection('WFH', ref => ref.where('user', '==', this.user));

    this.requests = this.wfhFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as WfhRequest;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }
  signout() {
    this.af.auth.signOut();
  }
}
