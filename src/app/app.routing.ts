import { ContactComponent } from './common/contact.component';
import { HomeComponent } from './common/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent } // For any other
];

export const routing = RouterModule.forRoot(routes);