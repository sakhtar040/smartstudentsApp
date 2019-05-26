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
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
var CounsellingPage = /** @class */ (function () {
    function CounsellingPage(navCtrl, navParams, modalCtrl, authPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.counsellingData = { "name": "", "email": "", "contact": "", "dob": "", "state": "", "city": "", "category": "", "msg": "" };
        this.image = "http://smartstudents.co.in/avator/";
        this.state_reg();
    }
    CounsellingPage.prototype.counselling_data = function () {
        var _this = this;
        this.authPro.counselling(this.counsellingData, 'counselling').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
        }, function (err) {
            console.log('Error');
        });
    };
    CounsellingPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    CounsellingPage.prototype.state_reg = function () {
        var _this = this;
        this.authPro.state('state').then(function (data) {
            _this.state_data = data;
        });
    };
    CounsellingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-counselling',
            templateUrl: 'counselling.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AuthProvider])
    ], CounsellingPage);
    return CounsellingPage;
}());
export { CounsellingPage };
//# sourceMappingURL=counselling.js.map