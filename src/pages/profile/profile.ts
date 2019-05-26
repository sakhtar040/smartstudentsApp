import { Component } from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
})
export class ProfilePage {
	public userDetails : any;
	public responseData: any;
	public email: any;
	Email;
	id;
	name;
	cover;
	photo; dob; gender; past; present; exp;
	//image_url = "http://smartstudents.co.in/mem/";

	constructor(public navCtrl: NavController,public toastCtrl: ToastController, public navParams: NavParams, public app: App, public authPro: AuthProvider) {
		this.email = JSON.parse(localStorage.getItem('email'));

		this.user_profile(this.email);
	}

	ionViewWillEnter(){
		this.user_profile(this.email);
	}

	logout(){
		localStorage.clear();
		//setTimeout(() => this.navCtrl.popToRoot(), 1000);
		//const root = this.app.getActiveNavs();
		//root[0].setRoot(HomePage);
		this.app.navPop();
		let toast = this.toastCtrl.create({
			message: "Logged Out Successfully",
			duration: 3000
		});
		toast.present();
	}

	user_profile(email){
		this.authPro.profile(this.email).then(data => {
			this.userDetails = data;
			this.Email = this.userDetails.email;
			this.id = this.userDetails.mid;
			this.name = this.userDetails.name;
			this.dob = this.userDetails.dob;
			if(this.userDetails.gender == '0'){
				this.gender = 'Male';
			}else{
				this.gender = 'Female';
			}
			this.past = this.userDetails.past_qua;
			this.present = this.userDetails.present_edu;
			this.exp = this.userDetails.experience;
			if(this.userDetails.photo == ""){
				this.photo = "http://smartstudents.co.in/avator/profile.png";
			}else{
				this.photo = "http://smartstudents.co.in/mem/"+this.id+"/"+this.userDetails.photo;
			}
			if(this.userDetails.cover == ""){
				this.cover = "http://smartstudents.co.in/avator/cover.jpg";
			}else{
				this.cover = "http://smartstudents.co.in/mem/"+this.id+"/"+this.userDetails.cover;
			}
		});
	}

	Home(){
		this.app.navPop();
	}

}
