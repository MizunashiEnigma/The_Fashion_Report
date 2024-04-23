import { Injectable } from '@angular/core';
import { FashionInterface } from '../interfaces/fashion-interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FashionserviceService {

  constructor(private _https:HttpClient) { }
  private _APIURL = 'https://ffxivcollect.com/api/fashions/1';

  callApi(){
    this._https.get('https://ffxivcollect.com/api/fashions/1').subscribe((response) => {
      // Handle API response here
      console.log('API Response:', response);
    }, (error) => {
      // Handle API error here
      console.error('API Error:', error);
    });
  }
}
