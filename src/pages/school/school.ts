import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {SearchPage} from '../search/search';
import {DetailsPage} from '../details/details';
import { LoginPage } from '../login/login';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
	selector: 'page-school',
	templateUrl: 'school.html',
})
export class SchoolPage {
	logo_url = "http://smartstudents.co.in/org_images/";
  image = "http://smartstudents.co.in/avator/";

  //top_10_uni
  public schools;

  //top_5_school
//day
public day__coed;
public day__boys;
public day__girl;

//daycum
public daycum__coed;
public daycum__boys;
public daycum__girl;

//board
public board__coed;
public board__boys;
public board__girl;

show_day_data = true;
show_daycum_data = false;
show_board_data = false;
list:any;
selected :any;

constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider, public loading: LoadingController) {

  let loader = this.loading.create({
    content: 'loading',
  });

  loader.present();

    //top_10_uni
    this.top_10_school();
    //top_5_college start
    //day school
    this.day_coed();
    this.day_boys();
    this.day_girl();

    //daycum
    this.daycum_coed();
    this.daycum_boys();
    this.daycum_girl();

    //board
    this.board_coed();
    this.board_boys();
    this.board_girl();
    //top_5_college ends

    this.list = [
    'Day',
    'Day-Cum',
    'Boarding'
    ];

    setTimeout(() => {
      loader.dismiss();
    }, 1200);
  }

  openModal(){
    if(JSON.parse(localStorage.getItem('email'))){
      this.navCtrl.push(ProfileTabPage);
    }else{
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
    }
  }

  searchPage(){
  	this.navCtrl.push(SearchPage);
  }

  contact(){
    this.navCtrl.push(ContactPage);
  }
  privacy(){
    this.navCtrl.push(PrivacyPage);
  }
  terms(){
    this.navCtrl.push(TermsPage);
  }

  //top_10_uni start
  top_10_school(){
  	this.authPro.top_10_sch('school').then(data => {
      //console.log(data);
      this.schools = data;
    });
  }
  //top_10_uni end

  select(item) {
    this.selected = item;
    if(item == 'Day'){
      this.show_day_data = true;
      this.show_daycum_data = false;
      this.show_board_data = false;
    }
    if(item == 'Day-Cum'){
      this.show_day_data = false;
      this.show_daycum_data = true;
      this.show_board_data = false;
    }
    if(item == 'Boarding'){
      this.show_day_data = false;
      this.show_daycum_data = false;
      this.show_board_data = true;
    }
  };
  isActive(item) {
    return this.selected === item;
  };

  show_day(){
    this.show_day_data = true;
    this.show_daycum_data = false;
    this.show_board_data = false;
  }
  show_daycum(){
    this.show_day_data = false;
    this.show_board_data = false;
    this.show_daycum_data = true;
  }
  show_board(){
    this.show_day_data = false;
    this.show_daycum_data = false;
    this.show_board_data = true;
  }

  //day
  day_coed(){
    this.authPro.top_5_school('day_coed').then(data => {
      //console.log(data);
      this.day__coed = data;
    });
  }
  day_boys(){
    this.authPro.top_5_school('day_boys').then(data => {
      //console.log(data);
      this.day__boys = data;
    });
  }
  day_girl(){
    this.authPro.top_5_school('day_girl').then(data => {
      //console.log(data);
      this.day__girl = data;
    });
  }

  //daycum
  daycum_coed(){
    this.authPro.top_5_school('daycum_coed').then(data => {
      //console.log(data);
      this.daycum__coed = data;
    });
  }
  daycum_boys(){
    this.authPro.top_5_school('daycum_boys').then(data => {
      //console.log(data);
      this.daycum__boys = data;
    });
  }
  daycum_girl(){
    this.authPro.top_5_school('daycum_girl').then(data => {
      //console.log(data);
      this.daycum__girl = data;
    });
  }

  //board
  board_coed(){
    this.authPro.top_5_school('board_coed').then(data => {
      //console.log(data);
      this.board__coed = data;
    });
  }
  board_boys(){
    this.authPro.top_5_school('board_boys').then(data => {
      //console.log(data);
      this.board__boys = data;
    });
  }
  board_girl(){
    this.authPro.top_5_school('board_girl').then(data => {
      //console.log(data);
      this.board__girl = data;
    });
  }

  viewItem(data){
    this.navCtrl.push(DetailsPage, {
      item: data
    })
  }
}