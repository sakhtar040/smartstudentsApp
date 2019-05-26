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
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { LevelPage } from '../level/level';
var ExamPage = /** @class */ (function () {
    function ExamPage(navCtrl, navParams, modalCtrl, authPro, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.alertCtrl = alertCtrl;
        this.image = "http://smartstudents.co.in/avator/";
        this.course();
    }
    ExamPage.prototype.course = function () {
        var _this = this;
        this.authPro.exam_courses('courses').then(function (data) {
            _this.courses = data;
        });
    };
    ExamPage.prototype.levels = function (id) {
        this.navCtrl.push(LevelPage, {
            data: id
        });
    };
    ExamPage.prototype.getStarted = function () {
        console.log('started');
        var alert = this.alertCtrl.create({
            subTitle: 'You can get started and take test in our seperate Exam Application, You can download it from Play Store'
        });
        alert.present();
    };
    ExamPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    ExamPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-exam',
            templateUrl: 'exam.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AuthProvider, AlertController])
    ], ExamPage);
    return ExamPage;
}());
export { ExamPage };
//# sourceMappingURL=exam.js.map