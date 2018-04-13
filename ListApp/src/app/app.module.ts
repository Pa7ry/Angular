import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


import { APP_ROUTING } from './app.routes';

import { ListsService } from './services/list.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    ListMenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    APP_ROUTING,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    ListsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export class PizzaPartyAppModule { }
