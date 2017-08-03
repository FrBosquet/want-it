import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss']
})
export class WishCardComponent implements OnInit {
  @Input() wish;
  brand:Object;
  product:Object;
  edition:Object;
  user:Object;

  constructor() { }

  ngOnInit() {
    this.edition = this.wish.editionId;
    this.product = this.edition['productId'];
    this.brand = this.product['brandId'];
    this.user = this.wish.userId;
  }

}
