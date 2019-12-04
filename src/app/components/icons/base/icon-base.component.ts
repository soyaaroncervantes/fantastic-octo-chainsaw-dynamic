import {Component, Input, OnInit} from '@angular/core';
import {SvgBaseComponentInterface} from '../../../interfaces/svg-base-component.interface';

@Component({
  selector: 'app-icon-base',
  templateUrl: './icon-base.component.html',
  styleUrls: ['./icon-base.component.css']
})

export class IconBaseComponent implements OnInit, SvgBaseComponentInterface {

  @Input() mainClasses: string;
  @Input() svgClasses: string;

  constructor() { }

  ngOnInit() {
  }

}
