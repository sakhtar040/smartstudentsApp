import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PapersPage} from '../papers/papers';

@Component({
	selector: 'page-level',
	templateUrl: 'level.html',
})
export class LevelPage {
	eid: any;
	levels: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.eid = navParams.get('data');

		this.levels = ['1','2','3'];
	}

	papers(data_level, data_eid){
		this.navCtrl.push(PapersPage, {
			examid: data_eid,
			lid: data_level
		});
	}
}
