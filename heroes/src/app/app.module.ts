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
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './redux/reducers/hero.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './redux/effects/hero.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [

   AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApi),
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({heroState: heroReducer}),
    EffectsModule.forRoot([HeroEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
