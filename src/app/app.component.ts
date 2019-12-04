import {Component, OnInit} from '@angular/core';
import {SearchDynamicComponentModel} from './models/search-dynamic-component.model';
import {IconBaseComponent} from './components/icons/base/icon-base.component';
import {IconsCollectionClass} from './collection/icons-collection.class';
import {DeleteNodeEventService} from './services/event/delete-node.event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private number: number;
  private iconCollection: IconsCollectionClass;

  model: SearchDynamicComponentModel<IconBaseComponent>;

  constructor(
    private deleteNodeEventService: DeleteNodeEventService
  ) {
    this.iconCollection = new IconsCollectionClass();
    this.model = new SearchDynamicComponentModel<IconBaseComponent>( this.iconCollection.collection, 0 );
  }

  ngOnInit(): void { }

  changeNumber() {
    this.number = Math.round( Math.random() * 5 );
    this.model = { ...this.model, id: this.number };
  }

  deleteSvg() {
    this.deleteNodeEventService.event.emit( true );
  }

}
