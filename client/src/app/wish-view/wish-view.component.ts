import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { SessionService } from '../services/session.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-wish-view',
  templateUrl: './wish-view.component.html',
  styleUrls: ['./wish-view.component.scss']
})
export class WishViewComponent implements OnInit {
  wish: Object;
  edition: Object;
  product: Object;
  brand: Object;
  user: Object ;
  posts: Object[] = [];


  postModal: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private session:SessionService,
    private request:RequestService,
    private router: Router) {

    this.route.params.subscribe(params => {
      this.request.get(`/wish/${params['id']}`)
        .subscribe(res =>{
          this.wish = res.wish;
          if(!this.wish['state']) this.wish['state'] = 1;
          this.edition = this.wish['editionId'];
          this.product = this.edition['productId'];
          this.brand = this.product['brandId'];
          this.user = this.wish['userId'];
          this.request.get(`/post/product/${this.product['_id']}`)
            .subscribe(res => {
              this.posts = res.posts.map( e => ({comment: e.comment, photoURI: `${environment.apiEndpoint}/images/${e.photoURI || 'default'}` })).slice(0, 10);
              console.log(this.posts);
            })
        },
        err => this.router.navigate(['/'])
      );
    });
  }

  ngOnInit() {
  }

  showPostModal(){
    this.postModal = true;
  }

  hidePostModal(){
    this.postModal = false;
  }

  giftThis(){
    this.request.put(`/wish/edit/${this.wish['_id']}`,{
      birthdayLock : true,
      birthdayGifter: this.session.user['_id']
    })
      .subscribe(res => {
        console.log(res);
        this.wish = res.wish;
      })
  }

  ungiftThis(){
    this.request.put(`/wish/edit/${this.wish['_id']}`,{
      birthdayLock : false,
      birthdayGifter: undefined
    })
      .subscribe(res => {
        console.log(res);
        this.wish = res.wish;
      })
  }

  newPost(post){
    this.hidePostModal();
    console.log('Created a new post', post.post);
    this.posts.unshift({
      comment: post.post.comment, photoURI: `${environment.apiEndpoint}/images/${post.post.photoURI}`
    })
  }

  stateChange(event){
    this.request.put(`/wish/edit/${this.wish['_id']}`, {state: event})
      .subscribe(res => {
        this.wish = res.wish;
      })
  }
}
