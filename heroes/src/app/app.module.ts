import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApi } from './services/in-memory-api';
import { HeroService } from './services/hero.service';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './modules/heroes/heroes-routing.module';



@NgModule({
  declarations: [

   AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApi),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
