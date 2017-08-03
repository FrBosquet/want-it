import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wishes : Object[];

  constructor(private request: RequestService) { }

  ngOnInit() {
    this.request.get('/wish')
      .subscribe(res => {
        console.log(res.wishes)
        this.wishes = res.wishes;
      });
  }

}
