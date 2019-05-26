var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchoolRegisterPage } from '../school-register/school-register';
import { StudentRegisterPage } from '../student-register/student-register';
import { CollegeRegisterPage } from '../college-register/college-register';
import { CoachingRegisterPage } from '../coaching-register/coaching-register';
import { UniversityRegisterPage } from '../university-register/university-register';
import { OtherRegisterPage } from '../other-register/other-register';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.image = "http://smartstudents.co.in/avator/";
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.student_register = function () {
        this.navCtrl.setRoot(StudentRegisterPage);
    };
    RegisterPage.prototype.school_register = function () {
        this.navCtrl.setRoot(SchoolRegisterPage);
    };
    RegisterPage.prototype.college_register = function () {
        this.navCtrl.setRoot(CollegeRegisterPage);
    };
    RegisterPage.prototype.university_register = function () {
        this.navCtrl.setRoot(UniversityRegisterPage);
    };
    RegisterPage.prototype.coaching_register = function () {
        this.navCtrl.setRoot(CoachingRegisterPage);
    };
    RegisterPage.prototype.other_register = function () {
        this.navCtrl.setRoot(OtherRegisterPage);
    };
    RegisterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map