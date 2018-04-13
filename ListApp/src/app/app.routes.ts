
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list/:id', component: ListComponent },
    { path: 'list-menu', component: ListMenuComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
