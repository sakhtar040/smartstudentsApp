var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SchoolPage } from '../pages/school/school';
import { CoachingPage } from '../pages/coaching/coaching';
import { CollegePage } from '../pages/college/college';
import { CounsellingPage } from '../pages/counselling/counselling';
import { StudyabroadPage } from '../pages/studyabroad/studyabroad';
import { EducationloanPage } from '../pages/educationloan/educationloan';
import { LoginPage } from '../pages/login/login';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage, icon: 'ios-home' },
            { title: 'Schools', component: SchoolPage, icon: 'ios-school' },
            { title: 'Coaching Institute', component: CoachingPage, icon: 'ios-school' },
            { title: 'Colleges', component: CollegePage, icon: 'ios-school' },
            { title: 'Study Abroad', component: StudyabroadPage, icon: 'ios-school' },
            { title: 'Counselling', component: CounsellingPage, icon: 'ios-school' },
            { title: 'Education Loan', component: EducationloanPage, icon: 'ios-school' },
            //{ title: 'News', component: NewsPage, icon: 'news'},
            //{ title: 'CutOffs', component: CutoffPage, icon: 'ios-school'},
            { title: 'Login', component: LoginPage, icon: 'person' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 3000);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == HomePage) {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map