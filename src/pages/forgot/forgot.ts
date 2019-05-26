import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
	responseData: any;
	userData = {
	  "email":""
	};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public authPro: AuthProvider) {
  }

	forgot(){
		this.authPro.forgot_password(this.userData, 'forgot').then((result) => {
			this.responseData = result;
			if(this.responseData){
				let alert = this.alertCtrl.create({
					message: "Forgot Password link has been sent on your email address, please reset your password via that link!!",
					buttons: [
						{
							text: "Ok",
							handler: () => {
								this.navCtrl.setRoot(HomePage);
							}
						}
					]
				});
				alert.present();
			}
		}, (err) => {
			console.log('Connection Failed');
    	});
	}
}
