import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-brand-selector',
  templateUrl: './brand-selector.component.html',
  styleUrls: ['./brand-selector.component.scss']
})
export class BrandSelectorComponent implements OnInit {
  @Output() onSelectBrand = new EventEmitter();
  @Output() onRequestBrandModal = new EventEmitter();
  brandName: string;
  brandList: Object[];
  visibleBrands: Object[];
  maxVisibleBrands: number = 9;

  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.get('/brand')
      .subscribe(res =>{
        this.brandList = res.brands;
        this.visibleBrands = this.brandList.slice(0,this.maxVisibleBrands);
      })
  }

  requestBrandModal(){
    this.onRequestBrandModal.emit(true);
  }

  change(event){
    this.visibleBrands = this.brandList
      .filter(elm =>{
        return (new RegExp(event, 'i')).test(elm['name']);
      })
      .slice(0,this.maxVisibleBrands)
  }

  select(brand:Object){
    this.onSelectBrand.emit(brand);
  }
}
