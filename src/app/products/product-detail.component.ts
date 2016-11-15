import { ProductService } from './product.service';
import { FavouriteService } from './favourite.service';
import { IProduct } from './product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    //moduleId: module.id, // Just for system.js
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    @Input() product:IProduct;

    @Output() addedToFavourites = new EventEmitter<IProduct>();

    addToFavourites() {
        this.addedToFavourites.emit(this.product);

        this._favouriteService.addToFavourites(this.product);
    }
    
    constructor(
        private _productService:ProductService,
        private _favouriteService:FavouriteService,
        private _route:ActivatedRoute) { }

    ngOnInit() {
        let id = + this._route.snapshot.params["id"]; // nothing + any = number
        if(id)
            this.product = this._productService.getProductsById(id);
     }
}