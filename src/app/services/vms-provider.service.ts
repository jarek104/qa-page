import { Injectable, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Winvm } from '../data models/winvm';

@Injectable()
export class VmsProviderService implements OnInit{

  wvmFirestoreCollection: AngularFirestoreCollection<Winvm>;
  wvmFirestoreDocument: AngularFirestoreDocument<Winvm>;
  wvms: any;
  wVmId: string;
  winVmToEdit: Observable<Winvm>;
  newWinVm = new Winvm('', '', '', '', '', '', '');

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

  constructor(private afs: AngularFirestore) { }

}
