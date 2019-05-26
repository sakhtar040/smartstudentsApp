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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PapersPage } from '../papers/papers';
var LevelPage = /** @class */ (function () {
    function LevelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eid = navParams.get('data');
        this.levels = ['1', '2', '3'];
    }
    LevelPage.prototype.papers = function (data_level, data_eid) {
        this.navCtrl.push(PapersPage, {
            examid: data_eid,
            lid: data_level
        });
    };
    LevelPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-level',
            templateUrl: 'level.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], LevelPage);
    return LevelPage;
}());
export { LevelPage };
//# sourceMappingURL=level.js.map