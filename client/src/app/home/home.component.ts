import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wishes : Object[];
  posts : Object[];

  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.get('/wish')
      .subscribe(res => {
        console.log(res.wishes)
        this.wishes = res.wishes
          .sort((a,b) => a['created_at']-b['created_at'])
          .slice(0,10);
      });
    this.request.get('/post')
      .subscribe(res => {
        console.log(res.posts)
        this.posts = res.posts
          .sort((a,b) => a['created_at']-b['created_at'])
          .slice(0,10);
      });
  }

}
