import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

   heroes:any[];

   constructor(private _heroesService:HeroesService) {

      this._heroesService.getHeroes().subscribe(heroes => {
         console.log(heroes);
         this.heroes = heroes;
      });
   }

   ngOnInit() {
   }

   borrar(key$:string){
      this._heroesService.borrarHeroe(key$).subscribe(resp => {
         console.log("resp",resp);
         if (resp){
            console.error(resp);
         }else{
            delete this.heroes[key$];
         }
      });
   }

}
