import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, App } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html',
})
export class ContactPage {
	responseData: any;
	Data = {"name":"", "email":"", "contact":"", "msg":""};

	constructor(public navCtrl: NavController, public app: App, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider) {
	}

	contact_form(){
		this.authPro.contact(this.Data, 'contact').then((result) => {
			this.responseData = result;
			console.log(this.responseData);
			this.app.navPop();
		},(err) => {
			console.log('Error');
		});
	}

	openModal(){
	  if(JSON.parse(localStorage.getItem('email'))){
	    this.navCtrl.push(ProfileTabPage);
	  }else{
	    let modal = this.modalCtrl.create(LoginPage);
	    modal.present();
	  }
	}

	contact(){
	  this.navCtrl.push(ContactPage);
	}
	privacy(){
	  this.navCtrl.push(PrivacyPage);
	}
	terms(){
	  this.navCtrl.push(TermsPage);
	}
}
