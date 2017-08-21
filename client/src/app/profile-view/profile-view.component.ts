import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { RequestService } from '../services/request.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  photoURI: string;
  username: string;
  user: object;
  name: string;

  wishList: Object[] = [];
  postList: Object[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private request: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(param =>{
      if(param['id']){
        this.request.get(`/user/get/${param['id']}`)
        .subscribe(res=>{
          this.username = res.user.username;
          this.name = res.user.username;
          this.user = res.user;

          this.request.get(`/wish/user/${res.user['_id']}`)
            .subscribe(res => {
              this.wishList = res.wishes;
          });
          this.request.get(`/post/user/${res.user['_id']}`)
            .subscribe(res => {
              this.postList = res.posts;
          });
          this.photoURI = `url(${environment.apiEndpoint}/images/${res.user.photoURI || 'default'})`;
        });

      }else{
        this.router.navigate(['/']);
      }
    });
  }

  deleteWish(id){
    this.request.delete(`/wish/remove/${id}`)
      .subscribe(res=>{
          this.wishList = this.wishList.filter(elm => elm['_id'] !== id);
          this.postList = this.postList.filter(elm => elm['wishId']['_id'] !== id);
      });
  }

  goToWish(id){
    this.router.navigate([`/wish/${id}`]);
  }

  deletePost(id){
    this.request.delete(`/post/remove/${id}`)
      .subscribe(res=>{
        this.postList = this.postList.filter(elm => elm['_id'] !== id);
      })
  }

  goToPost(id){
    this.router.navigate([`/post/${id}`]);
  }
}
