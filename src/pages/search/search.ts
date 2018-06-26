import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MycartPage } from '../mycart/mycart';
import { HomePage } from '../home/home';
import { HomeProvider } from '../../providers/home/home';
import { ProductDetailPage } from '../product-detail/product-detail';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items: any = [];
  searchtext:string

  constructor(public navCtrl: NavController, public navParams: NavParams, public home: HomeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  gotocart() {
    this.navCtrl.push(MycartPage);
  }

  gotohome() {
    this.navCtrl.push(HomePage);
  }
  filterItems(ev: any) {
    let val = ev.target.value;
    this.searchtext = val;
    var searchresults = this.home.searchItems(val);
    if (searchresults) {
      this.items = searchresults
    }

  }
  openProduct(id: any) {
    this.navCtrl.push(ProductDetailPage, { id: id });
  }

}
