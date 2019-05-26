import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {DetailsPage} from '../details/details';

@Component({
	selector: 'page-search',
	templateUrl: 'search.html',
})
export class SearchPage {

	list:any;
	selected :any;
	logo_url = "http://smartstudents.co.in/org_images/";

 	//searchbar
 	public posts: any;
 	searchQuery: string = '';
 	public items: any;
 	public o_type: any;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public authPro: AuthProvider, public loading: LoadingController) {

 		this.list = [
 		'Schools',
 		'Coaching Institutes',
 		'Colleges',
 		'Universities'
 		];

 		this.search_def();
 	}

 	ngOnInit(){
 		this.search_org(this.o_type);
 	}

 	search_def(){
 		this.o_type = '';
 	}

 	search_org(o_type){
 		this.authPro.search_org(this.o_type).then(data => {
 			this.posts = data;
 			this.initializeItems();
 		});
 	}

 	select(item, event, val) {
 		this.selected = item;
 		if(val == 'Schools'){
 			this.o_type = '1';
 			this.search_org(this.o_type);
 		}
 		if(val == 'Coaching Institutes'){
 			this.o_type = '4';
 			this.search_org(this.o_type);
 		}
 		if(val == 'Colleges'){
 			this.o_type = '2';
 			this.search_org(this.o_type);
 		}
 		if(val == 'Universities'){
 			this.o_type = '3';
 			this.search_org(this.o_type);
 		}
 	};
 	isActive(item) {
 		return this.selected === item;
 	};

 	initializeItems(){
 		this.items = this.posts;
 	}

 	getItems(ev: any){
 		this.initializeItems();
 		let val = ev.target.value;
 		if(val && val.trim() != ''){
 			this.items = this.items.filter((item) => {
 				return (item.org_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
 			})
 		}
 	}

 	viewItem(data){
 		this.navCtrl.push(DetailsPage, {
 			item: data
 		});
 	}

 	refresh(){
 		this.o_type = '';
 		this.search_org(this.o_type);
 		this.selected = false;
 	}

 }
