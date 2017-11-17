import { Component, OnInit } from '@angular/core';
import { Winvm } from '../data models/winvm';
import { Imacvm } from '../data models/imacvm';
import { VmsService } from '../services/vms-service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'qa-vms',
  templateUrl: './vms.component.html',
  styleUrls: ['./vms.component.css']
})
export class VmsComponent implements OnInit {
  wvmFirestoreCollection: AngularFirestoreCollection<Winvm>;
  wvmFirestoreDocument: AngularFirestoreDocument<Winvm>;
  winVmForm: FormGroup;


  winVmsPulledFromFirestore: any;

  winVmSelected: Winvm;
  winVmUpdated: Winvm;

  constructor(private _vmsService: VmsService, private afs: AngularFirestore, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.winVmForm = this.fb.group({
      wvmID: '',
      wvmName: '',
      wvmCurrentUser: '',
      wvmOS: '',
      wvmDotNet: '',
      wvmBuildInstalled: '',
      wvmComment: '',
    });
  }
  ngOnInit(): void {

    this.wvmFirestoreCollection = this.afs.collection('WinWms');

    this.winVmsPulledFromFirestore = this.wvmFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Winvm;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  onSubmit() {
    this.winVmSelected = this.prepareSaveHero();
  }

  prepareSaveHero(): Winvm {
    const formModel = this.winVmForm.value;
    const saveWinVm: Winvm = {
      wvmID: this.winVmSelected.wvmID,
      wvmName: formModel.wvmName,
      wvmOS: formModel.WvmOS,
      wvmDotNet: formModel.wvmDotNet,
      wvmCurrentUser: formModel.wvmCurrentUser as string,
      wvmBuildInstalled: formModel.wvmBuildInstalled as string,
      wvmComment: formModel.wvmComment as string
    };
    return saveWinVm;
  }

  // When user clicks on a row a VM is assigned to winVmSelected
  getWinVmsFromFirestore(vmID) {
    this.wvmFirestoreDocument = this.afs.doc('WinWms/' + vmID);
    this.winVmSelected = this.wvmFirestoreDocument.valueChanges();
  }
}
