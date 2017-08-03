import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private session:SessionService){

  };

  requestSession(){
    this.session.getSession();
  }

  logout(){
    this.session.unsetSession();
  }
}
