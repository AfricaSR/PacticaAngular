import { Injectable } from '@angular/core';
import { Recetas } from './mock-recetas';

@Injectable({
    providedIn: 'root'
})
export class RecetaService {
    constructor(){
        
    }

    getRecetas() {
        return Recetas;
    }
}