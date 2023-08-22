import { Component, OnInit } from '@angular/core';

import { GroceryListCrudService } from 'src/app/services/grocery-list-crud.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent {
  groceries = [
    { id: 1, name: 'Bread' },
    { id: 2, name: 'Milk' },
  ];

  constructor(private groceryListCrudService: GroceryListCrudService) { }

  ngOnInit(): void { }
}
