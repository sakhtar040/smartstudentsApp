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
import { AuthProvider } from '../../providers/auth/auth';
import { SearchPage } from '../search/search';
import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';
var SchoolPage = /** @class */ (function () {
    function SchoolPage(navCtrl, navParams, modalCtrl, authPro, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.loading = loading;
        this.logo_url = "http://smartstudents.co.in/org_images/";
        this.image = "http://smartstudents.co.in/avator/";
        this.show_day_data = true;
        this.show_daycum_data = false;
        this.show_board_data = false;
        var loader = this.loading.create({
            content: 'loading',
        });
        loader.present();
        //top_10_uni
        this.top_10_school();
        //top_5_college start
        //day school
        this.day_coed();
        this.day_boys();
        this.day_girl();
        //daycum
        this.daycum_coed();
        this.daycum_boys();
        this.daycum_girl();
        //board
        this.board_coed();
        this.board_boys();
        this.board_girl();
        //top_5_college ends
        this.list = [
            'Day',
            'Day-Cum',
            'Boarding'
        ];
        setTimeout(function () {
            loader.dismiss();
        }, 1200);
    }
    SchoolPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    SchoolPage.prototype.searchPage = function () {
        this.navCtrl.push(SearchPage);
    };
    //top_10_uni start
    SchoolPage.prototype.top_10_school = function () {
        var _this = this;
        this.authPro.top_10_sch('school').then(function (data) {
            //console.log(data);
            _this.schools = data;
        });
    };
    //top_10_uni end
    SchoolPage.prototype.select = function (item) {
        this.selected = item;
        if (item == 'Day') {
            this.show_day_data = true;
            this.show_daycum_data = false;
            this.show_board_data = false;
        }
        if (item == 'Day-Cum') {
            this.show_day_data = false;
            this.show_daycum_data = true;
            this.show_board_data = false;
        }
        if (item == 'Boarding') {
            this.show_day_data = false;
            this.show_daycum_data = false;
            this.show_board_data = true;
        }
    };
    ;
    SchoolPage.prototype.isActive = function (item) {
        return this.selected === item;
    };
    ;
    SchoolPage.prototype.show_day = function () {
        this.show_day_data = true;
        this.show_daycum_data = false;
        this.show_board_data = false;
    };
    SchoolPage.prototype.show_daycum = function () {
        this.show_day_data = false;
        this.show_board_data = false;
        this.show_daycum_data = true;
    };
    SchoolPage.prototype.show_board = function () {
        this.show_day_data = false;
        this.show_daycum_data = false;
        this.show_board_data = true;
    };
    //day
    SchoolPage.prototype.day_coed = function () {
        var _this = this;
        this.authPro.top_5_school('day_coed').then(function (data) {
            //console.log(data);
            _this.day__coed = data;
        });
    };
    SchoolPage.prototype.day_boys = function () {
        var _this = this;
        this.authPro.top_5_school('day_boys').then(function (data) {
            //console.log(data);
            _this.day__boys = data;
        });
    };
    SchoolPage.prototype.day_girl = function () {
        var _this = this;
        this.authPro.top_5_school('day_girl').then(function (data) {
            //console.log(data);
            _this.day__girl = data;
        });
    };
    //daycum
    SchoolPage.prototype.daycum_coed = function () {
        var _this = this;
        this.authPro.top_5_school('daycum_coed').then(function (data) {
            //console.log(data);
            _this.daycum__coed = data;
        });
    };
    SchoolPage.prototype.daycum_boys = function () {
        var _this = this;
        this.authPro.top_5_school('daycum_boys').then(function (data) {
            //console.log(data);
            _this.daycum__boys = data;
        });
    };
    SchoolPage.prototype.daycum_girl = function () {
        var _this = this;
        this.authPro.top_5_school('daycum_girl').then(function (data) {
            //console.log(data);
            _this.daycum__girl = data;
        });
    };
    //board
    SchoolPage.prototype.board_coed = function () {
        var _this = this;
        this.authPro.top_5_school('board_coed').then(function (data) {
            //console.log(data);
            _this.board__coed = data;
        });
    };
    SchoolPage.prototype.board_boys = function () {
        var _this = this;
        this.authPro.top_5_school('board_boys').then(function (data) {
            //console.log(data);
            _this.board__boys = data;
        });
    };
    SchoolPage.prototype.board_girl = function () {
        var _this = this;
        this.authPro.top_5_school('board_girl').then(function (data) {
            //console.log(data);
            _this.board__girl = data;
        });
    };
    SchoolPage.prototype.viewItem = function (data) {
        this.navCtrl.push(DetailsPage, {
            item: data
        });
    };
    SchoolPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-school',
            templateUrl: 'school.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AuthProvider, LoadingController])
    ], SchoolPage);
    return SchoolPage;
}());
export { SchoolPage };
//# sourceMappingURL=school.js.map