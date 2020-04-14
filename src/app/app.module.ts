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
import { KeysPipe } from './pipes/keys.pipe';

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    NavbarComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    app_routing,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
     HeroesService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
