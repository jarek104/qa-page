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

@Component({
  selector: 'qa-vms',
  templateUrl: './vms.component.html',
  styleUrls: ['./vms.component.css']
})
export class VmsComponent implements OnInit {

  // Windows members
  wvmFirestoreCollection: AngularFirestoreCollection<Winvm>;
  wvmFirestoreDocument: AngularFirestoreDocument<Winvm>;
  wvms: any;
  winVmToEdit: Observable<Winvm>;
  newWinVm = new Winvm('', '', '', '', '', '', '');

  // Mac members
  mvmFirestoreCollection: AngularFirestoreCollection<Macvm>;
  mvmFirestoreDocument: AngularFirestoreDocument<Macvm>;
  mvms: any;
  macVmToEdit: Observable<Macvm>;
  newMacVm = new Macvm('', '', '', '', '', '', '', '', '');

  constructor( private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.wvmFirestoreCollection = this.afs.collection('WinWms', ref => ref.orderBy('wvmOS', 'asc'));
    this.wvms = this.wvmFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Winvm;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });

    this.mvmFirestoreCollection = this.afs.collection('MacVms', ref => ref.orderBy('mvmIP', 'asc'));
    this.mvms = this.mvmFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Macvm;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  assignWinVmToEdit(vmID) {
    this.wvmFirestoreDocument = this.afs.doc('WinWms/' + vmID);
    this.winVmToEdit = this.wvmFirestoreDocument.valueChanges();
  }
  assignMacVmToEdit(vmID) {
    this.mvmFirestoreDocument = this.afs.doc('MacVms/' + vmID);
    this.macVmToEdit = this.mvmFirestoreDocument.valueChanges();
  }
  updateWinVm(wuserName, wbuild, wcomments) {
    this.wvmFirestoreDocument
      .update({
        wvmCurrentUser: wuserName,
        wvmBuildInstalled: wbuild,
        wvmComment: wcomments
      });
      console.log(wuserName, wbuild, wcomments);
  }
  updateMacVm(muserName, mcomments) {
    this.mvmFirestoreDocument
      .update({
        mvmCurrentUser: muserName,
        mvmComment: mcomments
      });
  }

  addWinVm() {
    const data = {
      wvmName: this.newWinVm.wvmName,
      wvmCurrentUser: this.newWinVm.wvmCurrentUser,
      wvmOS: this.newWinVm.wvmOS,
      wvmDotNet: this.newWinVm.wvmDotNet,
      wvmBuildInstalled: this.newWinVm.wvmBuildInstalled,
      wvmComment: this.newWinVm.wvmComment
    };
    this.afs.collection('WinWms').add(data);
  }
  addMacVm() {
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
  deleteWinVm() {
    this.wvmFirestoreDocument.delete();
  }
  deleteMacVm() {
    this.mvmFirestoreDocument.delete();
  }
}
