import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductDetailPage} from '../../pages/product-detail/product-detail';
/**
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product',
  templateUrl: 'product.html',
  inputs:['product']  ,
  
})
export class ProductComponent {  
  
  constructor(public navCtrl: NavController) {
    
  }
  openproductpage(id:number){
    this.navCtrl.push(ProductDetailPage,{id:id});
  }

}
