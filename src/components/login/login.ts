import { Component } from '@angular/core';
import { NavController,App,Events } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {AuthProvider} from '../../providers/auth/auth'
import {FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  loginForm = new FormGroup ({
    username: new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  });

  message:String;


  constructor(public navCtrl: NavController,public app:App,public auth:AuthProvider, public events:Events) {
    
  }

  checkuser(){
    var isrequirederror = this.loginForm.get('username').errors && (this.loginForm.get('username').errors.required || this.loginForm.get('password').errors.required);
    if(!isrequirederror){
      var user = {
        "username":this.loginForm.value.username,
        "password":this.loginForm.value.password
      };
      this.auth.checkuser(user).subscribe((res:any)=>{
        if(res.status=="valid"){
          this.auth.setloggeduser(user);
          this.app.getRootNav().setRoot(HomePage);
          this.events.publish('user:changed',user);
        }
        else{
          this.message = "Invalid username or password";
        }
      })  
    }
    else{
      this.message = "username and password is required"
    }
  }

  skiplogin(){
    this.app.getRootNav().setRoot(HomePage);
  }
}
