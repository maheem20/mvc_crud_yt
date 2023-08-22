import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Grocery } from '../models/Grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryListCrudService {
  private url = 'http://localhost:3000/groceries';

  constructor(private http: HttpClient) { }
}
