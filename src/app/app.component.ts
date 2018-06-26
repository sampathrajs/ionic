import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginComponent} from '../components/login/login';
import {MycartPage} from '../pages/mycart/mycart';

import {AuthProvider} from '../providers/auth/auth'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  loggeduser:any = {};

  badgeCount:number = 0;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth:AuthProvider, public events:Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage},
      {title:'My Cart',component:MycartPage}
    ];
    this.loggeduser = this.auth.getloggeduser();
    var me = this;
   
    events.subscribe('user:changed',function(user){
      me.loggeduser = user;
    })
    
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.auth.removeloggeduser();
    this.loggeduser = {};
    this.nav.setRoot(HomePage);
  }

  gologin(){
    this.nav.setRoot(LoginComponent);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
