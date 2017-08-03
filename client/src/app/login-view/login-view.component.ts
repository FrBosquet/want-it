import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

  login(form){
    console.log(form);
    this.http.get('localhost:3000/user/all')
      .subscribe(res => console.log(res));
  }

}
