import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  users = [{
    "username":"neels",
    "password":"1234"
  },
  {
    "username":"sampath",
    "password":"1234"
  },
  {
    "username":"demouser",
    "password":"1234"
  }];
  constructor(public http: HttpClient) {
    
  }
  
  checkuser(usercredientals):Observable<Object>{

    return new Observable((observer)=>{
      var isvalid = false;
      this.users.forEach(function(user){
        if(usercredientals.username==user.username && usercredientals.password == user.password){
          isvalid = true;
        }
      })

      if(isvalid){
        observer.next({
          "status":"valid"
        })
      }
      else{
        observer.next({
          "status":"invalid"
        })
      }
      observer.complete();
    });
  }

  setloggeduser(user):Boolean{
    window.localStorage.setItem("loggeduser",JSON.stringify(user));
    return true;
  }

  getloggeduser():Object{
    var loggeduser =  window.localStorage.getItem("loggeduser");
    if(loggeduser){
      return JSON.parse(loggeduser);
    }

    return {};
  }
  removeloggeduser():Boolean{
    if(window.localStorage.getItem("loggeduser")){
      window.localStorage.removeItem("loggeduser");
    }
    return true;
  }

}
