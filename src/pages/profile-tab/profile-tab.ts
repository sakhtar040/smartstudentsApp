import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ProfilePage} from '../profile/profile';
import {ReviewsPage} from '../reviews/reviews';
import {SettingsPage} from '../settings/settings';
import {HomePage} from '../home/home';
@Component({
  selector: 'page-profile-tab',
  templateUrl: 'profile-tab.html',
})
export class ProfileTabPage {
	tab1Root = ProfilePage;
	tab2Root = ReviewsPage;
	tab3Root = SettingsPage;

  constructor(public navCtrl: NavController){
  	if(!JSON.parse(localStorage.getItem('email'))){
  		this.navCtrl.setRoot(HomePage);
  	}
  }

}
