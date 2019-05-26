import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,ModalController } from 'ionic-angular';
import {SearchPage} from '../search/search';
import { AuthProvider } from '../../providers/auth/auth';
import {DetailsPage} from '../details/details';
import { LoginPage } from '../login/login';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
  selector: 'page-coaching',
  templateUrl: 'coaching.html',
})
export class CoachingPage {
  //top_5_coaching
  public engg;
  public medi;
  public laws;
  public mbas;
  public board;
  public hosp;

  logo_url = "http://smartstudents.co.in/org_images/";
  image = "http://smartstudents.co.in/avator/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider, public loading: LoadingController) {

    let loader = this.loading.create({
      content: 'loading',
    });

    loader.present();

    //top_5_coaching
    this.top_5_board();
    this.top_5_eng();
    this.top_5_med();
    this.top_5_law();
    this.top_5_mba();
    this.top_5_hosp();

    setTimeout(() => {
      loader.dismiss();
    }, 1500);
  }

  searchPage(){
    this.navCtrl.push(SearchPage);
  }

  top_5_board(){
    this.authPro.top_5_coaching('c_board').then(data => {
      //console.log(data);
      this.board = data;
    });
  }  

  top_5_eng(){
    this.authPro.top_5_coaching('c_engineering').then(data => {
      //console.log(data);
      this.engg = data;
    });
  }

  //top_5_med
  top_5_med(){
    this.authPro.top_5_coaching('c_medical').then(data => {
      //console.log(data);
      this.medi = data;
    });
  }

  //top_5_law
  top_5_law(){
    this.authPro.top_5_coaching('c_law').then(data => {
      //console.log(data);
      this.laws = data;
    });
  }

  //top_5_hosp
  top_5_hosp(){
    this.authPro.top_5_coaching('c_hosp').then(data => {
      //console.log(data);
      this.hosp = data;
    });
  }

  //top_5_mba
  top_5_mba(){
    this.authPro.top_5_coaching('c_mba').then(data => {
      //console.log(data);
      this.mbas = data;
    });
  }

  viewItem(data){
    this.navCtrl.push(DetailsPage, {
      item: data
    })
  }

  openModal(){
    if(JSON.parse(localStorage.getItem('email'))){
      this.navCtrl.push(ProfileTabPage);
    }else{
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
    }
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

}
