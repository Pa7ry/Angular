import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '**', component: PageNotFoundComponent }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
