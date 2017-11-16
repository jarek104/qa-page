import { Component, OnInit } from '@angular/core';
import { Iwinvm } from '../data models/iwinvm';
import { Imacvm } from '../data models/imacvm';
import { VmsService } from '../services/vms-service.service';

@Component({
  selector: 'qa-vms',
  templateUrl: './vms.component.html',
  styleUrls: ['./vms.component.css']
})
export class VmsComponent implements OnInit {

  winwms: Iwinvm[];
  macvms: Imacvm[] = [];
  errorMessage: string;
  constructor(private _wmsService: VmsService) { }

  ngOnInit(): void {
    // this._wmsService.getWindowWms().subscribe (
    //   vms => { this.winwms = vms; },
    //   error => this.errorMessage = <any>error
    this.getWInWms();
    )
  }
  getWInWms(): void {
    this._wmsService.getWinWms()
    .subscribe(vms => this.winwms = vms);
  }
}
