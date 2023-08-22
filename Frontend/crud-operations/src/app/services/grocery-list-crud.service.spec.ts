import { TestBed } from '@angular/core/testing';

import { GroceryListCrudService } from './grocery-list-crud.service';

describe('GroceryListCrudService', () => {
  let service: GroceryListCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryListCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
