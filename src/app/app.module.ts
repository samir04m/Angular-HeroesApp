import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HeroesService } from './services/heroes.service';

import { app_routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    app_routing,
    HttpClientModule
  ],
  providers: [
     HeroesService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
