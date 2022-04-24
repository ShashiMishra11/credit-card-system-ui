import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http:HttpClient) { }

  addCreditCard(request:any): Observable<any> {
    let restAPIPath = "http://localhost:9090/credit-card/add";
    return this.http.post(restAPIPath, request);
  }

  getAllCreditCardDetails(): Observable<any> {
    let restAPIPath = "http://localhost:9090/credit-card/all-cards";
    return this.http.get(restAPIPath);
  }

}
