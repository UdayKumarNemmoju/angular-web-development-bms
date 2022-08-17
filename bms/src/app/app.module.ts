import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { MoviesComponent } from './movies/movies.component';
import { FooterbodyComponent } from './footerbody/footerbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    MoviesComponent,
    FooterbodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
