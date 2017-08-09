import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/session.service';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post: Object;
  photoURI: string;
  newContent: string;

  constructor(
    private route: ActivatedRoute,
    private session:SessionService,
    private request:RequestService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.request.get(`/post/${params['id']}`)
        .subscribe(res => {
          console.log(res);
          this.post = res.post;
          if(this.post['comments'] === undefined) this.post['comments'] = [];
          this.photoURI = `${environment.apiEndpoint}/images/${res.post.photoURI}`;
        });
    });
  }

  newComment(){
    if(this.newContent !== ''){

      this.post['comments'].push({
        content: this.newContent,
        author: this.session.user['username'],
        authorId: this.session.user['_id']
      })
      this.newContent = '';
      this.request.put(`/post/edit/${this.post['_id']}`,{
        comments: this.post['comments']})
        .subscribe(res => console.log(res));
    }
  }

  goToWish(id){
    this.router.navigate([`/wish/${id}`])
  }

  goToUser(id){
    this.router.navigate([`/profile/${id}`])

  }

}
