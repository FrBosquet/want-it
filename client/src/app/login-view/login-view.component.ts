import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RequestService } from '../services/request.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  loginUsername   : string;
  loginPassword   : string;

  signupUsername  : string;
  signupName      : string;
  signupPassword  : string;
  signupEmail     : string;
  signupPhoto     : string;

  error           : string = ''

  constructor(private router: Router, private request: RequestService, private session: SessionService) { }

  ngOnInit() {
  }

  photoChange(photo){
    console.log('photo')
    this.signupPhoto = photo;
  }

  login(form){
    if(
      !this.loginUsername ||
      !this.loginPassword){
        this.error = "Fulfill all the fields"
        return;
      }
    console.log(form.value);
    this.request.post('/user/login', form.value)
      .subscribe(res => {
          console.log(res.user);
          this.session.setSession(res.user);
          this.router.navigate(['/']);
      }, err => {
        console.log('Nombre de usuario o contraseña incorrectos');
        this.error = 'Incorrect username or password'
      });
  }

  signup(form){
    if(
      !this.signupUsername ||
      !this.signupName ||
      !this.signupPassword ||
      !this.signupEmail ||
      !this.signupPhoto ) {
        this.error = "Fulfill all the fields"
        return;
      }
    const args = Object.assign({}, form.value, {photoURI: this.signupPhoto});
    console.log(args);
    this.request.post('/user/signup',args)
      .subscribe(res => {
          let path = `/photo/save`;
          this.request.post(path,{id: this.signupPhoto})
            .subscribe(saveRes=>{
              console.log('saved the earth', res);
              this.session.setSession(res.user);
              this.router.navigate(['/']);
            });
      }, err => console.log('Error al hacer login'));
  }

}
