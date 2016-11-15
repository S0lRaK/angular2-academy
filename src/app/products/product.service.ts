import { IProduct } from './product.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor() { }

    getProducts() : IProduct[] {
        return [
            {
                name: 'Trek SSL 2015',
                price: 999.9,
                description: 'Racing bike.',
                discontinued: false,
                modifiedDate: new Date('2016-05-08')
            },
            {
                name: 'City XT 2015',
                price: 659.5,
                description: 'City bike.',
                discontinued: true,
                modifiedDate: new Date('2016-04-09')
            },
            {
                name: 'Cosmic Cobat 2015',
                price: 499.9,
                description: 'Great bike.',
                discontinued: false,
                modifiedDate: new Date('2016-07-12')
            },
            {
                name: 'Hero DTB 2016',
                price: 759,
                description: 'Champion bike.',
                discontinued: false,
                modifiedDate: new Date('2016-06-10')
            },
            {
                name: 'CS-WORKS 2016',
                price: 1299.9,
                description: 'Ultra bike.',
                discontinued: false,
                modifiedDate: new Date('2016-05-17')
            }
        ];
    }
}