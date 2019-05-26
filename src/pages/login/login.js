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
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgotPage } from '../forgot/forgot';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfilePage } from '../profile/profile';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, modalCtrl, authPro, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.loading = loading;
        this.userData = {
            "email": "",
            "password": ""
        };
    }
    LoginPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(RegisterPage);
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(ForgotPage);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authPro.signin(this.userData, 'login').then(function (result) {
            console.log(result);
            _this.responseData = result;
            localStorage.setItem('userData', JSON.stringify(_this.responseData));
            _this.navCtrl.setRoot(ProfilePage, {
                email: _this.userData.email
            });
        }, function (err) {
            console.log('Connection Failed');
        });
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, ModalController, AuthProvider, LoadingController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map