import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FashionserviceService } from '../service/fashionservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The_Fashion_Report';

  constructor(private _https:HttpClient){}

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
