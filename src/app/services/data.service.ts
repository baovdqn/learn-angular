import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../authen/login/login.component';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  api = `${environment.apiURL}/example`;

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get(`${this.api}/listAccount`)
  }

  postData(body): Observable<any> {
    return this.http.post(`${this.api}/listAccount`, body)
  }
}
