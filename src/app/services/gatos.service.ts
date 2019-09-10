import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gatos} from '../model/gatos';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  gatosUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gatos> {
    return this.http.get<Gatos>(`${this.gatosUrl}`);
  }
}
