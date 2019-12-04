import { Component, OnInit } from '@angular/core';
import {IconBaseComponent} from '../base/icon-base.component';

@Component({
  selector: 'app-angular-icon',
  templateUrl: './angular-icon.component.html',
  styleUrls: ['./angular-icon.component.css']
})
export class AngularIconComponent extends IconBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
