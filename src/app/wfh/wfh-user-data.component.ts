import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { WfhRequest } from '../data models/wfhRequest';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'qa-wfh-user-data',
  templateUrl: './wfh-user-data.component.html',
  styleUrls: ['./wfh-user-data.component.css']
})
export class WfhUserDataComponent implements OnInit {

  @Input() user;
  wfhFirestoreCollection: AngularFirestoreCollection<WfhRequest>;
  wfhFirestoreDocument: AngularFirestoreDocument<WfhRequest>;
  requests: any;
  requestToEdit: Observable<WfhRequest>;
  list: any;
  newRequest = new WfhRequest(false, '', '' , '', '');
  isUserAdmin = false;
  adminEmail = 'jerry.olewniczak@hyland.com';
  approvalStatus: string;
  canEdit = false;

  constructor(public af: AngularFireAuth, private afs: AngularFirestore) { }

  ngOnInit() {
    if (this.user === this.adminEmail) {
        this.isUserAdmin = true;
        this.wfhFirestoreCollection = this.afs.collection('WFH', ref => ref.orderBy('user', 'desc'));

          this.requests = this.wfhFirestoreCollection.snapshotChanges().map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as WfhRequest;
              const id = a.payload.doc.id;
              return { id, data };
            });
          });
    } else {
      this.wfhFirestoreCollection = this.afs.collection('WFH', ref => ref.where(
        'user', '==', this.user));

      this.requests = this.wfhFirestoreCollection.snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as WfhRequest;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
    }

  }
   get canUserModify() {
    return this.isUserAdmin;
  }
  assignWFHToEdit(requestID) {
    this.wfhFirestoreDocument = this.afs.doc('WFH/' + requestID);
    this.requestToEdit = this.wfhFirestoreDocument.valueChanges();
    console.log(requestID);
    // this.requestToEdit.subscribe((request: WfhRequest) => {
    //   if (request.approved == null) {
    //     return true;
    //   }
    // });
  }
  signout() {
    this.af.auth.signOut();
  }

  submitWfhRequest() {
    const data = {
      approved: null,
      dayRequested: this.newRequest.dayRequested,
      dayRequestCreated: Date.now(),
      reason: this.newRequest.reason,
      user: this.user,
    };
    this.afs.collection('WFH').add(data);
    this.resetForm();
    const message = 'mailto:' + this.adminEmail + '?subject=Work From Home request waiting.&body= http://localhost:4200/#/wfh';
    window.open(message);
  }
  resetForm() {
    this.newRequest.reason = '';
    this.newRequest.dayRequested = '';
  }
  deleteRequest() {
    this.wfhFirestoreDocument.delete();
  }
  updateRequest(reas, dreq) {
    this.wfhFirestoreDocument
    .update({
      reason: reas,
      dayRequested: dreq
    });
  }
  processWFHReq(value) {
    this.wfhFirestoreDocument
    .update({
      approved: value
    });
    const msg = 'mailto:' + this.adminEmail + '?subject=Your Work From Home request was ' +
      ((value) ? 'approved.' : 'rejected.') + '&body=http://localhost:4200/#/wfh';
      console.log(msg);
    window.open(msg);
  }
  }
