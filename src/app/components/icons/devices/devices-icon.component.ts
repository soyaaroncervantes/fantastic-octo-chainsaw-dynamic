import { Component, OnInit } from '@angular/core';
import {IconBaseComponent} from '../base/icon-base.component';

@Component({
  selector: 'app-devices-icon',
  templateUrl: './devices-icon.component.html',
  styleUrls: ['./devices-icon.component.css']
})
export class DevicesIconComponent extends IconBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
