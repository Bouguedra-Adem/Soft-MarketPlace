import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import {ProfileService} from './Services/profile.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {DBFunctionsService} from './Services/db-functions.service';
import {HomeComponent} from './Home/home.component';
import {AboutUsComponent} from './About-us/about-us.component';
import {ContactComponent} from './Contact/contact.component';
import {FooterComponent} from './Footer/footer.component';
import {AccountComponent} from './Account/account.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './products/product/product.component';
import {NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';

import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { SignInComponent } from './Account/sign-in/sign-in.component';
import {DataService} from './Services/data.service';
import { FormIndividualComponent } from './Account/SignUp/form-individual/form-individual.component';
import { FormEnterpriseComponent } from './Account/SignUp/form-enterprise/form-enterprise.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileUserNavbarComponent } from './profile-user/profile-user-navbar/profile-user-navbar.component';
import { SlideImgComponent } from './slide-img/slide-img.component';
import { CreatProductComponent } from './products/creat-product/creat-product.component';
import { from } from 'rxjs/internal/observable/from';
import{AuthService}from './Services/auth-functions.service';







const appRoutes: Routes = [
  /*{path:'Sing' , component:SysAuthComponent },*/
  {path: 'Produit', component: ProductsComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'AboutUs', component: AboutUsComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Account', component: AccountComponent},
  {path: 'CreatProd', component: CreatProductComponent},
  {path: 'Profile', component: ProfileUserComponent},
  {path: 'ProductDetaill', component: DetailProductComponent}


];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,

    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    AccountComponent,
    ProductsComponent,
    ProductComponent,
    DetailProductComponent,
    SignInComponent,
    ProductComponent,
    FormIndividualComponent,
    FormEnterpriseComponent,
    ProfileUserComponent,
    ProfileUserNavbarComponent,
    SlideImgComponent,
    CreatProductComponent,
    NavbarComponent 

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule,
    AngularFireModule.initializeApp(environment.Firebase),
    AngularFireAuthModule,
    RouterModule,
    AngularFireDatabaseModule,
    /*Ng2PageScrollModule*/
  ],

  providers: [AngularFireDatabase,DBFunctionsService,ProfileService,DataService ,AuthService ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
