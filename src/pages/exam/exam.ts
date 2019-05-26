import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {AuthProvider} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

 @Component({
 	selector: 'page-exam',
 	templateUrl: 'exam.html',
 })
 export class ExamPage {
 	public courses;
 	image = "http://smartstudents.co.in/avator/";
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider, public alertCtrl: AlertController) {
 		this.course();
 	}

 	course(){
 		this.authPro.exam_courses('courses').then(data => {
 			this.courses = data;
 		});
 	}

 	getStarted(){
 		console.log('started');
 		let alert = this.alertCtrl.create({
 			message: 'You can get started and take test in our seperate Exam Application, You can download it from Play Store',
 			buttons: [
 				{
 					text: 'Ok',
 					handler: () => {
 						this.navCtrl.setRoot(HomePage);
 					}
 				}
 			]
 		});
 		alert.present();
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
