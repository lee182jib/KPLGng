import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gameweek',
  templateUrl: './gameweek.component.html',
  styleUrls: ['./gameweek.component.css']
})
export class GameweekComponent {
  @Input() week = ''
}
