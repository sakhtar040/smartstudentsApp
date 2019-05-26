var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SuperTabsModule } from "ionic2-super-tabs";
import { TabsPage } from '../components/tabs/tabs';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { SchoolPage } from '../pages/school/school';
import { CoachingPage } from '../pages/coaching/coaching';
import { CollegePage } from '../pages/college/college';
import { CounsellingPage } from '../pages/counselling/counselling';
import { StudyabroadPage } from '../pages/studyabroad/studyabroad';
import { EducationloanPage } from '../pages/educationloan/educationloan';
import { ExamPage } from '../pages/exam/exam';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPage } from '../pages/forgot/forgot';
import { AuthProvider } from '../providers/auth/auth';
import { DetailsPage } from '../pages/details/details';
import { SchoolRegisterPage } from '../pages/school-register/school-register';
import { StudentRegisterPage } from '../pages/student-register/student-register';
import { CollegeRegisterPage } from '../pages/college-register/college-register';
import { CoachingRegisterPage } from '../pages/coaching-register/coaching-register';
import { UniversityRegisterPage } from '../pages/university-register/university-register';
import { OtherRegisterPage } from '../pages/other-register/other-register';
import { LevelPage } from '../pages/level/level';
import { PapersPage } from '../pages/papers/papers';
import { MockPage } from '../pages/mock/mock';
import { StartExamPage } from '../pages/start-exam/start-exam';
import { ExamPopPage } from '../pages/exam-pop/exam-pop';
import { ForSchoolPage } from '../pages/for-school/for-school';
import { ForStudentsPage } from '../pages/for-students/for-students';
import { ForCollegesPage } from '../pages/for-colleges/for-colleges';
import { ForGovtPage } from '../pages/for-govt/for-govt';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AdvertisePage } from '../pages/advertise/advertise';
import { ProfilePage } from '../pages/profile/profile';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp, AboutPage, ContactPage, AdvertisePage, TabsPage, ProfilePage,
                HomePage, SearchPage, LoginPage, RegisterPage, ForgotPage, DetailsPage, LevelPage, PapersPage, MockPage,
                SchoolPage, CoachingPage, CollegePage, CounsellingPage, StudyabroadPage, EducationloanPage, ExamPage,
                SchoolRegisterPage, StudentRegisterPage, CollegeRegisterPage, UniversityRegisterPage, OtherRegisterPage,
                CoachingRegisterPage, StartExamPage, ExamPopPage, ForCollegesPage, ForGovtPage, ForSchoolPage, ForStudentsPage
            ],
            imports: [
                BrowserModule, HttpModule,
                IonicModule.forRoot(MyApp),
                SuperTabsModule.forRoot(),
                IonicImageViewerModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp, AboutPage, ContactPage, AdvertisePage, ProfilePage,
                HomePage, SearchPage, LoginPage, RegisterPage, ForgotPage, DetailsPage, LevelPage, PapersPage, MockPage,
                SchoolPage, CoachingPage, CollegePage, CounsellingPage, StudyabroadPage, EducationloanPage, ExamPage,
                SchoolRegisterPage, StudentRegisterPage, CollegeRegisterPage, UniversityRegisterPage, OtherRegisterPage,
                CoachingRegisterPage, StartExamPage, ExamPopPage, ForStudentsPage, ForSchoolPage, ForGovtPage, ForCollegesPage
            ],
            providers: [
                StatusBar,
                SplashScreen, Network,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                AuthProvider,
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map