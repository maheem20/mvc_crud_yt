import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void { }
}
