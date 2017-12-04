import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { WfhRequest } from '../data models/wfhRequest';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import * as firebase from 'firebase';

@Component({
  selector: 'qa-wfh-user-data',
  templateUrl: './wfh-user-data.component.html',
  styleUrls: ['./wfh-user-data.component.css']
})
export class WfhUserDataComponent implements OnInit {

  @Input() user: Observable<firebase.User>;
  wfhFirestoreCollection: AngularFirestoreCollection<WfhRequest>;
  wfhFirestoreDocument: AngularFirestoreDocument<WfhRequest>;
  requests: any;
  requestToEdit: Observable<WfhRequest>;
  list: any;
  newRequest = new WfhRequest(false, '', '' , '', '');

  constructor(public af: AngularFireAuth, private afs: AngularFirestore) { }

  ngOnInit() {

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

  submitWfhRequest() {
    const data = {
      approved: false,
      dayRequested: this.newRequest.dayRequested,
      dayRequestCreated: Date.now(),
      reason: this.newRequest.reason,
      user: this.user,
    };
    this.afs.collection('WFH').add(data);
    this.resetForm();
    window.open('mailto:jerry.olewniczak@hyland.com?subject=Work From Home request waiting.&body= http://localhost:4200/#/wfh');
  }
  resetForm() {
    this.newRequest.reason = '';
    this.newRequest.dayRequested = '';
  }
 }
