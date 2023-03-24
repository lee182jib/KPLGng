import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class FplService {
  private apiUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/';

  constructor(private http: HttpClient) { }

  getFPL() {
    return this.http.get(this.apiUrl);
  }
}
