import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-new-product-modal',
  templateUrl: './new-product-modal.component.html',
  styleUrls: ['./new-product-modal.component.scss']
})
export class NewProductModalComponent implements OnInit {
  @Output() onClickOutside = new EventEmitter();
  @Output() onFinish = new EventEmitter();
  @Input() brandId;

  name: string;
  ref: string;
  tags:  string;

  tagArray: string[];

  constructor(private request: RequestService, private zone:NgZone) { }

  ngOnInit() {
  }

  updateTags(event){
    this.tagArray =
      this.tags
        .split(',')
        .map( e => e.replace(/^\s+|\s+$/g, ''))
        .filter(e => e !== '')
        .map( e => [e[0].toUpperCase(),e.slice(1).toLowerCase()].join(''));
  }

  createProduct(){
    console.log(this.name, this.ref, this.tagArray, this.brandId);
    if(!this.name || !this.ref || !this.tagArray || this.tagArray.length === 0) return;

    this.request.post('/product/name', {name:this.name, brandId: this.brandId})
      .subscribe(res => {
        if( res.product.length !== 0){
          console.log("This product already exists");
          this.onFinish.emit({name: this.name});
          this.onClickOutside.emit();
          return;
        }

        this.request.post('/product/create', {
          brandId: this.brandId,
          name: this.name,
          ref: this.ref,
          tags: this.tagArray
        }).subscribe(res => {
          this.onFinish.emit({product:res.product});
          this.onClickOutside.emit();
        })
      });
  }

  hideProductModal(){
    this.onClickOutside.emit();
  }
}
