import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { CheckoutPage } from '../checkout/checkout';
import {HomePage} from '../home/home'
import {SearchPage} from '../search/search'

/**
 * Generated class for the MycartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycart',
  templateUrl: 'mycart.html',
})
export class MycartPage {
  cartItems: any = [];
  check: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public home: HomeProvider) {

  }

  ionViewDidLoad() {
    this.cartItems = this.home.getCartItems();
    console.log(this.cartItems.length);
  }

  updateitem(id: number) {
    this.home.updateCart(id);
  }

  processtoCheckout() {
    this.navCtrl.push(CheckoutPage);
  }

  gotohome() {
    this.navCtrl.push(HomePage);
  }

  gotosearch() {
    this.navCtrl.push(SearchPage);
  }

}
