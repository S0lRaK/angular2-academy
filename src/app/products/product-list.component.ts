import { Observable } from 'rxjs/Observable';
import { ProductService, FavouriteService, IProduct } from './';
//import { IProduct } from './product.interface';

import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';


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

export class ProductListComponent implements OnInit, OnDestroy {
    title:string = "Products";
    products:IProduct[];
    products$:Observable<IProduct[]>;
    selectedProduct:IProduct;
    message:string;
    isLoading:boolean = false;
    sub:Subscription;
    sorter:string = "name";
    asc:boolean = false;

    sortList(propertyName:string) : void {
        if(this.asc)
        {
            propertyName = "-" + propertyName;
        }
        this.sorter = propertyName;
        this.asc = !this.asc;
    }

    ngOnInit() {
        this.isLoading = true;

        //this.products$ = this._productService.getProducts();

        this.sub = this._productService
            .getProducts()
            .subscribe(
                data => this.products = data,
                error => console.log(error),
                () => this.isLoading = false
            );
    }

    ngOnDestroy() {
        if(this.sub)
            this.sub.unsubscribe();
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