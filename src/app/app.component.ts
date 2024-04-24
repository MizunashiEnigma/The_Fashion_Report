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

  callApi() {
    // GET request to the API
    this._https.get<any>('https://ffxivcollect.com/api/fashions/1').subscribe(
      response => {
        this. = response; // Store this data
      },
      error => {
        console.error('Error fetching amiibo data:', error); // Error Handling.
      }
    );
  }
}
