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
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { AuthProvider } from '../../providers/auth/auth';
import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';
var CoachingPage = /** @class */ (function () {
    function CoachingPage(navCtrl, navParams, modalCtrl, authPro, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.loading = loading;
        this.logo_url = "http://smartstudents.co.in/org_images/";
        this.image = "http://smartstudents.co.in/avator/";
        var loader = this.loading.create({
            content: 'loading',
        });
        loader.present();
        //top_5_coaching
        this.top_5_board();
        this.top_5_eng();
        this.top_5_med();
        this.top_5_law();
        this.top_5_mba();
        this.top_5_hosp();
        setTimeout(function () {
            loader.dismiss();
        }, 1500);
    }
    CoachingPage.prototype.searchPage = function () {
        this.navCtrl.push(SearchPage);
    };
    CoachingPage.prototype.top_5_board = function () {
        var _this = this;
        this.authPro.top_5_coaching('c_board').then(function (data) {
            //console.log(data);
            _this.board = data;
        });
    };
    CoachingPage.prototype.top_5_eng = function () {
        var _this = this;
        this.authPro.top_5_coaching('c_engineering').then(function (data) {
            //console.log(data);
            _this.engg = data;
        });
    };
    //top_5_med
    CoachingPage.prototype.top_5_med = function () {
        var _this = this;
        this.authPro.top_5_coaching('c_medical').then(function (data) {
            //console.log(data);
            _this.medi = data;
        });
    };
    //top_5_law
    CoachingPage.prototype.top_5_law = function () {
        var _this = this;
        this.authPro.top_5_coaching('c_law').then(function (data) {
            //console.log(data);
            _this.laws = data;
        });
    };
    //top_5_hosp
    CoachingPage.prototype.top_5_hosp = function () {
        var _this = this;
        this.authPro.top_5_coaching('c_hosp').then(function (data) {
            //console.log(data);
            _this.hosp = data;
        });
    };
    //top_5_mba
    CoachingPage.prototype.top_5_mba = function () {
        var _this = this;
        this.authPro.top_5_coaching('c_mba').then(function (data) {
            //console.log(data);
            _this.mbas = data;
        });
    };
    CoachingPage.prototype.viewItem = function (data) {
        this.navCtrl.push(DetailsPage, {
            item: data
        });
    };
    CoachingPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    CoachingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-coaching',
            templateUrl: 'coaching.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AuthProvider, LoadingController])
    ], CoachingPage);
    return CoachingPage;
}());
export { CoachingPage };
//# sourceMappingURL=coaching.js.map