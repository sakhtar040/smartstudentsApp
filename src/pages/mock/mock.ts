import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {StartExamPage} from '../start-exam/start-exam';

@Component({
	selector: 'page-mock',
	templateUrl: 'mock.html',
})
export class MockPage {
	e: any;
	l: any;
	p: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public authPro: AuthProvider, public modalCtrl: ModalController, public viewCtrl: ViewController, public alertCtrl: AlertController) {
		this.e = navParams.get('eid');
		this.l = navParams.get('lid');
		this.p = navParams.get('pid');

		let alert = this.alertCtrl.create({
			title: 'Alert'
		});
		alert.present();
	}

	start_exam(ex,lx,px){
		this.navCtrl.setRoot(StartExamPage, {
			eid: ex,
			lid: lx,
			pid: px
		});
	}
}
