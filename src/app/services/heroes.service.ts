import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

   heroesURL:string =  "https://heroesapp-656e5.firebaseio.com/heroes.json";

   constructor(private http:HttpClient) { }

   nuevoHeroe(heroe: Heroe) {

      let body = JSON.stringify(heroe);
      let headers = new HttpHeaders({
         'Content-Type': 'application/json'
      });

      return this.http.post(this.heroesURL, body, { headers })
               .pipe(map((resp: Response) => {
                     console.log(resp);
                     return resp;
               }));
   }
}
