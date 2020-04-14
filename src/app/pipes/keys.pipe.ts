import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

   transform(listaObjetos: any): any {
      let keys = [];
      for (let key in listaObjetos ){
         keys.push(key)
      }
      return keys;
   }

}
