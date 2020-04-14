import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

   heroes:any[];

   constructor(private _heroesService:HeroesService, private spinner: NgxSpinnerService)
   {
      this.spinner.show();
      this._heroesService.getHeroes().subscribe(heroes => {
         this.heroes = heroes;
         this.spinner.hide();
      });
   }

   ngOnInit() {
   }

   borrar(key$:string){
      Swal.fire({
         title: 'Estas seguro?',
         text: "Este elemento se eliminara de forma permanente!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Borrar'
      }).then((result) => {
         if (result.value) {
            this._heroesService.borrarHeroe(key$).subscribe(resp => {
               if (resp){
                  console.error(resp);
               }else{
                  delete this.heroes[key$];
               }
            });
             Swal.fire(
               'Eliminado!',
               'El registro ha sido borrado.',
               'success'
             )
         }
      });

   }

}
