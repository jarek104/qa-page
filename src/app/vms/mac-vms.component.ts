import { Component, OnInit } from '@angular/core';
import { Winvm } from '../data models/winvm';
import { Macvm } from '../data models/macvm';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'qa-mac-vms',
  templateUrl: './mac-vms.component.html',
  styleUrls: ['./mac-vms.component.css']
})
export class MacVmsComponent implements OnInit {

  mvmFirestoreCollection: AngularFirestoreCollection<Macvm>;
  mvmFirestoreDocument: AngularFirestoreDocument<Macvm>;
  mvms: any;
  macVmToEdit: Observable<Macvm>;
  newMacVm = new Macvm('', '', '', '', '', '', '', '', '');

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.mvmFirestoreCollection = this.afs.collection('MacVms', ref => ref.orderBy('mvmIP', 'asc'));
    this.mvms = this.mvmFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Macvm;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }
  assignMacVmToEdit(vmID) {
    this.mvmFirestoreDocument = this.afs.doc('MacVms/' + vmID);
    this.macVmToEdit = this.mvmFirestoreDocument.valueChanges();
  }
  updateMacVm(muserName, mcomments) {
    this.mvmFirestoreDocument
      .update({
        mvmCurrentUser: muserName,
        mvmComment: mcomments
      });
  }
  addMacVm( form: NgForm ) {
    const data = {
      mvmName: this.newMacVm.mvmName,
      mvmCurrentUser: this.newMacVm.mvmCurrentUser,
      mvmIP: this.newMacVm.mvmIP,
      mvmOS: this.newMacVm.mvmOS,
      mvmLocalSafari: this.newMacVm.mvmLocalSafari,
      mvmSafari1: this.newMacVm.mvmSafari1,
      mvmSafari2: this.newMacVm.mvmSafari2,
      mvmComment: this.newMacVm.mvmComment
    };
    this.afs.collection('MacVms').add(data);
  }
  deleteMacVm() {
    this.mvmFirestoreDocument.delete();
  }
}
