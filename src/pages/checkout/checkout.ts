import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import {HomeProvider} from '../../providers/home/home';
import {PaymentPage} from '../payment/payment';
import { HomePage } from '../../pages/home/home';
import { MycartPage } from '../../pages/mycart/mycart';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
ProcessItems:any=[];
totalamount:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public home:HomeProvider,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    this.ProcessItems=this.home.getCheckOutItems();
    this.totalamount = 0;
    this.ProcessItems.forEach(item=>{
      this.totalamount =this.totalamount + parseFloat(item.price.substring(1));
    })

  }
  pay(){
    this.home.removeCartItems(this.ProcessItems);
    this.app.getRootNav().setRoot( PaymentPage );
  }

  gotohome() {
    this.navCtrl.push(HomePage);
  }

  gotocart() {
    this.navCtrl.push(MycartPage);
  }
 

}
