import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SchoolRegisterPage} from '../school-register/school-register';
import {StudentRegisterPage} from '../student-register/student-register';
import {CollegeRegisterPage} from '../college-register/college-register';
import {CoachingRegisterPage} from '../coaching-register/coaching-register';
import {UniversityRegisterPage} from '../university-register/university-register';
import {OtherRegisterPage} from '../other-register/other-register';

@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {
	image = "http://smartstudents.co.in/avator/";

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

	student_register(){
		this.navCtrl.setRoot(StudentRegisterPage);
	}

	school_register(){
		this.navCtrl.setRoot(SchoolRegisterPage);
	}

	college_register(){
		this.navCtrl.setRoot(CollegeRegisterPage);
	}

	university_register(){
		this.navCtrl.setRoot(UniversityRegisterPage);
	}

	coaching_register(){
		this.navCtrl.setRoot(CoachingRegisterPage);
	}

	other_register(){
		this.navCtrl.setRoot(OtherRegisterPage);
	}

}
