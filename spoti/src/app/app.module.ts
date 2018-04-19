import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { SpotifyService } from './services/spotify.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DomseguroPipe } from './pipes/domseguro.pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ArtistaComponent } from './components/artista/artista.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SearchComponent,
    PageNotFoundComponent,
    ArtistaComponent,
    DomseguroPipe
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule, FormsModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
