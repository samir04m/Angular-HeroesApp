import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

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
      casa:""
   }

   nuevo:boolean = false;
   id:string;

   constructor(private _heroesService:HeroesService,
               private router:Router,
               private _activatedRoute:ActivatedRoute,
               private spinner: NgxSpinnerService) {

      this._activatedRoute.params.subscribe(parametros =>  {
         this.id = parametros['id'];
         if (this.id !== "nuevo"){
            this.spinner.show();
            this._heroesService.getHeroe(this.id).subscribe(heroe => {
               if (heroe){
                  this.heroe = heroe;
               }else{
                  this.router.navigate(['/heroes']);
               }
            });
            this.spinner.hide();
         }
      });

   }

   ngOnInit() {
   }

   guardar(){

      if (this.id == "nuevo") {

         this._heroesService.nuevoHeroe(this.heroe).subscribe(data => {
            Swal.fire({
               icon: 'success',
               title: 'Se han guardado los cambios',
               showConfirmButton: true,
               timer: 2000,
            });
            this.router.navigate(['/heroe',data['name']])
         },
         error=>console.log(error));

      }else{
         this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data => {
            Swal.fire({
               icon: 'success',
               title: 'Se han guardado los cambios',
               showConfirmButton: false,
               timer: 2000
            });
         },
         error=>console.log(error));
      }
   }

   agregarNuevo(forma:NgForm){
      this.router.navigate(['/heroe','nuevo']);
      forma.reset();
   }



}
