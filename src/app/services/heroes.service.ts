import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

   heroesURL:string =  "https://heroesapp-656e5.firebaseio.com/heroes.json";
   heroeURL:string =  "https://heroesapp-656e5.firebaseio.com/heroes/";

   constructor(private http:HttpClient) { }

   nuevoHeroe(heroe: Heroe) {
      let body = JSON.stringify(heroe);
      let headers = new HttpHeaders({
         'Content-Type': 'application/json'
      });

      return this.http.post(this.heroesURL, body, { headers }).pipe(map((resp: Response) => {
         console.log("service nuevoHeroe ", resp);
         return resp;
      }));
   }

   actualizarHeroe(heroe: Heroe, key$:string) {
      let body = JSON.stringify(heroe);
      let headers = new HttpHeaders({
         'Content-Type': 'application/json'
      });
      let url = `${ this.heroeURL }/${ key$ }.json`

      return this.http.put(url, body, { headers }).pipe(map((resp: Response) => {
         console.log("service actualizarHeroe ", resp);
         return resp;
      }));
   }

   getHeroe(key$:string){
      let headers = new HttpHeaders({
         'Content-Type': 'application/json'
      });
      let url = `${ this.heroeURL }/${ key$ }.json`;

      return this.http.get(url, { headers }).pipe( map((resp: Heroe) => resp ) );
   }
}
