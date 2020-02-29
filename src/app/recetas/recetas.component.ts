import { Component } from '@angular/core';
import { recetaServiceProvider } from './receta.service.provider';


@Component({
  selector: 'app-recetas',
  providers: [recetaServiceProvider],
  template: `<h2>Recetas de cocina</h2>
                <app-receta class="receta"></app-receta>`,
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {}
