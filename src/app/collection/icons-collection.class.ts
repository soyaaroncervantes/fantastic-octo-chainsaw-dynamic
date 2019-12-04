import {Type} from '@angular/core';

import {IconsEnum} from '../constants/icons.enum';

import {DynamicComponentInterface} from '../interfaces/dynamic-component.interface';

import {AndroidIconComponent} from '../components/icons/android/android-icon.component';
import {IconBaseComponent} from '../components/icons/base/icon-base.component';
import {AngularIconComponent} from '../components/icons/angular/angular-icon.component';
import {DevicesIconComponent} from '../components/icons/devices/devices-icon.component';
import {GifIconComponent} from '../components/icons/gif/gif-icon.component';
import {LabelIconComponent} from '../components/icons/label/label-icon.component';
import {PolymerIconComponent} from '../components/icons/polymer/polymer-icon.component';

export class IconsCollectionClass {

  private readonly iconsCollection: DynamicComponentInterface<Type<IconBaseComponent>>;

  constructor() {
    this.iconsCollection = {};
    this.iconsCollection[ IconsEnum.android ] = AndroidIconComponent;
    this.iconsCollection[ IconsEnum.angular ] = AngularIconComponent;
    this.iconsCollection[ IconsEnum.devices ] = DevicesIconComponent;
    this.iconsCollection[ IconsEnum.gif ]     = GifIconComponent;
    this.iconsCollection[ IconsEnum.label ]   = LabelIconComponent;
    this.iconsCollection[ IconsEnum.polymer ] = PolymerIconComponent;
  }

  get collection(): DynamicComponentInterface<Type<IconBaseComponent>> {
    return this.iconsCollection;
  }

}
