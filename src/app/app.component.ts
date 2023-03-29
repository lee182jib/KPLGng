import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  elements: any;
  gameWeek: string;
  constructor(private http: HttpClient) {}

  //find current gameweek
  findCurrentGameweek = () => {
    for (let event of this.elements.events) {
      if (event.is_current === true) {
        
        this.gameWeek = event.id;
      }
    }
  } 

  //

  ngOnInit() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/';

    this.http.get(proxyUrl + apiUrl).subscribe((data) => {
      this.elements = data;
      
      
      this.findCurrentGameweek();
      console.log(this.gameWeek)
    });
  }
}