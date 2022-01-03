import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Plan } from './plan';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  cardUrl = 'http://localhost:2100/yourPlants';
  planUrl = 'http://localhost:2100/yourPlants/plan';

  constructor(private http: HttpClient) { }

  // PLANTS
  getAllPlants(): Observable<Card[]>{
    console.log("backend.service aufgerufen");
    return this.http.get<Card[]>(this.cardUrl);
  }

  getOnePlant(id: string): Observable<Card>{
    return this.http.get<Card>(this.cardUrl + '/' + id);
  }

  add(card: Card): Observable<Card> {
    console.log('backend add aufgerufen: ' + card);
    return this.http.post<Card>(this.cardUrl, card);
  }

  update(id: string, data: Card): Observable<Card> {
    return this.http.patch<Card>(this.cardUrl + '/' + id, data);
  }

  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.cardUrl + '/' + id, {observe: 'response'});
  }


  //PLANS
  getAllPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.planUrl);
  }

  getOnePlan(id: string): Observable<Plan>{
    return this.http.get<Plan>(this.planUrl + '/' + id);
  }
}
