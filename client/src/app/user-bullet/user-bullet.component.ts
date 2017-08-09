import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-user-bullet',
  templateUrl: './user-bullet.component.html',
  styleUrls: ['./user-bullet.component.scss']
})
export class UserBulletComponent implements OnInit {
  photoURI : string;

  constructor(private router:Router, private session:SessionService) { }

  ngOnInit() {
    // console.log(this.session);
    // this.session.setUserPhoto();
  }

  ngAfterViewInit(){
    console.log(this.session);
    this.session.setUserPhoto();
    this.photoURI = this.session.photoURI;
  }

  logout(){
    this.session.unsetSession();
    this.router.navigate(['/']);
  }
}
