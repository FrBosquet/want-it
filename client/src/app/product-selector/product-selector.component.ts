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
  @Input() brandId: string;
  @Input() productModal: boolean;
  @Output() onSelectProduct = new EventEmitter();

  productName: string;
  maxVisibleProducts: number = 9;

  constructor(private request: RequestService) { }

  showProductModal(event){
    this.productModal = true;
  }

  hideProductModal(event){
    this.productModal = false;
  }

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

  newProduct(event: Object){
    console.log("Received",event);
    if(event['name']){
      console.log('This brand exist');
      this.productName = event['name'];
      this.change(event['name']);
    }else{
      this.productList.push(event['product']);
      this.productName = event['product']['name'];
      this.change(event['product']['name']);
    }
  }
}
