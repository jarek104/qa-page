import { Component, OnInit } from '@angular/core';
import { Winvm } from '../data models/winvm';
import { Imacvm } from '../data models/imacvm';
import { VmsService } from '../services/vms-service';

@Component({
  selector: 'qa-vms',
  templateUrl: './vms.component.html',
  styleUrls: ['./vms.component.css']
})
export class VmsComponent implements OnInit {

  selectedWinVm: Winvm;
  selectedMacVm: Imacvm;
  winvms: Winvm[];
  macvms: Imacvm[] = [];
  errorMessage: string;
  constructor(private _vmsService: VmsService) { }

  ngOnInit(): void {
    // this._wmsService.getWindowWms().subscribe (
    //   vms => { this.winwms = vms; },
    //   error => this.errorMessage = <any>error
    this.getWinVms();

  }
  getWindowVms(): void {
    this._vmsService.getWindowVms()
    .subscribe(vms => this.winvms = vms);
  }
  getWinVms(): void {
    this._vmsService.getWinVms()
    .subscribe(vms => this.winvms = vms);
  }
  onWinVmSelect(winvm: Winvm): void {
    this.selectedWinVm = winvm;
  }
}
