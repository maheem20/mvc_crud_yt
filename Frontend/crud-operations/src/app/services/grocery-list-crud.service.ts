import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  httpOptions = { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  post(item: Partial<Grocery>): Observable<any> {
    return this.http.
      post<Partial<Grocery>>(this.url, item, this.httpOptions)
  }
}
