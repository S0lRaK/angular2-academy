import { ProductService, FavouriteService, IProduct } from './';
//import { IProduct } from './product.interface';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';


// Decorator
@Component(
    {
        selector: 'product-list',
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css'],
        encapsulation: ViewEncapsulation.Emulated,
        providers: [ProductService, FavouriteService]
    }
)

export class ProductListComponent implements OnInit {
    title:string = "Products";
    products:IProduct[];
    selectedProduct:IProduct;
    message:string;

    ngOnInit() {
        this.products = this._productService.getProducts();
    }

    onSelect(product:IProduct) : void {
        this.selectedProduct = product;
    }

    newFavourite(product:IProduct) : void {
        this.message = `Product
                        ${product.name}
                        added to your favourites!
                        `;
    }
    
    get favourites():number {
        return this._favouriteService.favouritesNb;
    }

    constructor(
        private _productService:ProductService,
        private _favouriteService:FavouriteService) {
            
    }
}