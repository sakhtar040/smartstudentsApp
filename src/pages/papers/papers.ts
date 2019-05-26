import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {MockPage} from '../mock/mock';

@Component({
	selector: 'page-papers',
	templateUrl: 'papers.html',
})
export class PapersPage {
	exam: any;
	level: any;
	public paper_data;
	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public authPro: AuthProvider) {
		this.exam = navParams.get('examid');
		this.level = navParams.get('lid');

		this.papers();
	}
	papers(){
		this.authPro.paper(this.exam.eid, this.level).then(data => {
			this.paper_data = data;
		});
	}

	start(e,l,p){
		this.navCtrl.push(MockPage, {
			eid: e,
			lid: l,
			pid: p
		});
	}

	retest(e,l,p){
		this.navCtrl.push(MockPage, {
			eid: e,
			lid: l,
			pid: p
		});
	}
}
