import { ProfilePage } from './../profile/profile';
import { DetailsPage } from './../details/details';
import { FormBuilder, FormArray,FormGroup,Validators,FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formlogin={

  }

loginForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.loginForm = new FormGroup({

      email:new FormControl(''),
      password:new FormControl(''),
    
    })
    this.loginForm=this.fb.group({
    
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
    })
    
      }
      login(value: any):void{
       this.navCtrl.push(DetailsPage,);
      }
     register(){
       this.navCtrl.push(ProfilePage);
     }

      }
  


      
  


