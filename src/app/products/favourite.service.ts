import { IProduct } from './product.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class FavouriteService {

    constructor() { }

    private favourites:Set<IProduct> = new Set();

    addToFavourites(product:IProduct) : void {
        this.favourites.add(product);
    }

    get favouritesNb() : number {
        return this.favourites.size;
    }
}