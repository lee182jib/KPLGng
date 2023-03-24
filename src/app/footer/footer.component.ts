import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isPrimary: boolean = true;
  
  modeToggle() {
    this.isPrimary = !this.isPrimary
    console.log('isPrimary is ' + this.isPrimary)
    }    
  }

