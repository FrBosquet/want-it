import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  username:String;
  name:String;

  wishList: Object[];
  postList: Object[];

  constructor(
    private router: Router,
    private session: SessionService,
    private request: RequestService) { }

  ngOnInit() {
    if(this.session.user){
      this.username = this.session.user['username'];
      this.name = this.session.user['name'];
      this.request.get(`/wish/user/${this.session.user['_id']}`)
        .subscribe(res => {
          console.log('wishes', res)
          this.wishList = res.wishes;
      });
      this.request.get(`/post/user/${this.session.user['_id']}`)
        .subscribe(res => {
          console.log('posts', res)
          this.postList = res.posts;
      });
    }else{
      this.router.navigate(['/']);
    }
  }
}
