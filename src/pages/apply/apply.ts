import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';

@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {
	public data:any;
	public userDetails: any;
	responseData: any;
	id: any;
	email: any;
	name: any;
	phone: any;
	Email: any;
	Data = {"mem_id":"", "name":"", "email":"", "contact":"", "org_id":""};

  constructor(public navCtrl: NavController,public app: App, public toastCtrl: ToastController, public navParams: NavParams, public authPro: AuthProvider) {
  	this.data = navParams.get('data');
  	this.email = JSON.parse(localStorage.getItem('email'));

  	this.user_profile(this.email);
  }

  user_profile(email){
  	this.authPro.profile(this.email).then(data => {
  		this.userDetails = data;
  		this.name = this.userDetails.name;
  		this.phone = this.userDetails.contact;
  		this.Email = this.userDetails.email;
  		this.id = this.userDetails.mid;
  	});
  }

  apply_form(){
		this.authPro.apply_org(this.Data, 'apply_org').then((data) => {
			this.responseData = data;
			console.log(this.responseData);
			if(this.responseData){
				let toast = this.toastCtrl.create({
					message: "You have Apply for "+this.data.org_name+" our team will contact you soon",
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
