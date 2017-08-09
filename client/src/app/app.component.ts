import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router, private session:SessionService){
  };

  ngOnInit(){
    console.log('current user', this.session);
    this.session.getSession();
  }

  logout(){
    this.session.unsetSession();
    this.router.navigate(['/']);
  }
}
