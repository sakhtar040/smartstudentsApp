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
import { HomePage } from '../home/home';
var EducationloanPage = /** @class */ (function () {
    function EducationloanPage(navCtrl, navParams, modalCtrl, authPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.loanData = { "name": "", "email": "", "contact": "", "dob": "", "state": "", "city": "", "stay": "", "pursue": "", "money": "", "msg": "" };
        this.state_reg();
    }
    EducationloanPage.prototype.loan = function () {
        var _this = this;
        this.authPro.educationloan(this.loanData, 'loan').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.navCtrl.setRoot(HomePage);
        }, function (err) {
            console.log('Error');
        });
    };
    EducationloanPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    EducationloanPage.prototype.state_reg = function () {
        var _this = this;
        this.authPro.state('state').then(function (data) {
            _this.state_data = data;
        });
    };
    EducationloanPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-educationloan',
            templateUrl: 'educationloan.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AuthProvider])
    ], EducationloanPage);
    return EducationloanPage;
}());
export { EducationloanPage };
//# sourceMappingURL=educationloan.js.map