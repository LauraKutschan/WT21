import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Plan } from './plan';
import { Card } from './card';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  cardUrl = 'http://localhost:2100/yourPlants';
  planUrl = 'http://localhost:2100/yourPlants/:id/plan';
  userUrl = 'http://localhost:2100/users';


  constructor(private http: HttpClient) { }

  //User
  registerNewUser(user: User): Observable<User>{
    return this.http.post<User>(this.userUrl, user);
  }

  checkIfExists(email: string): Observable<User>{
    return this.http.get<User>(this.userUrl + '/' + email);
  }

  loginUser(email: string, password: string): Observable<any>{
    return this.http.post<User>(this.userUrl+ '/login/' + email, { password: password });
  }

  // PLANTS
  getAllCards(): Observable<Card[]>{
    console.log("backend.service aufgerufen");
    return this.http.get<Card[]>(this.cardUrl);
  }

  getOneCard(id: string): Observable<Card>{
    return this.http.get<Card>(this.cardUrl + '/plant/' + id);
  }

  getAllCardsToUser(user_id: string): Observable<Card[]>{
    console.log("backend.service aufgerufen");
    return this.http.get<Card[]>(this.cardUrl + '/' + user_id);
  }

  add(data: Card): Observable<Card> {
    console.log('backendanbindung add aufgerufen: ' + data);
    return this.http.post<Card>(this.cardUrl, data);
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

  getAllPlansToPlant(id: string): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.cardUrl + '/' + id + '/plan');
  }

}
