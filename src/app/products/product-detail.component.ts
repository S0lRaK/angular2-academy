import { FavouriteService } from './favourite.service';
import { IProduct } from './product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    
    constructor(private _favouriteService:FavouriteService) { }

    ngOnInit() { }
}