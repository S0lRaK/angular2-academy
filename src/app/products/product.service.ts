import { IProduct } from './product.interface';
import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // Import whole library of operators

@Injectable()
export class ProductService {

    constructor(private _http:Http) { }

    private apiEndPoint:string = "http://storerestservice.azurewebsites.net/api/products/";
    private products:IProduct[];

    insertProduct(newProduct:IProduct) : void {
        newProduct.modifiedDate = new Date();

        let header = new Headers();
        header.append('Content-Type', 'application/json');

        this._http
            .post(
                this.apiEndPoint,
                JSON.stringify(newProduct),
                { headers:header })
            .map(res => res.json())
            .subscribe(
                data => this.products.push(data),
                error => console.log(error)
            );
    }
    
    getProducts() : Observable<IProduct[]> {
        if(this.products)
        {
            // Get products from local cache
            return Observable.of(this.products);
        } else {
            // Get products from server
            return this._http
                    .get(this.apiEndPoint)
                    .map(
                        (data:Response) => {
                            this.products = data.json();
                            return this.products;
                        }
                    )
                    .catch(this.handleErrors);
        }
    }

    getProductsById(id:number) : IProduct {
        return this.products.find(p => p.id == id);
        // return getProducts().filter()
    } 

    handleErrors(error:any) {
        let errorMsg:string = error.json().error || "Server error";
        console.log(errorMsg);
        return Observable.throw("Error: " + error);
    }
}