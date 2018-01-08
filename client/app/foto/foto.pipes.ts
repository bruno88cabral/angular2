import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

   // tipando todos os parâmetros, inclusive o retorno
    transform(fotos: any, digitado: string): any {

        console.log(fotos); // quem deve ser filtrado
        console.log(digitado); // o que deve ser usado como filtro   
    }
}