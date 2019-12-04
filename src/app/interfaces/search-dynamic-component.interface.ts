import {DynamicComponentInterface} from './dynamic-component.interface';
import {Type} from '@angular/core';

export interface SearchDynamicComponentInterface<T> {
  collection: DynamicComponentInterface<Type<T>>;
  id: string;
}
