import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, LoadingController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {ForgotPage} from '../forgot/forgot';
import {AuthProvider} from '../../providers/auth/auth';
import { ProfileTabPage } from  '../profile-tab/profile-tab';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData: any;
  userData = {
    "email":"",
    "password":""
  };
  image = "http://smartstudents.co.in/avator/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public authPro: AuthProvider, public loading: LoadingController) {
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }

  forgot(){
    this.navCtrl.push(ForgotPage);
  }

  login(){
    this.authPro.signin(this.userData, 'login').then((result) => {
      this.responseData = result;
      localStorage.setItem('email', JSON.stringify(this.userData.email));
      this.navCtrl.setRoot(ProfileTabPage);
    }, (err) => {
      console.log('Connection Failed');
    });
  }

}
