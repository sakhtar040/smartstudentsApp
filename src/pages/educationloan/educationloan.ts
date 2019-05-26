import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AuthProvider} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
	selector: 'page-educationloan',
	templateUrl: 'educationloan.html',
})
export class EducationloanPage {
	responseData: any;
	loanData = {"name":"", "email":"", "contact":"", "dob":"", "state":"", "city":"", "stay":"", "pursue":"", "money":"", "msg":""};

	public state_data;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider) {
		this.state_reg();
	}

	loan(){
		this.authPro.educationloan(this.loanData, 'loan').then((result) => {
			this.responseData = result;
			console.log(this.responseData);
			this.navCtrl.setRoot(HomePage);
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
