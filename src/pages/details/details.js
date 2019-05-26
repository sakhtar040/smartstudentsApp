var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Slides } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, loading, authPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.authPro = authPro;
        this.logo_url = "http://smartstudents.co.in/org_images/";
        this.tabs = '0';
        var loader = this.loading.create({
            content: 'loading',
        });
        loader.present();
        this.item = navParams.get('item');
        this.type = this.item.org_type;
        setTimeout(function () {
            loader.dismiss();
        }, 1500);
        this.org_courses(this.item);
        this.org_review(this.item);
        this.similar_org(this.item.org_id, this.type);
        this.org_gallery(this.item);
        this.org_faculty(this.item);
        if (this.item.org_e_type == '0') {
            this.org_type = 'Public';
        }
        else {
            this.org_type = 'Private';
        }
    }
    DetailsPage_1 = DetailsPage;
    DetailsPage.prototype.selectTab = function (index) {
        this.pageSlider.slideTo(index);
    };
    DetailsPage.prototype.changeWillSlide = function ($event) {
        this.tabs = $event._snapIndex.toString();
    };
    DetailsPage.prototype.org_courses = function (item) {
        var _this = this;
        this.authPro.courses(this.item.org_id).then(function (data) {
            _this.courses_data = data;
        });
    };
    DetailsPage.prototype.org_gallery = function (item) {
        var _this = this;
        this.authPro.gallery(this.item.org_id).then(function (data) {
            _this.gallery_data = data;
        });
    };
    DetailsPage.prototype.org_faculty = function (item) {
        var _this = this;
        this.authPro.faculty(this.item.org_id).then(function (data) {
            _this.faculty_data = data;
        });
    };
    DetailsPage.prototype.org_review = function (item) {
        var _this = this;
        this.authPro.reviews(this.item.org_id).then(function (data) {
            _this.review_data = data;
        });
    };
    DetailsPage.prototype.apply = function () {
        console.log('Apply');
    };
    DetailsPage.prototype.getdetails = function () {
        console.log('Get Details');
    };
    DetailsPage.prototype.similar_org = function (item, type) {
        var _this = this;
        this.authPro.similar_auth(this.item.org_id, this.item.org_type).then(function (data) {
            _this.similar_data = data;
        });
    };
    DetailsPage.prototype.viewItem = function (data) {
        this.navCtrl.push(DetailsPage_1, {
            item: data
        });
    };
    DetailsPage.prototype.openModal = function (name) {
        console.log(name);
    };
    __decorate([
        ViewChild('pageSlider'),
        __metadata("design:type", Slides)
    ], DetailsPage.prototype, "pageSlider", void 0);
    DetailsPage = DetailsPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-details',
            templateUrl: 'details.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, LoadingController, AuthProvider])
    ], DetailsPage);
    return DetailsPage;
    var DetailsPage_1;
}());
export { DetailsPage };
//# sourceMappingURL=details.js.map