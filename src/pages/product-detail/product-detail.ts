import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController,Events } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { HomePage } from '../../pages/home/home';
import { MycartPage } from '../../pages/mycart/mycart';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  id: any;
  selectedproduct: any = {};
  count:any;
  badgeCount:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public home: HomeProvider, public app: App,
     private toastCtrl: ToastController,public events:Events) {
    this.id = this.navParams.get('id');    
    var b=this;        
    this.events.subscribe('badge:changed',(badge)=>{			
			b.badgeCount=badge;
    })
    
  }

  ionViewDidLoad() {
    this.batchDisplay();
    this.selectedproduct = this.home.getProduct(this.id)[0];   
  }

  gotohome() {
    this.navCtrl.push(HomePage);
  }

  gotocart() {
    this.navCtrl.push(MycartPage);
  }

  gotosearch() {
    this.navCtrl.push(SearchPage);
  }

  addItem(selectedproduct: any) {
    selectedproduct.checked = true;

    let toast = this.toastCtrl.create({
      message: 'Item added to cart',
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: "ok"
    });

    toast.present();
    this.home.setCartItems(Object.assign({},selectedproduct));
    this.count= this.home.getCount();
    this.events.publish('badge:changed',this.count);  
  
  }
  batchDisplay(){
    this.badgeCount= this.home.getCount();
  }

  openproductpage(id: number) {
    this.navCtrl.push(ProductDetailPage, { id: id });
  }

}
