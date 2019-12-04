import {DynamicComponentInterface} from '../interfaces/dynamic-component.interface';
import {Type} from '@angular/core';
import {SearchDynamicComponentInterface} from '../interfaces/search-dynamic-component.interface';

export class SearchDynamicComponentModel<T> implements SearchDynamicComponentInterface<T> {

  constructor(
    readonly collection: DynamicComponentInterface<Type<T>>,
    readonly id: string
  ) { }

}
