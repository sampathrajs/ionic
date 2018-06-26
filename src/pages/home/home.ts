import { Component } from '@angular/core';
import { NavController,Events } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import {MycartPage} from '../mycart/mycart';
import {SearchPage} from '../search/search';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	products = [];
	badgeCount:number=0;	
	constructor(public navCtrl: NavController, public home: HomeProvider,public events:Events) {
		
		this.products = this.home.getProducts();
		 this.badgeCount= this.home.getCount();
		
		
	}

	gotocart(){
		this.navCtrl.push(MycartPage);
	}

	gotosearch(){
		this.navCtrl.push(SearchPage);
	}
}
