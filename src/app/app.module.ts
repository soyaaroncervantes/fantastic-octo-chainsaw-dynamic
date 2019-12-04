import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IconsModule} from './components/icons/icons.module';
import {DynamicComponentModule} from './components/dynamic-component/dynamic-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    DynamicComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
