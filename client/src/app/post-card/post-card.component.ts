import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post;
  comment:String;
  brand:Object;
  product:Object;
  edition:Object;
  user:Object;
  photoURI:string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.edition = this.post.wishId.editionId;
    this.product = this.edition['productId'];
    this.brand = this.product['brandId'];
    this.user = this.post.wishId.userId;
    this.comment = this.post.comment;
    this.photoURI = `url(${environment.apiEndpoint}/images/${this.post.photoURI || 'default'})`
  }

  goToDetail(){
    console.log('got to detail')
    this.router.navigate([`post/${this.post._id}`]);;
  }
}
