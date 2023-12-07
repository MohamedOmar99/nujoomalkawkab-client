import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  headers(): any {
    return new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${localStorage.getItem('token') || ''}`);
  }

  get(url: string) {
    return this.http.get(`${environment.apiUrl}${url}`, { headers: this.headers() });
  }
  post(url: string, body: object) {
    return this.http.post(`${environment.apiUrl}${url}`, body, { headers: this.headers() });
  }

  patch(url: string, body: object) {
    return this.http.patch(`${environment.apiUrl}${url}`, body, { headers: this.headers() });
  }

  put(url: string, body: object) {
    return this.http.put(`${environment.apiUrl}${url}`, body, { headers: this.headers() });
  }

  delete(url: string) {
    return this.http.delete(`${environment.apiUrl}${url}`, { headers: this.headers() });
  }
}
