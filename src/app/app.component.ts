import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthProvider} from '../providers/auth/auth';

import { HomePage } from '../pages/home/home';
import {SchoolPage} from '../pages/school/school';
import {CoachingPage} from '../pages/coaching/coaching';
import {CollegePage} from '../pages/college/college';
import {CounsellingPage} from '../pages/counselling/counselling';
import {StudyabroadPage} from '../pages/studyabroad/studyabroad';
import {EducationloanPage} from '../pages/educationloan/educationloan';
import {LoginPage} from '../pages/login/login';
import {ExamPage} from '../pages/exam/exam';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;
  name: any;
  email: any;
  details: any;

  constructor(public platform: Platform,public authPro: AuthProvider, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.menu();
  }

  menu(){
    if(JSON.parse(localStorage.getItem('email'))){
      this.pages = [
        { title: 'Home', component: HomePage, icon: 'ios-home' },
        { title: 'Schools', component: SchoolPage, icon: 'ios-school' },
        { title: 'Coaching Institute', component: CoachingPage, icon: 'book' },
        { title: 'Colleges', component: CollegePage, icon: 'ribbon' },
        { title: 'Exams', component: ExamPage, icon: 'clipboard' },
        { title: 'Study Abroad', component: StudyabroadPage, icon: 'paper' },
        { title: 'Counselling', component: CounsellingPage, icon: 'contacts' },
        { title: 'Education Loan', component: EducationloanPage, icon: 'card' },
        //{ title: 'News', component: NewsPage, icon: 'news'},
        //{ title: 'CutOffs', component: CutoffPage, icon: 'ios-school'},
        { title: 'Logout', component: LoginPage, icon: 'log-out'}
      ];
    }else{
      this.pages = [
        { title: 'Home', component: HomePage, icon: 'ios-home' },
        { title: 'Schools', component: SchoolPage, icon: 'ios-school' },
        { title: 'Coaching Institute', component: CoachingPage, icon: 'book' },
        { title: 'Colleges', component: CollegePage, icon: 'ribbon' },
        { title: 'Exams', component: ExamPage, icon: 'clipboard' },
        { title: 'Study Abroad', component: StudyabroadPage, icon: 'paper' },
        { title: 'Counselling', component: CounsellingPage, icon: 'contacts' },
        { title: 'Education Loan', component: EducationloanPage, icon: 'card' },
        //{ title: 'News', component: NewsPage, icon: 'news'},
        //{ title: 'CutOffs', component: CutoffPage, icon: 'ios-school'},
        { title: 'Login', component: LoginPage, icon: 'person'}
      ];
    }

    this.getName();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(JSON.parse(localStorage.getItem('email'))){
      if(page.component == HomePage){
        this.nav.setRoot(page.component);
      }
      if(page.component == LoginPage){
        localStorage.clear();
        this.nav.setRoot(HomePage);
        this.name = "Guest";
        this.menu();
      }else{
        this.nav.push(page.component);
      }
    }else{
      if(page.component == HomePage){
        this.nav.setRoot(page.component);
      }else{
        this.nav.push(page.component);
      }
    }
  }

  getName(){
    if(JSON.parse(localStorage.getItem('email'))){
      this.email = JSON.parse(localStorage.getItem('email'));
      this.authPro.profile(this.email).then(data => {
        this.details = data;
        //console.log(this.details);
        this.name = this.details.name;
      });
    }else{
      this.name = "Guest";
    }
  }
}

