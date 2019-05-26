import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, Slides, AlertController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {ApplyPage} from '../apply/apply';
import {WriteReviewPage} from '../write-review/write-review';

@Component({
	selector: 'page-details',
	templateUrl: 'details.html',
})
export class DetailsPage {
	item: any;
	type: any;
	logo_url = "http://smartstudents.co.in/org_images/";
	@ViewChild('pageSlider') pageSlider: Slides;
	tabs: any = '0';
	public courses_data;
	public review_data;
	public sep_review_data;
	public rev_score;
	public similar_data;
	public gallery_data;
	public faculty_data;
	public info: any;
	org_type: string;
	aca; fac; inf; exp; acc; avg; count;
	info_content;
	planbuy: false;

	constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public loading: LoadingController, public authPro: AuthProvider) {
		let loader = this.loading.create({
			content: 'loading',
		});
		loader.present();

		this.item = navParams.get('item');

		this.type = this.item.org_type

		setTimeout(() => {
			loader.dismiss();
		}, 1500);
		this.org_courses(this.item);
		this.org_review(this.item);
		this.org_sep_review(this.item);
		this.similar_org(this.item.org_id, this.type);
		this.org_gallery(this.item);
		this.org_faculty(this.item);
		this.org_info_content(this.item);

		if(this.item.org_e_type == '0'){
			this.org_type = 'Public';
		}else{
			this.org_type = 'Private';
		}
	}

	ionViewWillEnter(){
		this.org_review(this.item);
		this.org_sep_review(this.item);
	}

	selectTab(index){
		this.pageSlider.slideTo(index);
	}

	changeWillSlide($event) {
		this.tabs = $event._snapIndex.toString();
	}

	org_courses(item){
		this.authPro.courses(this.item.org_id).then(data => {
			this.courses_data = data;
		});
	}

	org_gallery(item){
		this.authPro.gallery(this.item.org_id).then(data => {
			this.gallery_data = data;
		})
	}

	org_faculty(item){
		this.authPro.faculty(this.item.org_id).then(data => {
			this.faculty_data = data;
		})
	}

	org_review(item){
		this.authPro.reviews(this.item.org_id).then(data => {
			this.review_data = data;
			console.log(this.review_data);
			this.count = this.review_data.length;
		});
	}

	org_sep_review(item){
		this.authPro.sep_reviews(this.item.org_id).then(data => {
			this.sep_review_data = data;
			//console.log(this.sep_review_data);
			//console.log(this.sep_review_data.aca);
			this.aca = this.sep_review_data.aca;
			this.fac = this.sep_review_data.fac;
			this.inf = this.sep_review_data.inf;
			this.exp = this.sep_review_data.exp;
			this.acc = this.sep_review_data.acc;
			this.avg = this.sep_review_data.avg;
		});
	}

	org_info_content(item){
		this.authPro.org_info(this.item.org_id).then(data => {
			this.info = data;
			//console.log(this.info);
			if(this.info == null){
				this.info_content = '';
			}else{
				this.info_content = this.info.content;
			}
		});
	}

	apply(id){
		if(JSON.parse(localStorage.getItem('email'))){
			this.navCtrl.push(ApplyPage, {
				data: this.item
			});
		}else{
			let alert = this.alertCtrl.create({
				subTitle: 'Login First'
			});
			alert.present();
		}
	}
	getdetails(){
		console.log('Get Details');
	}

	similar_org(item,type){
		this.authPro.similar_auth(this.item.org_id, this.item.org_type).then(data => {
			this.similar_data = data;
		})
	}

	viewItem(data){
		this.navCtrl.push(DetailsPage, {
			item: data
		})
	}

	openModal(name){
		console.log(name);
	}

	write_review(id){
		if(JSON.parse(localStorage.getItem('email'))){
			this.navCtrl.push(WriteReviewPage, {
				data: this.item
			});
		}else{
			let alert = this.alertCtrl.create({
				subTitle: 'Login First'
			});
			alert.present();
		}
	}
}
