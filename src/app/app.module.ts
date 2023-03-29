import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { GameweekComponent } from './gameweek/gameweek.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoryComponent,
    NavbarComponent,
    StoriesComponent,
    FooterComponent,
    GameweekComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   