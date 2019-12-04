import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIconComponent } from './angular/angular-icon.component';
import { AndroidIconComponent } from './android/android-icon.component';
import { PolymerIconComponent } from './polymer/polymer-icon.component';
import { GifIconComponent } from './gif/gif-icon.component';
import { LabelIconComponent } from './label/label-icon.component';
import { DevicesIconComponent } from './devices/devices-icon.component';
import { IconBaseComponent } from './base/icon-base.component';



@NgModule({
  declarations: [AngularIconComponent, AndroidIconComponent, PolymerIconComponent, GifIconComponent, LabelIconComponent, DevicesIconComponent, IconBaseComponent],
  imports: [
    CommonModule
  ],
  exports: [AngularIconComponent, AndroidIconComponent, PolymerIconComponent, GifIconComponent, LabelIconComponent, DevicesIconComponent],
  entryComponents: [AngularIconComponent, AndroidIconComponent, PolymerIconComponent, GifIconComponent, LabelIconComponent, DevicesIconComponent]
})
export class IconsModule { }
