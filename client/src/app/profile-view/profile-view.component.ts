import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  username:String;
  name:String;

  constructor(private router: Router, private session:SessionService) { }

  ngOnInit() {
    if(this.session.user){
      this.username = this.session.user['username'];
      this.name = this.session.user['name'];
    }else{
      this.router.navigate(['/']);
    }
  }

}
