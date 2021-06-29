import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  constructor(private http: HttpClient) { }

  public getBooks(searchval): Observable<any> {
    if (searchval) {
      return this.http.get('http://skunkworks.ignitesol.com:8000/books/?mime_type=image&search=' + searchval)
    }
    else {
      return this.http.get('http://skunkworks.ignitesol.com:8000/books/?mime_type=image');
    }
  }
}
