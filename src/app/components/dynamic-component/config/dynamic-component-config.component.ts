import {Component, ComponentRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {SearchDynamicComponentModel} from '../../../models/search-dynamic-component.model';
import {IconBaseComponent} from '../../icons/base/icon-base.component';
import {CreateComponentDirective} from '../directive/create-component.directive';
import {CreateDynamicComponentService} from '../../../services/component/create-dynamic-component.service';
import {DeleteNodeEventService} from '../../../services/event/delete-node.event.service';

@Component({
  selector: 'app-dynamic-component-config',
  templateUrl: './dynamic-component-config.component.html',
  styleUrls: ['./dynamic-component-config.component.css']
})
export class DynamicComponentConfigComponent implements OnInit, OnChanges {

  @Input() model: SearchDynamicComponentModel<IconBaseComponent>;

  @ViewChild(CreateComponentDirective, { static: true }) appCreateComponent: CreateComponentDirective;

  private componentRef: ComponentRef<IconBaseComponent>;

  constructor(
    private createDynamicComponentService: CreateDynamicComponentService,
    private deleteNodeEventService: DeleteNodeEventService
  ) { }

  ngOnInit() {
    this.listenEvent();
  }

  ngOnChanges(): void {
    this.loadComponent();
  }

  loadComponent() {

    if ( this.componentRef)  { this.componentRef.destroy(); }

    const componentFactory = this.createDynamicComponentService.resolveComponentFactory( this.model );

    this.componentRef = this.appCreateComponent.viewContainerRef.createComponent( componentFactory );

    this.componentRef.instance.svgClasses = 'w-100';

    this.componentRef.changeDetectorRef.detectChanges();

  }

  private listenEvent() {

    this.deleteNodeEventService.event.subscribe( res => {

      if ( res && this.componentRef ) {

        this.componentRef.destroy();
        this.deleteNodeEventService.event.emit( false );

      }

    });

  }

}
