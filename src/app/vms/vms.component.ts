import { Component, OnInit } from '@angular/core';
import { Winvm } from '../data models/winvm';
import { Imacvm } from '../data models/imacvm';
import { VmsService } from '../services/vms-service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'qa-vms',
  templateUrl: './vms.component.html',
  styleUrls: ['./vms.component.css']
})
export class VmsComponent implements OnInit {

  selectedWinVm = new Winvm('', '', '', '', '', '', '');
  selectedMacVm: Imacvm;
  macvms: Imacvm[] = [];
  winvms: Winvm[];
  errorMessage: string;
  submitted = false;
  wvmCollection: AngularFirestoreCollection<Winvm>;
  // wvms: Observable<Winvm[]>;
  wvms: any;
  wvmDoc: AngularFirestoreDocument<Winvm>;
  winVmToEdit: Observable<Winvm>;

  constructor(private _vmsService: VmsService, private afs: AngularFirestore) { }

  ngOnInit(): void {

    this.wvmCollection = this.afs.collection('WinWms');
    // this.wvms = this.wvmCollection.valueChanges();
    this.wvms = this.wvmCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Winvm;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  onWinVmSelect(winvm: Winvm): void {
    this.selectedWinVm = winvm;
  }
  getWinVm(vmID) {
    this.wvmDoc = this.afs.doc('WinWms/' + vmID);
    this.winVmToEdit = this.wvmDoc.valueChanges();
  }
  updateVm(vmID) {
    this.afs.doc('WinWms/' + vmID).update({'wvmCurrentUser': '"Jareczek"' });
  }
  // tslint:disable-next-line:no-trailing-whitespace
  
  onSubmit() {
    this.submitted = true;
  }
  getWindowVms(): void {
    this._vmsService.getWindowVms()
      .subscribe(vms => this.winvms = vms);
  }
  getWinVms(): void {
    this._vmsService.getWinVms()
      .subscribe(vms => this.winvms = vms);
  }
}
