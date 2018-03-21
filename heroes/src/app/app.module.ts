import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApi } from './services/in-memory-api';
import { HeroService } from './services/hero.service';
import { HeroEditComponent } from './hero-edit/hero-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent,
    HeroDetailsComponent,
    HeroEditComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApi),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
