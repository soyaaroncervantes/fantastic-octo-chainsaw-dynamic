import {CollectionInterface} from './collection.interface';
import {Type} from '@angular/core';

export interface SearchDynamicComponentInterface<T> {
  collection: CollectionInterface<Type<T>>;
  id: number;
}
