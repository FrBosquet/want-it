import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {
    user = undefined;
    photoURI : string = '';

    constructor(private request: RequestService) {
      // this.getSession();
    }

    setSession( user: Object) {
      this.user = user;
      this.setUserPhoto();
    }

    unsetSession(){
      this.request.get('/user/logout')
      .subscribe(res => {
        this.user = undefined;
        this.setUserPhoto();
      })
    }

    setUserPhoto(){
      console.log('session state',this);
      this.photoURI = this.user ?
      `url(${environment.apiEndpoint}/images/${this.user.photoURI || 'default'})`:
      `url(${environment.apiEndpoint}/images/default)`;
    }

    getSession(){
      this.request.get('/user/getuser')
        .subscribe(res => {
          console.log('get sessio', res);
          this.user = res.user;
        })
    }

}
