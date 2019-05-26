import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
import {TermsPage} from '../terms/terms';

@Component({
	selector: 'page-student-register',
	templateUrl: 'student-register.html',
})
export class StudentRegisterPage {
	responseData: any;
	userData = {"name":"", "email":"", "contact":"", "password":"", "password2":"", "dob":"", "gender":"", "state":""};

	public state_data;
	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public authPro: AuthProvider, public alertCtrl: AlertController) {
		this.state_reg();
	}

	stu_register(){
		if(this.userData.password == this.userData.password2){
			this.authPro.student_register(this.userData, 'student_signup').then((result) => {
				this.responseData = result;
				if(this.responseData){
					let alert = this.alertCtrl.create({
						message: 'You are Register Successfully, Please now login',
						buttons: [
						{
							text: 'OK',
							handler: () => {
								this.navCtrl.setRoot(HomePage);
							}
						}
						]
					});
					alert.present();
				}else{
					let alert = this.alertCtrl.create({
						message: 'Something went wrong!!'
					});
					alert.present();
				}
			},(err) => {
				console.log('Error');
			});
		}else{
			let alert = this.alertCtrl.create({
				message: "Password Not Matched."
			});
			alert.present();
		}
	}

	login(){
		let modal = this.modalCtrl.create(LoginPage);
		modal.present();
	}

	terms(){
		this.navCtrl.push(TermsPage);
	}

	state_reg(){
		this.authPro.state('state').then(data => {
			this.state_data = data;
			console.log(this.state_data);
		});
	}

}
