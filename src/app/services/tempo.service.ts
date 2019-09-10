import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tempo} from '../model/tempo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  tempoUrl = 'http://api.openweathermap.org/data/2.5/weather?id=3450083&APPID=0b3ce2daa36248621c390dfe8ef6750a&units=metric';


  constructor(private http: HttpClient) { }

  getTempo(): Observable<Tempo> {
    return this.http.get<Tempo>(`${this.tempoUrl}`);
  }
}
