import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroEditReactiveComponent } from './hero-edit-reactive/hero-edit-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroDetailsComponent,
    HeroEditComponent,
    HeroEditReactiveComponent
  ]
})
export class HeroesModule { }
