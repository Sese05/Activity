import { LoginPage } from './../login/login';
import { DetailsPage } from './../details/details';
import { HomePage } from './../home/home';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
public formProfile;

profileForm:FormGroup;


public firstName:string;
public lastName:string;
public email:string;

  constructor(public navCtrl: NavController, public NavParams: NavParams,private fb:FormBuilder) {

    this.firstName=this.NavParams.get('firstName');
    
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      Password: new FormControl(''),
      confirmPassword: new FormControl(''),

     
    })
    this.formProfile = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(2)]],
      lastName:['',[Validators.required,Validators.minLength(2)]],
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
     password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
     confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
})

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


createAccount(){
  this.navCtrl.push(LoginPage,{text:this.firstName});
}
logout(){
  this.navCtrl.push(HomePage);
}

}
