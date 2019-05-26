import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AuthProvider} from '../../providers/auth/auth';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
	selector: 'page-counselling',
	templateUrl: 'counselling.html',
})
export class CounsellingPage {
	responseData: any;
	counsellingData = {"name":"", "email":"", "contact":"", "dob":"", "state":"", "city":"", "category":"", "msg":""};

	public state_data;
	image = "http://smartstudents.co.in/avator/";
	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider) {
		this.state_reg();
		console.log(JSON.parse(localStorage.getItem('userData')));
	}

	counselling_data(){
		this.authPro.counselling(this.counsellingData, 'counselling').then((result) => {
			this.responseData = result;
			console.log(this.responseData);
		}, (err) => {
			console.log('Error');
		})
	}

	openModal(){
		if(JSON.parse(localStorage.getItem('email'))){
		  this.navCtrl.push(ProfileTabPage);
		}else{
		  let modal = this.modalCtrl.create(LoginPage);
		  modal.present();
		}
	}

	state_reg(){
		this.authPro.state('state').then(data => {
			this.state_data = data;
		});
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
