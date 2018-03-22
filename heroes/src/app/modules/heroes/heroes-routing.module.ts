import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroEditReactiveComponent } from './hero-edit-reactive/hero-edit-reactive.component';

const routes: Routes = [
  {path: '', component: HeroesComponent},
   {path: 'hero/:id', component: HeroEditComponent},
   {path: 'heroReactive/:id', component: HeroEditReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
