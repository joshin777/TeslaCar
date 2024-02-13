import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8082/api/cars'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  save(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
 update(id: any, data: any): Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, data);
}

delete(id: any): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
}
getCarById(id: number): Observable<any> {
  return this.http.get<any>(`${baseUrl}/${id}`);
}
}