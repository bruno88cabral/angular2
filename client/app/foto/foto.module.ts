import { NgModule }      from '@angular/core';
import { FotoComponent }   from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
  declarations: [ FotoComponent, FiltroPorTitulo ],
  exports: [FotoComponent]
})
export class FotoModule { }