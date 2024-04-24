import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css'
})
export class ClothesComponent {
  clothesData:any

  constructor(private _https:HttpClient) { }
  private _APIURL = 'https://ffxivcollect.com/api/armoires?name_en_start=';

  callApi(search:string){
    //GET RESPONSE to API
    this._https.get<any>('https://ffxivcollect.com/api/armoires?name_en_start=' + search).subscribe((
      response) => {
      // Handle API response here
      this.clothesData = response // this data is being stored here
      console.log('API Response:', response);
    }, (error) => {
      // Handle API error here
      console.error('API Error:', error);
    });
  }
}
