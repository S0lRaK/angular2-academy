import { ProductInsertComponent } from './product-insert.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component:ProductListComponent },
    { path: 'insert', component:ProductInsertComponent },
    { path: ':id', component:ProductDetailComponent } 
];

export const productsRouting = RouterModule.forChild(routes); 