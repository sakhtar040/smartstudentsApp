import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
})
export class AboutPage {
	image = "http://smartstudents.co.in/avator/";
  services: any;
  service_item: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
	  this.services = ['Schools','Coaching Institutes','Colleges','University','Exams','Study Abroad','Career Counselling','Education Loan'];
    this.show_services();
  }

	show_services(){
    var i=0;
    setInterval(() => {
      this.service_item = this.services[i];
      if(i >= this.services.length-1){
        i = 0;
      }else{
        i++;
      }
    }, 3000);
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
