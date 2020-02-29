import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { RecetasComponent } from './recetas/recetas.component';
import { RecetaComponent } from './recetas/receta.component';


@NgModule({
  declarations: [

    RecetasComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RecetasComponent]
})
export class AppModule { }
