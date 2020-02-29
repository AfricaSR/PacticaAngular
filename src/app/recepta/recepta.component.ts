import { Component, OnInit } from '@angular/core';
import {ReceptaModel} from './recepta.model';
import {Recetas} from '../../assets/recetas.json';

@Component({
  selector: 'app-recepta',
  templateUrl: './recepta.component.html',
  styleUrls: ['./recepta.component.css']
})
export class ReceptaComponent implements OnInit {

  public recepta: ReceptaModel;

  constructor() {
    this.recepta = new ReceptaModel();
    this.recepta.title = "Pasta Carbonizada";
    this.recepta.steps = "Hervir la pasta, sofreir el bacon, colar y mezclar el huevo con la nata";
    this.recepta.ingdts = "Espaguetis, nata, huevo, bacon, pimienta, queso parmesano, ajo y sal";
   }

  ngOnInit(): void {
  }

}
