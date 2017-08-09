import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { RequestService } from '../services/request.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user-bullet',
  templateUrl: './user-bullet.component.html',
  styleUrls: ['./user-bullet.component.scss']
})
export class UserBulletComponent implements OnInit {
  photoURI : string;

  constructor(
    private router:Router,
    private session:SessionService,
    private request: RequestService
  ) { }

  ngOnInit(){
    this.request.get('/user/getuser')
      .subscribe(res => {
        console.log('get sessio', res);
        this.photoURI = `url(${environment.apiEndpoint}/images/${res.user.photoURI || 'default'})`;
      });
  }

  logout(){
    this.session.unsetSession();
    this.router.navigate(['/']);
  }
}
