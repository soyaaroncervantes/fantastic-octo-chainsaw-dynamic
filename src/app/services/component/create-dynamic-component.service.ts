import {ComponentFactory, ComponentFactoryResolver, Injectable, Type} from '@angular/core';
import {SearchDynamicComponentModel} from '../../models/search-dynamic-component.model';
import {isNullOrUndefined, isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})

export class CreateDynamicComponentService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  resolveComponentFactory<T>( model: SearchDynamicComponentModel<T> ): ComponentFactory<T> {

    const component = this.searchComponent( model );

    if ( isUndefined( component ) ) {
      return undefined;
    }

    return this.componentFactoryResolver.resolveComponentFactory( component );

  }

  searchComponent<T>( model: SearchDynamicComponentModel<T> ): Type<T> {

    if ( isNullOrUndefined( model.collection[ model.id ] ) ) {

      console.error(`The element you're searching doesn't find or it is null`);
      return undefined;

    }

    return model.collection[ model.id ];

  }

}
