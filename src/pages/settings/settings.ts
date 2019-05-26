import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	public userDetails : any;
	public responseData: any;
	public email: any;
	Email;
	id;
	name;
	cover;
	photo; dob; gender; past; present; exp; phone;
	//image_url = "http://smartstudents.co.in/mem/";
	userData = {"name":"", "email":"", "contact":"", "password":"","pass1":"" ,"id":"", "oemail":""};
	constructor(public navCtrl: NavController,public toastCtrl: ToastController, public navParams: NavParams, public authPro: AuthProvider){
		this.email = JSON.parse(localStorage.getItem('email'));
		this.user_profile(this.email);
		console.log(this.userData);
	}

	ionViewWillEnter(){
		this.user_profile(this.email);
	}

	user_profile(email){
		this.authPro.profile(this.email).then(data => {
			this.userDetails = data;
			this.Email = this.userDetails.email;
			this.id = this.userDetails.mid;
			//this.cover = this.userDetails.cover;
			this.name = this.userDetails.name;
			//this.photo = this.userDetails.photo;
			this.dob = this.userDetails.dob;
			this.phone = this.userDetails.contact;
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

	change(){
		console.log('change');
	}

	update(){
		if(this.userData.password == this.userData.pass1){
			this.authPro.update_details(this.userData, 'update_details').then((data) => {
				this.responseData = data;
				console.log(this.responseData);
				if(this.responseData){
					let toast = this.toastCtrl.create({
						message: "Details has been successfully updated.",
						duration: 3000
					});
					toast.present();
					this.user_profile(this.email);
				}else{
					let toast = this.toastCtrl.create({
						message: "Something went wrong.",
						duration: 3000
					});
					toast.present();
					this.user_profile(this.email);
				}
			});
		}else{
			let toast = this.toastCtrl.create({
				message: "Password Not Matched.",
				duration: 5000
			});
			toast.present();
		}
	}
}
