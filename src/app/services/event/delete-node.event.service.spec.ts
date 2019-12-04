import { TestBed } from '@angular/core/testing';

import { DeleteNode.EventService } from './delete-node.event.service';

describe('DeleteNode.EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteNode.EventService = TestBed.get(DeleteNode.EventService);
    expect(service).toBeTruthy();
  });
});
