import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecetasComponent } from './recetas/recetas.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecetaDefaultComponent } from './recetas/receta-default/receta-default.component';
import { RecetaDetalleComponent } from './recetas/receta-detalle/receta-detalle.component';
import { RecetaEditarComponent } from './recetas/receta-editar/receta-editar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recetas', pathMatch: 'full' },
  {
    path: 'recetas',
    component: RecetasComponent,
    children: [
      { path: '', component: RecetaDefaultComponent },
      { path: 'nueva', component: RecetaEditarComponent },
      { path: ':id', component: RecetaDetalleComponent },
      { path: ':id/editar', component: RecetaEditarComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
