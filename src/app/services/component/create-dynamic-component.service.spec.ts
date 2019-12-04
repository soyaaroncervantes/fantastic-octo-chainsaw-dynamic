import { TestBed } from '@angular/core/testing';

import { CreateDynamicComponentService } from './create-dynamic-component.service';

describe('CreateDynamicComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDynamicComponentService = TestBed.get(CreateDynamicComponentService);
    expect(service).toBeTruthy();
  });
});
