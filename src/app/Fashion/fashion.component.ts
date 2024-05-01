import { Component } from '@angular/core';
import { FashionInterface } from '../../interfaces/fashion-interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  results:FashionInterface[] = [];

  constructor(private _https:HttpClient) { }
  private _APIURL = 'https://ffxivcollect.com/api/fashions?name_en_start=';

  callApi(search:string){
    //GET RESPONSE to API
      this._https.get<any>(this._APIURL + search).subscribe(
        (response) => {
          this.results = response.results;
          this.processSources()
        },
        (error) => {
          console.log('Error fetching data:', error);
        }
  )};

  processSources() {
    for (let result of this.results) {
      // Access sources array
      const sources = result.sources;
      if (sources && sources.length > 0) {
        // Iterate through sources array
        for (let source of sources) {
          console.log(source);
        }
      }
    }
  }
}
