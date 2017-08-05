import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-brand-selector',
  templateUrl: './brand-selector.component.html',
  styleUrls: ['./brand-selector.component.scss']
})
export class BrandSelectorComponent implements OnInit {
  @Output() onSelectBrand = new EventEmitter();

  brandModal: boolean = false;
  brandName: string;
  brandList: Object[];
  visibleBrands: Object[];
  maxVisibleBrands: number = 9;

  showBrandModal(event){
    this.brandModal = true;
  }

  hideBrandModal(event){
    this.brandModal = false;
  }

  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.get('/brand')
      .subscribe(res =>{
        this.brandList = res.brands;
        this.visibleBrands = this.brandList.slice(0,this.maxVisibleBrands);
      })
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

  newBrand(event: Object){
    console.log("Received",event);
    if(event['name']){
      console.log('This brand exist');
      this.brandName = event['name'];
      this.change(event['name']);
    }else{
      this.brandList.push(event['brand']);
      this.brandName = event['brand']['name'];
      this.change(event['brand']['name']);
    }
  }
}
