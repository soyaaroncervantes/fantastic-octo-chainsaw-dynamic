import {CollectionInterface} from '../interfaces/collection.interface';
import {Type} from '@angular/core';
import {SearchDynamicComponentInterface} from '../interfaces/search-dynamic-component.interface';

export class SearchDynamicComponentModel<T> implements SearchDynamicComponentInterface<T> {

  constructor(
    readonly collection: CollectionInterface<Type<T>>,
    readonly id: number
  ) { }

}
