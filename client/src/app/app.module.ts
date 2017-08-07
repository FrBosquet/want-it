import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FileSelectDirective } from "ng2-file-upload";

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
import { EditionSelectorComponent } from './edition-selector/edition-selector.component';
import { EditionCardComponent } from './edition-card/edition-card.component';
import { NewBrandModalComponent } from './new-brand-modal/new-brand-modal.component';
import { NewProductModalComponent } from './new-product-modal/new-product-modal.component';
import { NewEditionModalComponent } from './new-edition-modal/new-edition-modal.component';
import { WishViewComponent } from './wish-view/wish-view.component';
import { StateSelectorComponent } from './state-selector/state-selector.component';
import { NewPostModalComponent } from './new-post-modal/new-post-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'new-wish', component: NewWishViewComponent },
  { path: 'wish/:id', component: WishViewComponent }
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
    EditionSelectorComponent,
    EditionCardComponent,
    NewBrandModalComponent,
    NewProductModalComponent,
    NewEditionModalComponent,
    WishViewComponent,
    StateSelectorComponent,
    NewPostModalComponent,
    FileSelectDirective,
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
