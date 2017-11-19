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

  wvmFirestoreCollection: AngularFirestoreCollection<Winvm>;
  wvmFirestoreDocument: AngularFirestoreDocument<Winvm>;
  wvms: any;
  winVmToEdit: Observable<Winvm>;
  newWinVm = new Winvm('', '', '', '', '', '', '');

 constructor( private afs: AngularFirestore ) {}

  ngOnInit(): void {
    this.wvmFirestoreCollection = this.afs.collection('WinWms', ref => ref.orderBy('wvmOS', 'asc'));
    this.wvms = this.wvmFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Winvm;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  assignWinVmToEdit(vmID) {
    this.wvmFirestoreDocument = this.afs.doc('WinWms/' + vmID);
    this.winVmToEdit = this.wvmFirestoreDocument.valueChanges();
  }

  updateWinVm(wuserName, wbuild, wcomments) {
    this.wvmFirestoreDocument
      .update({
        wvmCurrentUser: wuserName,
        wvmBuildInstalled: wbuild,
        wvmComment: wcomments
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

  deleteWinVm() {
    this.wvmFirestoreDocument.delete();
  }

}
