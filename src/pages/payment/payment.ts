import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import {HomePage} from '../home/home';
import {MycartPage} from '../mycart/mycart'

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  backtohome(){
    this.app.getRootNav().setRoot(HomePage);
  }

  gotohome() {
    this.navCtrl.push(HomePage);
  }

  gotocart() {
    this.navCtrl.push(MycartPage);
  }

}
