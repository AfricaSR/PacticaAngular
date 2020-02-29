import { Component } from '@angular/core';
import { Receta } from './receta';
import { RecetaService} from './receta.service';

@Component({
    selector: 'app-receta',
    template: `<div *ngFor="let r of recetas" class="card" style="width: 18rem;">
    <img class="card-img-top" src="{{r.image}}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title title">{{r.title}}</h5>
        <p class="card-text steps" ng-class="{show: show}">{{r.steps}}</p>
        <button ng-Click="show = true">Ver más</button>
        <p class="card-text ingdts">{{r.ingdts}}</p>
        <a href="#" class="btn btn-primary">Valorar</a>
    </div>
</div>`,
styleUrls: ['./recetas.component.css']
})
export class RecetaComponent {
    recetas: Receta[];

    constructor(recetaService: RecetaService){
        this.recetas = recetaService.getRecetas();
    }
}