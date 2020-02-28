import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReceptaComponent } from './recepta/recepta.component';

@NgModule({
  declarations: [
    ReceptaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ReceptaComponent]
})
export class AppModule { }
