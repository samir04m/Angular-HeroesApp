import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

   heroe:Heroe = {
      nombre:"",
      bio:"",
      casa:"Dc"
   }

   nuevo:boolean = false;
   id:string;

   constructor(private _heroesService:HeroesService,
               private router:Router,
               private _activatedRoute:ActivatedRoute) {

      this._activatedRoute.params.subscribe(
         parametros =>  this.id = parametros['id']
      );

   }

   guardar(){
      console.log("this.heroe ", this.heroe);

      if (this.id == "nuevo") {

         this._heroesService.nuevoHeroe(this.heroe).subscribe(data => {
            this.router.navigate(['/heroe',data['name']])
         },
         error=>console.log(error));

      }else{
         this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data => {
            console.log("actualizarHeroe", data)
         },
         error=>console.log(error));
      }

   }

   ngOnInit() {
   }

}
