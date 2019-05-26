import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-exam-pop',
	templateUrl: 'exam-pop.html',
})
export class ExamPopPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public viewCtrl: ViewController
		) {
	}

	close(){
		this.viewCtrl.dismiss();
	}

}
