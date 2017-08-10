import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  photoURI: string;
  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.get(`/post/product/one/${this.product['_id']}`)
      .subscribe(res => {

        this.photoURI = `url(${environment.apiEndpoint}/images/${res.post ? res.post.photoURI : 'default'})`;
      });
  }

}
