import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCreateComponent]'
})
export class CreateComponentDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
