import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';

@Component({
  selector: 'page-write-review',
  templateUrl: 'write-review.html',
})
export class WriteReviewPage {
	public data:any;
	public userDetails: any;
	email: any;
	name: any;
	phone: any;
	Email: any;
	select_value: any;
	responseData: any;
	reviewData = {"id":"", "type":"", "name":"", "email":"", "phone":"", "title":"", "msg":"", "aca":"", "fac":"", "inf":"", "exp":"", "acc":""};

	constructor(public navCtrl: NavController,public app: App, public toastCtrl: ToastController, public navParams: NavParams, public authPro: AuthProvider){
		this.data = navParams.get('data');
		this.email = JSON.parse(localStorage.getItem('email'));

		this.user_profile(this.email);
		this.select_value = ['1','2','3','4','5','6','7','8','9','10'];
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

	user_profile(email){
		this.authPro.profile(this.email).then(data => {
			this.userDetails = data;
			this.name = this.userDetails.name;
			this.phone = this.userDetails.contact;
			this.Email = this.userDetails.email;
		});
	}

	review(){
		this.authPro.write_review(this.reviewData, 'write_review').then((data) => {
			this.responseData = data;
			console.log(this.responseData);
			if(this.responseData){
				let toast = this.toastCtrl.create({
					message: "Your Review has been save in our Database, Thankyou for review it will helpfull for many.",
					duration: 3000
				});
				toast.present();
				this.app.navPop();
			}else{
				let toast = this.toastCtrl.create({
					message: "Something went wrong.",
					duration: 3000
				});
				toast.present();
			}
		});
	}
}
