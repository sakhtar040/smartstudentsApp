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
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SchoolPage } from '../school/school';
import { CoachingPage } from '../coaching/coaching';
import { CollegePage } from '../college/college';
import { CounsellingPage } from '../counselling/counselling';
import { ExamPage } from '../exam/exam';
import { StudyabroadPage } from '../studyabroad/studyabroad';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { EducationloanPage } from '../educationloan/educationloan';
var ForSchoolPage = /** @class */ (function () {
    function ForSchoolPage(navCtrl, navParams, modalCtrl, authPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.Data = { "name": "", "email": "", "contact": "", "msg": "" };
        this.image = "http://smartstudents.co.in/avator/";
    }
    ForSchoolPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    ForSchoolPage.prototype.school = function () {
        this.navCtrl.push(SchoolPage);
    };
    ForSchoolPage.prototype.coaching = function () {
        this.navCtrl.push(CoachingPage);
    };
    ForSchoolPage.prototype.college = function () {
        this.navCtrl.push(CollegePage);
    };
    ForSchoolPage.prototype.counselling = function () {
        this.navCtrl.push(CounsellingPage);
    };
    ForSchoolPage.prototype.exams = function () {
        this.navCtrl.setRoot(ExamPage);
    };
    ForSchoolPage.prototype.studyabroad = function () {
        this.navCtrl.push(StudyabroadPage);
    };
    ForSchoolPage.prototype.loan = function () {
        this.navCtrl.push(EducationloanPage);
    };
    ForSchoolPage.prototype.contact_form = function () {
        var _this = this;
        this.authPro.contact(this.Data, 'contact').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.navCtrl.popToRoot();
        }, function (err) {
            console.log('Error');
        });
    };
    ForSchoolPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-for-school',
            templateUrl: 'for-school.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AuthProvider])
    ], ForSchoolPage);
    return ForSchoolPage;
}());
export { ForSchoolPage };
//# sourceMappingURL=for-school.js.map