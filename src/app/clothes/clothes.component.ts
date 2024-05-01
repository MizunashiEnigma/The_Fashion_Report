import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FashionInterface } from '../../interfaces/fashion-interface';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css'
})
export class ClothesComponent {
  results:FashionInterface[] = [];

  constructor(private _https:HttpClient) { }
  private _APIURL = 'https://ffxivcollect.com/api/armoires?name_en_start=';

  callApi(search:string){
    //GET RESPONSE to API
    this._https.get<any>(this._APIURL + search).subscribe((
      response) => {
      // Handle API response here
      this.results = response.results // this data is being stored here
      console.log('API Response:', response);
    }, (error) => {
      // Handle API error here
      console.error('API Error:', error);
    });
  }
}
