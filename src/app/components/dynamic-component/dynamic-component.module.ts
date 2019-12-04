import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponentDirective } from './directive/create-component.directive';
import { DynamicComponentConfigComponent } from './config/dynamic-component-config.component';

@NgModule({
  declarations: [
    CreateComponentDirective,
    DynamicComponentConfigComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateComponentDirective,
    DynamicComponentConfigComponent
  ]
})
export class DynamicComponentModule { }
