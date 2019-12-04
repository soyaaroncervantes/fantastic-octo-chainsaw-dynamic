import { Component, OnInit } from '@angular/core';
import {IconBaseComponent} from '../base/icon-base.component';

@Component({
  selector: 'app-polymer-icon',
  templateUrl: './polymer-icon.component.html',
  styleUrls: ['./polymer-icon.component.css']
})
export class PolymerIconComponent extends IconBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
