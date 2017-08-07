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
  state:number = 1;

  brandModal    : boolean = true;
  productModal  : boolean = true;
  editionModal  : boolean = true;

  constructor( private router: Router, private request: RequestService, private session:SessionService ) {
    this.selectedBrand = undefined;
  }

  ngOnInit() {
    this.brandModal = false;
    this.productModal = false;
    this.editionModal = false;
  }

  setState(val:number){
    this.state = val;
  }

  selectBrand(brand:Object){
    this.selectedBrand = brand;
    this.brandProducts = [];

    this.request.get(`/product/brand/${brand['_id']}`)
      .subscribe(res=>{
        this.brandProducts = res.products;
      })
  }

  selectProduct(product: Object){
    this.selectedProduct = product;
    this.productEditions = [];

    this.request.get(`/edition/product/${product['_id']}`)
      .subscribe(res=>{
        this.productEditions = res.editions;
      })
  }

  selectEdition(edition: Object){
    this.selectedEdition = edition;
    console.log("Reached here");
  }

  createWish(){
    let editionId = this.selectedEdition['_id'];
    let userId = this.session.user['_id'];

    this.request.post('/wish/create', { editionId, userId, state: this.state})
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
    }else{
      this.selectedBrand = undefined;
    }

    this.brandModal = false;
    this.productModal = false;
    this.editionModal = false;

    console.log(this.brandModal,this.productModal, this.editionModal);
  }
}
