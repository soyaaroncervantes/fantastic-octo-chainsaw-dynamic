import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteNodeEventService {

  private readonly eventEmitter: EventEmitter<boolean>;

  constructor() {
    this.eventEmitter = new EventEmitter<boolean>();
  }

  get event(): EventEmitter<boolean> {
    return this.eventEmitter;
  }

}
