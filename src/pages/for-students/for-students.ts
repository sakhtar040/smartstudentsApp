import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {SchoolPage} from '../school/school';
import {CoachingPage} from '../coaching/coaching';
import {CollegePage} from '../college/college';
import {CounsellingPage} from '../counselling/counselling';
import {ExamPage} from '../exam/exam';
import {StudyabroadPage} from '../studyabroad/studyabroad';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import {EducationloanPage} from '../educationloan/educationloan';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
	selector: 'page-for-students',
	templateUrl: 'for-students.html',
})
export class ForStudentsPage {
	responseData: any;
	Data = {"name":"","email":"","contact":"","msg":""};
	image = "http://smartstudents.co.in/avator/";

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider) {
	}

	openModal(){
		if(JSON.parse(localStorage.getItem('email'))){
		  this.navCtrl.push(ProfileTabPage);
		}else{
		  let modal = this.modalCtrl.create(LoginPage);
		  modal.present();
		}
	}
	school(){
		this.navCtrl.push(SchoolPage);
	}
	coaching(){
		this.navCtrl.push(CoachingPage);
	}
	college(){
		this.navCtrl.push(CollegePage);
	}
	counselling(){
		this.navCtrl.push(CounsellingPage);
	}
	exams(){
		this.navCtrl.setRoot(ExamPage);
	}
	studyabroad(){
		this.navCtrl.push(StudyabroadPage);
	}
	loan(){
		this.navCtrl.push(EducationloanPage);
	}

	contact_form(){
		this.authPro.contact(this.Data, 'contact').then((result) => {
			this.responseData = result;
			console.log(this.responseData);
			this.navCtrl.popToRoot();
		},(err) => {
			console.log('Error');
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
