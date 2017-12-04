import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qa-wfh-user-data',
  templateUrl: './wfh-user-data.component.html',
  styleUrls: ['./wfh-user-data.component.css']
})
export class WfhUserDataComponent implements OnInit {

  @Input() user: string;

  constructor() { }

  ngOnInit() {
  }

}
