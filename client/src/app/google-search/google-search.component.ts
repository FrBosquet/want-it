import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.scss']
})
export class GoogleSearchComponent implements OnInit {
  @Input() product;
  links: Object[];

  constructor(private request:RequestService) { }

  ngOnInit() {
    console.log('received', this.product);
    const query = `${this.product.brandId.name} ${this.product.name}`;
    this.request.post('/shop', {query})
      .subscribe(res =>{
        console.log(res);
        this.links = res.links;
      })
  }

}
