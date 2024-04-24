import { Injectable } from '@angular/core';
import { FashionInterface } from '../interfaces/fashion-interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FashionserviceService {

  fashionData:any
  constructor(private _https:HttpClient) { }
  private _APIURL = 'https://ffxivcollect.com/api/fashions/1';

  callApi(search:string){
    this._https.get<any>('https://ffxivcollect.com/api/fashions/?name=' + search).subscribe((
      response) => {
      // Handle API response here
      this.fashionData = response
      console.log('API Response:', response);
    }, (error) => {
      // Handle API error here
      console.error('API Error:', error);
    });
    // return this._https.get<FashionInterface>(this._APIURL)
    // .pipe(
    //   tap(data =>(console.log('Error' + JSON.stringify(data))))
    // ),
    // catchError(this.handleError)
  };

  private handleError(err:HttpErrorResponse){
    console.log('Fashion Report: ' + err.message)
    return throwError(() => new Error('Fashion Report: ' + err.message))
  }
}
