import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleServiceService {
  private url = 'http://localhost:5000/person';

  constructor(private http: HttpClient) {}

  getPerson(_id: string): Observable<any> {
    return this.http.get(`${this.url}/${_id}`);
  }

  createPerson(person: any): Observable<any> {
    return this.http.post(`${this.url}`, person);
  }

  updatePerson(_id: string, value: any): Observable<any> {
    console.log('updating person method');
    console.log(`${this.url}/${_id}`, value);
    return this.http.put(`${this.url}/${_id}`, value);
  }

  deletePerson(_id: string): Observable<any> {
    return this.http.delete(`${this.url}/${_id}`, { responseType: 'text' });
  }

  getPersonsList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
