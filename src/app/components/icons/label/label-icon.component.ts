import { Component, OnInit } from '@angular/core';
import {IconBaseComponent} from '../base/icon-base.component';

@Component({
  selector: 'app-label-icon',
  templateUrl: './label-icon.component.html',
  styleUrls: ['./label-icon.component.css']
})
export class LabelIconComponent extends IconBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
