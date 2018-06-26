import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

// Main Components
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { AuthProvider } from '../providers/auth/auth';
import { HomeProvider } from '../providers/home/home';

// Components and Pages
import {LoginComponent} from '../components/login/login';
import {ProductComponent} from '../components/product/product';
import { HomePage } from '../pages/home/home';
import {ProductDetailPage} from '../pages/product-detail/product-detail';
import {MycartPage} from '../pages/mycart/mycart';
import {SearchPage} from '../pages/search/search';
import {CheckoutPage} from '../pages/checkout/checkout';
import {PaymentPage} from '../pages/payment/payment';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MycartPage,
    SearchPage,
    ProductDetailPage,
    LoginComponent,
    ProductComponent,
    CheckoutPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MycartPage,
    SearchPage,
    ProductDetailPage,
    LoginComponent,
    ProductComponent,
    CheckoutPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    HomeProvider
  ]
})
export class AppModule {}
