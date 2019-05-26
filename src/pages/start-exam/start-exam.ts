import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import {ExamPopPage} from '../exam-pop/exam-pop';
import {AuthProvider} from '../../providers/auth/auth';

@Component({
	selector: 'page-start-exam',
	templateUrl: 'start-exam.html',
})
export class StartExamPage {
	questions_data: any;
	e: any;
	l: any;
	p: any;
	public q: any;
	public count: any;
	public cat: any;
	disable_next;
	disable_prev;

	constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController, public authPro: AuthProvider) {
		this.e = navParams.get('eid');
		this.l = navParams.get('lid');
		this.p = navParams.get('pid');
		this.ques_def();
		this.ques_count();
		this.ques_cat();
	}

	ngOnInit(){
		this.questions(this.q);
	}

	ques_def(){
		this.q = '';
	}

	questions(q){
		this.authPro.question(this.e.eid,this.l,this.p.pid,this.q).then(data => {
			this.questions_data = data;
		});
	}

	ques_count(){
		this.authPro.count_ques(this.e.eid,this.l,this.p.pid).then(data => {
			this.count = data;
		});
	}

	ques_cat(){
		this.authPro.cat_ques(this.e.eid).then(data => {
			this.cat = data;
		});
	}

	openExamPop(ev){
		let popover = this.popCtrl.create(ExamPopPage);
		popover.present({
			ev: ev
		});
	}

	prev(event, pr){
		var x = parseInt(pr);
		if(x == 1){
			this.disable_prev = true;
		}else{
			var y = x - 1;
			this.q = y;
			this.questions(this.q);
		}
	}

	submit(){
		console.log('submit');
	}

	next(event, qu){
		var x = parseInt(qu);
		var y = x + 1;
		if(y <= this.count.count){
			this.q = y;
			this.questions(this.q);
		}else{
			this.disable_next = true;
		}
	}

	select_answer(event, ans){
		console.log(ans);
	}
}
