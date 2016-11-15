import { FavouriteService } from './favourite.service';
import { ProductService } from './product.service';
import { productsRouting } from './products.routing';
import { FormsModule } from '@angular/forms';
import { OrderBy } from './orderBy.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        productsRouting
        ],
    exports: [
        ProductListComponent
        ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        OrderBy
    ],
    providers: [
        ProductService,
        FavouriteService
    ]
})

export class ProductsModule { }