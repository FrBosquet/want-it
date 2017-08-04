import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ButtonComponent } from './button/button.component';
import { LoginViewComponent } from './login-view/login-view.component';

import { RequestService } from './services/request.service';
import { SessionService } from './services/session.service';
import { WishCardComponent } from './wish-card/wish-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NewWishViewComponent } from './new-wish-view/new-wish-view.component';
import { BrandSelectorComponent } from './brand-selector/brand-selector.component';
import { BrandCardComponent } from './brand-card/brand-card.component';
import { ProductSelectorComponent } from './product-selector/product-selector.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'new-wish', component: NewWishViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ButtonComponent,
    LoginViewComponent,
    WishCardComponent,
    PostCardComponent,
    ProfileViewComponent,
    NewWishViewComponent,
    BrandSelectorComponent,
    BrandCardComponent,
    ProductSelectorComponent,
    ProductCardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RequestService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
