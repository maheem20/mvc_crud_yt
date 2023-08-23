import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Grocery } from '../models/Grocery';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class GroceryListCrudService {
  private url = 'http://localhost:3000/groceries';

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

  fetchAll(): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(this.url, { responseType: "json" }).pipe(
      tap(() => console.log('fetched groceries')),
      catchError(this.errorHandlerService.handleError<Grocery[]>('fetchAll', []))
    );
  }
}
