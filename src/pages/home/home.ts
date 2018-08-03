import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

}
signIn(){
  this.navCtrl.push(LoginPage);
}
createAccount(){
  this.navCtrl.push(ProfilePage);
}
}
