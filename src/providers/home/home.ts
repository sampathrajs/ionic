// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor() {

  }
  
  products = [{
    "id": 100,
    "name": "Nike",
    "desc": "School bag - gray",
    "price": "$300",
    "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg",
    "relevantProduct":
      [
        {
          "id": 104,
          "name": "Reebook",
          "desc": "Bags - black color",
          "price": "$110",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl"
        },
        {
          "id": 105,
          "name": "Nike",
          "desc": "Mountain Climber bag",
          "price": "$210",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg"
        }
      ]
  }, {
    "id": 101,
    "name": "Reebook",
    "desc": "Watches for mens",
    "price": "$12",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71aYczGyLDL._UL1500_.jpg",
    "relevantProduct":
      [
        {
          "id": 103,
          "name": "Espoir",
          "desc": "Watch for stylish men",
          "price": "$30",
          "img": "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg"
        },
        {
          "id": 104,
          "name": "Reebook",
          "desc": "Bags - black color",
          "price": "$110",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl"
        }
      ]
  }, {
    "id": 102,
    "name": "General Electrical",
    "desc": "Chip reader",
    "price": "$30",
    "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
    "relevantProduct":
      [
        {
          id: 108,
          "name": "TM Electricals",
          "desc": "Chip reader ",
          "price": "$25",
          "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
        },
        {
          id: 109,
          "name": "VC Electricals",
          "desc": "Chip reader",
          "price": "$40",
          "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
        }
      ]
  }, {
    "id": 103,
    "name": "Espoir",
    "desc": "Watch for stylish men",
    "price": "$30",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
    "relevantProduct":
      [
        {
          "id": 101,
          "name": "Reebook",
          "desc": "Watches for mens",
          "price": "$12",
          "img": "https://images-na.ssl-images-amazon.com/images/I/71aYczGyLDL._UL1500_.jpg"
        }
      ]
  },
  {
    "id": 104,
    "name": "Reebook",
    "desc": "Bags - black color",
    "price": "$110",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl",
    "relevantProduct":
      [
        {
          "id": 100,
          "name": "Nike",
          "desc": "School bag - gray",
          "price": "$300",
          "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg"
        },
        {
          "id": 105,
          "name": "Nike",
          "desc": "Mountain Climber bag",
          "price": "$210",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg"
        }
      ]
  },
  {
    "id": 105,
    "name": "Nike",
    "desc": "Mountain Climber bag",
    "price": "$210",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg",
    "relevantProduct":
      [
        {
          "id": 104,
          "name": "Reebook",
          "desc": "Bags - black color",
          "price": "$110",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl",
        },
        {
          "id": 100,
          "name": "Nike",
          "desc": "School bag - gray",
          "price": "$300",
          "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg"
        }
      ]
  },
  {
    "id": 106,
    "name": "Aldof",
    "desc": "Causal Tshirts - blue tshirt",
    "price": "$210",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
    "relevantProduct":
      [
        {
          "id": 110,
          "name": "Polo",
          "desc": "Causal Tshirts - blue tshirt",
          "price": "$250",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
        },
        {
          "id": 111,
          "name": "Parx",
          "desc": "Causal Tshirts - blue tshirt",
          "price": "$400",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
        },
        {
          "id": 112,
          "name": "Polo",
          "desc": "Causal Tshirts - blue tshirt",
          "price": "$350",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
        }
      ]
  },
  {
    "id": 107,
    "name": "Britain",
    "desc": "Handbag for womens",
    "price": "$350",
    "img": "https://cdn.shopclues.com/images/thumbnails/37639/320/320/Sn72main1468223963.jpg",
    "relevantProduct":
      [
        {
          "id": 104,
          "name": "Reebook",
          "desc": "Bags - black color",
          "price": "$110",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl",
        },
        {
          "id": 100,
          "name": "Nike",
          "desc": "School bag - gray",
          "price": "$300",
          "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg"
        }, {
          "id": 105,
          "name": "Nike",
          "desc": "Mountain Climber bag",
          "price": "$210",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg"
        }
      ]
  },
  {
    id: 108,
    "name": "TM Electricals",
    "desc": "Chip reader ",
    "price": "$25",
    "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
    "relevantProduct": [
      {
        "name": "VC Electricals",
        "desc": "Chip reader",
        "price": "$40",
        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
      }, {
        "id": 102,
        "name": "General Electrical",
        "desc": "Chip reader",
        "price": "$30",
        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
      }
    ]
  }, {
    id: 109,
    "name": "VC Electricals",
    "desc": "Chip reader",
    "price": "$40",
    "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
    "relevantProduct": [
      {
        "id": 102,
        "name": "General Electrical",
        "desc": "Chip reader",
        "price": "$30",
        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
      },
      {
        id: 108,
        "name": "TM Electricals",
        "desc": "Chip reader ",
        "price": "$25",
        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
      }
    ]
  }, {
    "id": 110,
    "name": "Polo",
    "desc": "Causal Tshirts - blue tshirt",
    "price": "$250",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
    "relevantProduct": [
      {
        "id": 111,
        "name": "Parx",
        "desc": "Causal Tshirts - blue tshirt",
        "price": "$400",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
      },
      {
        "id": 112,
        "name": "Polo",
        "desc": "Causal Tshirts - blue tshirt",
        "price": "$350",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
      }
    ]
  },
  {
    "id": 111,
    "name": "Parx",
    "desc": "Causal Tshirts - blue tshirt",
    "price": "$400",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
    "relevantProduct": [
      {
        "id": 110,
        "name": "Polo",
        "desc": "Causal Tshirts - blue tshirt",
        "price": "$250",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
      },
      {
        "id": 112,
        "name": "Polo",
        "desc": "Causal Tshirts - blue tshirt",
        "price": "$350",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
      }
    ]
  },
  {
    "id": 112,
    "name": "Polo",
    "desc": "Causal Tshirts - blue tshirt",
    "price": "$350",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
    "relevantProduct": [
      {
        "id": 110,
        "name": "Polo",
        "desc": "Causal Tshirts - blue tshirt",
        "price": "$250",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
      }
    ]
  }];

  cartItems: any = [];
  cartItem: any;
  cartID:number = 0;
  public getCount(){
    return this.cartItems.length+1;
  }
  public getProducts() {
    return this.products;
  }
  public getProduct(id: number) {
    return this.products.filter(item => item.id == id);
  }
  public getCartItems() {
    return this.cartItems;
  }
  public getCartID(){
    var currentcartID = this.cartID;
    this.cartID = this.cartID + 1;
    return currentcartID;
  }
  public setCartItems(item: any) {
    item.cart_id = this.getCartID();
    this.cartItems.push(item);
  }
  public updateCart(cart_id: number) {
    this.cartItems.forEach(Item => {
      if (Item.cart_id == cart_id) {
        if (Item.checked) {
          Item.checked = false
        } else {
          Item.checked = true;
        }
      }

    });
  }
  public getCheckOutItems() {
    return this.cartItems.filter(item => item.checked == true)
  }
  public removeCartItems(items: any) {
    items.forEach(item => {
      this.cartItems = this.cartItems.filter(cartitem => cartitem.id != item.id);
    })

  }
  public searchItems(val:any){
    var filterproducts = [];
    if (val && val.trim() !== '') {
      filterproducts = this.products.filter(item=>{
        return item.name.toLowerCase().includes(val.toLowerCase())
      })     
    }

    return filterproducts;
  }

}
