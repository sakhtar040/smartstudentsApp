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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DetailsPage } from '../details/details';
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, authPro, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authPro = authPro;
        this.loading = loading;
        this.logo_url = "http://smartstudents.co.in/org_images/";
        this.searchQuery = '';
        this.list = [
            'Schools',
            'Coaching Institutes',
            'Colleges',
            'Universities'
        ];
        this.search_def();
    }
    SearchPage.prototype.ngOnInit = function () {
        this.search_org(this.o_type);
    };
    SearchPage.prototype.search_def = function () {
        this.o_type = '';
    };
    SearchPage.prototype.search_org = function (o_type) {
        var _this = this;
        this.authPro.search_org(this.o_type).then(function (data) {
            _this.posts = data;
            _this.initializeItems();
        });
    };
    SearchPage.prototype.select = function (item, event, val) {
        this.selected = item;
        if (val == 'Schools') {
            this.o_type = '1';
            this.search_org(this.o_type);
        }
        if (val == 'Coaching Institutes') {
            this.o_type = '4';
            this.search_org(this.o_type);
        }
        if (val == 'Colleges') {
            this.o_type = '2';
            this.search_org(this.o_type);
        }
        if (val == 'Universities') {
            this.o_type = '3';
            this.search_org(this.o_type);
        }
    };
    ;
    SearchPage.prototype.isActive = function (item) {
        return this.selected === item;
    };
    ;
    SearchPage.prototype.initializeItems = function () {
        this.items = this.posts;
    };
    SearchPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.org_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage.prototype.viewItem = function (data) {
        this.navCtrl.push(DetailsPage, {
            item: data
        });
    };
    SearchPage.prototype.refresh = function () {
        this.o_type = '';
        this.search_org(this.o_type);
        this.selected = false;
    };
    SearchPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-search',
            templateUrl: 'search.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthProvider, LoadingController])
    ], SearchPage);
    return SearchPage;
}());
export { SearchPage };
//# sourceMappingURL=search.js.map