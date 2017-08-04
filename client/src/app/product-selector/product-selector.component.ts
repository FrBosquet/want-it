import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class BrandSelectorComponent {
  productName: string;
  productList: Object[];
  visibleProduct: Object[];
  maxVisibleProducts: number = 9;
  constructor(private request: RequestService) { }

  setBrand(brandId: string) {
    this.request.get(`/product/brand/${brandId}`)
      .subscribe(res =>{
        this.productList = res.products;
        this.visibleProduct = this.productList.slice(0,this.maxVisibleProducts);
      })
  }

  change(event){
    this.visibleProduct = this.productList
      .filter(elm =>{
        return (new RegExp(event, 'i')).test(elm['name']);
      })
      .slice(0,this.maxVisibleProducts)
  }

}
