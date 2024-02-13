import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { RecetaDetalleComponent } from './recetas/receta-detalle/receta-detalle.component';
import { RecetaItemComponent } from './recetas/lista-recetas/receta-item/receta-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecetaDefaultComponent } from './recetas/receta-default/receta-default.component';
import { RecetaEditarComponent } from './recetas/receta-editar/receta-editar.component';
import { RecetaService } from './recetas/receta.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    ListaRecetasComponent,
    RecetaDetalleComponent,
    RecetaItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecetaDefaultComponent,
    RecetaEditarComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [provideClientHydration(), ShoppingListService, RecetaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
