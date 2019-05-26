import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { SuperTabsModule} from "ionic2-super-tabs";
import {TabsPage} from '../components/tabs/tabs';
import {IonicImageViewerModule} from 'ionic-img-viewer';
import {Network} from '@ionic-native/network';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SearchPage} from '../pages/search/search';
import {SchoolPage} from '../pages/school/school';
import {CoachingPage} from '../pages/coaching/coaching';
import {CollegePage} from '../pages/college/college';
import {CounsellingPage} from '../pages/counselling/counselling';
import {StudyabroadPage} from '../pages/studyabroad/studyabroad';
import {EducationloanPage} from '../pages/educationloan/educationloan';
import {ExamPage} from '../pages/exam/exam';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {ForgotPage} from '../pages/forgot/forgot';
import { AuthProvider } from '../providers/auth/auth';
import {DetailsPage} from '../pages/details/details';
import {SchoolRegisterPage} from '../pages/school-register/school-register';
import {StudentRegisterPage} from '../pages/student-register/student-register';
import {CollegeRegisterPage} from '../pages/college-register/college-register';
import {CoachingRegisterPage} from '../pages/coaching-register/coaching-register';
import {UniversityRegisterPage} from '../pages/university-register/university-register';
import {OtherRegisterPage} from '../pages/other-register/other-register';
import {LevelPage} from '../pages/level/level';
import {PapersPage} from '../pages/papers/papers';
import {MockPage} from '../pages/mock/mock';
import {StartExamPage} from '../pages/start-exam/start-exam';
import {ExamPopPage} from '../pages/exam-pop/exam-pop';
import {ForSchoolPage} from '../pages/for-school/for-school';
import {ForStudentsPage} from '../pages/for-students/for-students';
import {ForCollegesPage} from '../pages/for-colleges/for-colleges';
import {ForGovtPage} from '../pages/for-govt/for-govt';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {AdvertisePage} from '../pages/advertise/advertise';
import {ProfilePage} from '../pages/profile/profile';
import {TermsPage} from '../pages/terms/terms';
import {PrivacyPage} from '../pages/privacy/privacy';
import {ApplyPage} from '../pages/apply/apply';
import {ReviewsPage} from '../pages/reviews/reviews';
import {ProfileTabPage} from '../pages/profile-tab/profile-tab';
import {SettingsPage} from '../pages/settings/settings';
import {WriteReviewPage} from '../pages/write-review/write-review';

@NgModule({
  declarations: [
  WriteReviewPage,
  MyApp,AboutPage,ContactPage,AdvertisePage,TabsPage,ProfilePage,TermsPage,PrivacyPage,ApplyPage,ReviewsPage,
  HomePage,SearchPage,LoginPage,RegisterPage,ForgotPage,DetailsPage,LevelPage,PapersPage,MockPage,SettingsPage,
  SchoolPage,CoachingPage,CollegePage,CounsellingPage,StudyabroadPage,EducationloanPage,ExamPage,ProfileTabPage,
  SchoolRegisterPage,StudentRegisterPage,CollegeRegisterPage,UniversityRegisterPage,OtherRegisterPage,
  CoachingRegisterPage,StartExamPage,ExamPopPage,ForCollegesPage,ForGovtPage,ForSchoolPage,ForStudentsPage
  ],
  imports: [
  BrowserModule,HttpModule,
  IonicModule.forRoot(MyApp),
  SuperTabsModule.forRoot(),
  IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  WriteReviewPage,
  MyApp,AboutPage,ContactPage,AdvertisePage,ProfilePage,TermsPage,PrivacyPage,ApplyPage,ReviewsPage,
  HomePage,SearchPage,LoginPage,RegisterPage,ForgotPage,DetailsPage,LevelPage,PapersPage,MockPage,SettingsPage,
  SchoolPage,CoachingPage,CollegePage,CounsellingPage,StudyabroadPage,EducationloanPage,ExamPage,ProfileTabPage,
  SchoolRegisterPage,StudentRegisterPage,CollegeRegisterPage,UniversityRegisterPage,OtherRegisterPage,
  CoachingRegisterPage,StartExamPage,ExamPopPage,ForStudentsPage,ForSchoolPage,ForGovtPage,ForCollegesPage
  ],
  providers: [
  StatusBar,
  SplashScreen,Network,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthProvider,
  ]
})
export class AppModule {}
