import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: 'product-insert.component.html'
})
export class ProductInsertComponent implements OnInit {
    insertForm:FormGroup;
    name:FormControl;
    price:FormControl;
    description:FormControl;

    constructor(
        private _fb:FormBuilder,
        private _productService:ProductService,
        private _router:Router
        ) { }

    ngOnInit() {
        this.name = new FormControl('', [Validators.required]);
        this.price = new FormControl('', [Validators.required]);
        this.description = new FormControl('', [
            Validators.minLength(3),
            Validators.maxLength(50)
            ]);

        this.insertForm = this._fb.group(
            {
                'name':this.name,
                'price':this.price,
                'description':this.description
            }
        )
     }

     onSubmit() {
         console.log(this.insertForm.value);
         this._productService.insertProduct(this.insertForm.value);
         this._router.navigateByUrl("/products");
     }
}