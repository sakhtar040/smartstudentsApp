import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {
	email: string;
	public all_reviews: any;
	id: any;
	logo_url = "http://smartstudents.co.in/org_images/";
	constructor(public navCtrl: NavController,public toastCtrl: ToastController, public navParams: NavParams, public authPro: AuthProvider){
		this.email = JSON.parse(localStorage.getItem('email'));

		this.reviews(this.email);
	}

	reviews(email){
		this.authPro.user_reviews(this.email).then(data => {
			this.all_reviews = data;
			console.log(this.all_reviews);
		});
	}

	delReview(id){
		this.authPro.del_review(id).then(data => {
			let toast = this.toastCtrl.create({
				message: "Review Successfully Deleted.",
				duration: 3000
			});
			toast.present();
			this.reviews(this.email);
		});
	}
}
