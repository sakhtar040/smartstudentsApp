import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
	selector: 'page-studyabroad',
	templateUrl: 'studyabroad.html',
	providers: [AuthProvider]
})
export class StudyabroadPage {

	constructor(public navCtrl: NavController, public authPro: AuthProvider, public modalCtrl: ModalController) {
		
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
