import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core'
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireDatabase} from 'angularfire2/database';


import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './About-us/about-us.component';
import { ContactComponent } from './Contact/contact.component';
import { FooterComponent } from './Footer/footer.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { SignInComponent } from './Account/sign-in/sign-in.component';

import { FormIndividualComponent } from './Account/SignUp/form-individual/form-individual.component';
import { FormEnterpriseComponent } from './Account/SignUp/form-enterprise/form-enterprise.component';



const appRoutes:Routes=[
  //{path:'Sing' , component:SysAuthComponent },
  {path:'Produit',component: ProductsComponent},
  {path:'Contact',component: ContactComponent},
  {path:'AboutUs',component: AboutUsComponent},
  {path:'Home',component: HomeComponent},
  {path:'Account',component: AccountComponent},
];
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
 

    
    
   
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule,FormsModule,
    AngularFireModule.initializeApp(environment.Firebase),
    AngularFireAuthModule,
    RouterModule,
    AngularFireDatabaseModule
  ],

  providers: [AngularFireDatabase ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
