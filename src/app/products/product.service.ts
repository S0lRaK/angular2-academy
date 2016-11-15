import { IProduct } from './product.interface';
import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // Import whole library of operators

@Injectable()
export class ProductService {

    constructor(private _http:Http) { }

    private apiEndPoint:string = "http://storerestservice.azurewebsites.net/api/products/";

    getProducts() : Observable<IProduct[]> {
        return this._http
                    .get(this.apiEndPoint)
                    .map((data:Response) => data.json());
    }
}