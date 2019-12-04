import { Component, OnInit } from '@angular/core';
import {IconBaseComponent} from '../base/icon-base.component';

@Component({
  selector: 'app-gif-icon',
  templateUrl: './gif-icon.component.html',
  styleUrls: ['./gif-icon.component.css']
})
export class GifIconComponent extends IconBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
