import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';
import {TermsPage} from '../terms/terms';

@Component({
	selector: 'page-coaching-register',
	templateUrl: 'coaching-register.html',
})
export class CoachingRegisterPage {
	public state_data;
	public courses_data;
	course = [];
	responseData: any;
	orgData = {
		"org_type":"4",
		"org_name":"",
		"name":"",
		"contact":"",
		"org_email":"",
		"org_pass":"",
		"org_pass2":"",
		"org_state":"",
		"org_city":"",
		"org_logo":"",
		"org_cover":"",
		"org_course":"",
		"org_e_type":"",
		"org_estb":"",
		"org_aff":"",
		"org_url":"",
		"org_contact":""
	};

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public authPro: AuthProvider, public alertCtrl: AlertController) {
		this.state_reg();
		this.courses();
	}

	state_reg(){
		this.authPro.state('state').then(data => {
			this.state_data = data;
		});
	}

	onSelect(){
		console.log(this.orgData.org_course);
	}

	courses(){
		this.authPro.all_courses('all_courses').then(data => {
			this.courses_data = data;
		})
	}

	terms(){
		this.navCtrl.push(TermsPage);
	}

	login(){
		let modal = this.modalCtrl.create(LoginPage);
		modal.present();
	}

	sch_register(){
		if(this.orgData.org_pass == this.orgData.org_pass2){
			this.authPro.org_register(this.orgData, 'org_signup').then((result) => {
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
				message: "Password Not Matched"
			});
			alert.present();
		}
	}

}
