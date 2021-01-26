import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: LandingPageComponent},
  {path: 'home/homepage', component: HomepageComponent},
  {path: 'home/view', component: ViewRecipeComponent},
  {path: 'home/new', component: NewRecipeComponent},
  {path: 'home/edit', component: EditRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
