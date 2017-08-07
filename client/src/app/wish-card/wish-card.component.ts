import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private router: Router) { }

  ngOnInit() {
    this.edition = this.wish.editionId;
    this.product = this.edition['productId'];
    this.brand = this.product['brandId'];
    this.user = this.wish.userId;
  }

  goToDetail(){
    console.log('got to detail')
    this.router.navigate([`wish/${this.wish._id}`]);;
  }

}
