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
var CollegePage = /** @class */ (function () {
    function CollegePage(navCtrl, navParams, modalCtrl, authPro, loading) {
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
        //top_5_college start
        this.top_5_eng();
        this.top_5_med();
        this.top_5_law();
        this.top_5_mba();
        this.top_5_comm();
        this.top_5_arc();
        this.top_5_avia();
        this.top_5_capp();
        this.top_5_edu();
        this.top_5_htm();
        this.top_5_mass();
        this.top_5_sci();
        //top_5_college ends
        //top_10_uni
        this.top_10_university();
        setTimeout(function () {
            loader.dismiss();
        }, 1500);
    }
    CollegePage.prototype.searchPage = function () {
        this.navCtrl.push(SearchPage);
    };
    CollegePage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    //top_5_eng
    CollegePage.prototype.top_5_eng = function () {
        var _this = this;
        this.authPro.top_5_college('engineering').then(function (data) {
            //console.log(data);
            _this.engg = data;
        });
    };
    //top_5_med
    CollegePage.prototype.top_5_med = function () {
        var _this = this;
        this.authPro.top_5_college('medical').then(function (data) {
            //console.log(data);
            _this.medi = data;
        });
    };
    //top_5_law
    CollegePage.prototype.top_5_law = function () {
        var _this = this;
        this.authPro.top_5_college('law').then(function (data) {
            //console.log(data);
            _this.laws = data;
        });
    };
    //top_5_mba
    CollegePage.prototype.top_5_mba = function () {
        var _this = this;
        this.authPro.top_5_college('mba').then(function (data) {
            //console.log(data);
            _this.mbas = data;
        });
    };
    CollegePage.prototype.top_5_capp = function () {
        var _this = this;
        this.authPro.top_5_college('capp').then(function (data) {
            //console.log(data);
            _this.capp = data;
        });
    };
    CollegePage.prototype.top_5_edu = function () {
        var _this = this;
        this.authPro.top_5_college('edu').then(function (data) {
            //console.log(data);
            _this.edu = data;
        });
    };
    CollegePage.prototype.top_5_arc = function () {
        var _this = this;
        this.authPro.top_5_college('arc').then(function (data) {
            //console.log(data);
            _this.arc = data;
        });
    };
    CollegePage.prototype.top_5_avia = function () {
        var _this = this;
        this.authPro.top_5_college('avia').then(function (data) {
            //console.log(data);
            _this.avia = data;
        });
    };
    CollegePage.prototype.top_5_comm = function () {
        var _this = this;
        this.authPro.top_5_college('comm').then(function (data) {
            //console.log(data);
            _this.com = data;
        });
    };
    CollegePage.prototype.top_5_htm = function () {
        var _this = this;
        this.authPro.top_5_college('hmt').then(function (data) {
            //console.log(data);
            _this.hmt = data;
        });
    };
    CollegePage.prototype.top_5_mass = function () {
        var _this = this;
        this.authPro.top_5_college('mass').then(function (data) {
            //console.log(data);
            _this.mass = data;
        });
    };
    CollegePage.prototype.top_5_sci = function () {
        var _this = this;
        this.authPro.top_5_college('sci').then(function (data) {
            //console.log(data);
            _this.sci = data;
        });
    };
    //top_10_uni start
    CollegePage.prototype.top_10_university = function () {
        var _this = this;
        this.authPro.top_10_uni('university').then(function (data) {
            //console.log(data);
            _this.university = data;
        });
    };
    //top_10_uni end
    CollegePage.prototype.viewItem = function (data) {
        this.navCtrl.push(DetailsPage, {
            item: data
        });
    };
    CollegePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-college',
            templateUrl: 'college.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AuthProvider, LoadingController])
    ], CollegePage);
    return CollegePage;
}());
export { CollegePage };
//# sourceMappingURL=college.js.map