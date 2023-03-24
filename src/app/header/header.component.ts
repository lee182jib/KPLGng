import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  d: Date = new Date();
  formattedDate: string;

  constructor() {
    const pipe = new DatePipe('en-US');
    this.formattedDate = pipe.transform(this.d, 'dd/MM/yyy')
  }
}
