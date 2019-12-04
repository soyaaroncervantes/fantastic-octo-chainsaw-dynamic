import { Component, OnInit } from '@angular/core';
import {IconBaseComponent} from '../base/icon-base.component';

@Component({
  selector: 'app-android-icon',
  templateUrl: './android-icon.component.html',
  styleUrls: ['./android-icon.component.css']
})
export class AndroidIconComponent extends IconBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
