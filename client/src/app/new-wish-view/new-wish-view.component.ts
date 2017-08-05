import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from '../services/request.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-wish-view',
  templateUrl: './new-wish-view.component.html',
  styleUrls: ['./new-wish-view.component.scss']
})
export class NewWishViewComponent implements OnInit {
  @ViewChild('productSelector') productSelector;
  selectedBrand:Object;
  brandProducts:Object[] = [];
  selectedProduct:Object;
  productEditions:Object[] = [];
  selectedEdition:Object;

  brandModal: boolean = false;
  productModal: boolean = false;
  editionModal: boolean = false;

  constructor( private router: Router, private request: RequestService, private session:SessionService ) {
    this.selectedBrand = undefined;
  }

  ngOnInit() {
  }

  selectBrand(brand:Object){
    this.selectedBrand = brand;
    this.request.get(`/product/brand/${brand['_id']}`)
      .subscribe(res=>{
        this.brandProducts = res.products;
      })
  }

  selectProduct(product: Object){
    this.selectedProduct = product;
    this.request.get(`/edition/product/${product['_id']}`)
      .subscribe(res=>{
        this.productEditions = res.editions;
      })
  }

  selectEdition(edition: Object){
    this.selectedEdition = edition;
  }

  showBrandModal(event){
    this.brandModal = true;
  }

  hideBrandModal(event){
    this.brandModal = false;
  }

  createWish(){
    let editionId = this.selectedEdition['_id'];
    let userId = this.session.user['_id'];

    this.request.post('/wish/create', { editionId, userId })
      .subscribe(res=>{
        console.log(res);
        this.router.navigate(['/']);
      })
  }

  reset(){
    if(this.selectedEdition ){
      this.selectedEdition = undefined;
    }else if(this.selectedProduct){
      this.selectedProduct = undefined;
      this.productEditions = [];
    }else{
      this.selectedBrand = undefined;
      this.brandProducts = [];
    }
  }
}
