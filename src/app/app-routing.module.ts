import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }
  // {
  //   path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  //   // tslint:disable-next-line: no-unused-expression
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
