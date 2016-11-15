import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'products', component:ProductListComponent },
    { path: 'products/:id', component:ProductDetailComponent } 
];

export const productsRouting = RouterModule.forChild(routes); 