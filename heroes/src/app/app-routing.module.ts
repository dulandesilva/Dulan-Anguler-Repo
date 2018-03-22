import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', loadChildren: 'app/modules/heroes/heroes.module#HeroesModule'}
 // {path: '', component: HeroesComponent},
  // {path: 'edit/:id', component: HeroEditComponent},
 //  {path: 'editReactive/:id', component: HeroEditReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
