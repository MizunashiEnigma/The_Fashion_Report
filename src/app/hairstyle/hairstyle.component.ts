import { Component } from '@angular/core';
import { FashionInterface } from '../../interfaces/fashion-interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hairstyle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hairstyle.component.html',
  styleUrl: './hairstyle.component.css'
})
export class HairstyleComponent {

  constructor(private _https:HttpClient) { }
  private _APIURL = "https://ffxivcollect.com/api/hairstyles?name_en_start="
    results:FashionInterface[] = [];

    callApi(search:string){
      //GET RESPONSE to API
        this._https.get<any>(this._APIURL + search).subscribe(
          (response) => {
            this.results = response.results;
          },
          (error) => {
            console.log('Error fetching data:', error);
          }
    )};
  }

