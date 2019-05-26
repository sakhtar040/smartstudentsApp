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
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, app, authPro) {
        //const data = JSON.parse(localStorage.getItem('userData'));
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.authPro = authPro;
        this.image_url = "http://smartstudents.co.in/mem/";
        this.email = navParams.get('email');
        console.log(this.email);
        this.user_profile(this.email);
    }
    ProfilePage.prototype.logout = function () {
        localStorage.clear();
        //setTimeout(() => this.navCtrl.popToRoot(), 1000);
        //const root = this.app.getActiveNavs();
        //root[0].setRoot(HomePage);
        this.navCtrl.setRoot(HomePage);
    };
    ProfilePage.prototype.user_profile = function (email) {
        var _this = this;
        this.authPro.profile(this.email).then(function (data) {
            _this.userDetails = data;
            _this.Email = _this.userDetails.email;
            _this.id = _this.userDetails.mid;
            _this.cover = _this.userDetails.cover;
            _this.name = _this.userDetails.name;
            _this.photo = _this.userDetails.photo;
        });
    };
    ProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, App, AuthProvider])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map