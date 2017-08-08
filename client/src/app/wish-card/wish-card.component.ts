import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { environment } from '../../environments/environment';


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
  photoURI: string;

  constructor(private router: Router, private request:RequestService) { }

  ngOnInit() {
    this.edition = this.wish.editionId;
    this.product = this.edition['productId'];
    this.brand = this.product['brandId'];
    this.user = this.wish.userId;
    this.request.get(`/post/product/one/${this.product['_id']}`)
      .subscribe(res =>
        this.photoURI = `url(${environment.apiEndpoint}/images/${ res.post ? res.post['photoURI'] : 'default'})`);
  }

  goToDetail(){
    console.log('got to detail')
    this.router.navigate([`wish/${this.wish._id}`]);;
  }

}
