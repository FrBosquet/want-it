import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent {
  @Input() productList: Object[];
  @Input() visibleProduct: Object[];
  @Output() onSelectProduct = new EventEmitter();
  productName: string;
  maxVisibleProducts: number = 9;

  constructor(private request: RequestService) { }

  change(event){
    this.visibleProduct = this.productList
      .filter(elm =>{
        return (new RegExp(event, 'i')).test(elm['name']);
      })
      .slice(0,this.maxVisibleProducts)
      console.log(this.visibleProduct);
  }

  select(product: Object){
    this.onSelectProduct.emit(product);
  }
}
