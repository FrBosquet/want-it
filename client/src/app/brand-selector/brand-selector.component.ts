import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-brand-selector',
  templateUrl: './brand-selector.component.html',
  styleUrls: ['./brand-selector.component.scss']
})
export class BrandSelectorComponent implements OnInit {
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

  change(event){
    this.visibleBrands = this.brandList
      .filter(elm =>{
        return (new RegExp(event, 'i')).test(elm['name']);
      })
      .slice(0,this.maxVisibleBrands)
  }

}
