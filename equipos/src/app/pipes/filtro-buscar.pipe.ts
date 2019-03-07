import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../equipo/equipo';

@Pipe({
  name: 'filtroBuscar',
  pure: false
})
export class FiltroBuscarPipe implements PipeTransform {

  transform(equipos: Array<Equipo>, filtro: string): Array<Equipo> {
    filtro = filtro.toLowerCase();
    return equipos.filter( it => it.nombre.toLowerCase().includes(filtro));
  }

}