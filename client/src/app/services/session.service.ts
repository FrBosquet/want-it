import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable()
export class SessionService {
    user:Object = undefined;

    constructor(private request: RequestService) {
      this.getSession();
    }

    setSession( user: Object) {
      this.user = user;
    }

    unsetSession(){
      this.request.get('/user/logout')
      .subscribe(res => {
        // console.log(res);
        this.user = undefined;
      })
    }

    getSession(){
      this.request.get('/user/getuser')
        .subscribe(res => {
          // console.log(res);
          this.user = res.user;
        })
    }

}
