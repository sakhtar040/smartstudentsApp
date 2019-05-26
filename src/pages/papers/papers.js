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
import { AuthProvider } from '../../providers/auth/auth';
import { MockPage } from '../mock/mock';
var PapersPage = /** @class */ (function () {
    function PapersPage(navCtrl, navParams, authPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authPro = authPro;
        this.exam = navParams.get('examid');
        this.level = navParams.get('lid');
        this.papers();
    }
    PapersPage.prototype.papers = function () {
        var _this = this;
        this.authPro.paper(this.exam.eid, this.level).then(function (data) {
            _this.paper_data = data;
        });
    };
    PapersPage.prototype.start = function (e, l, p) {
        this.navCtrl.push(MockPage, {
            eid: e,
            lid: l,
            pid: p
        });
    };
    PapersPage.prototype.retest = function (e, l, p) {
        this.navCtrl.push(MockPage, {
            eid: e,
            lid: l,
            pid: p
        });
    };
    PapersPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-papers',
            templateUrl: 'papers.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthProvider])
    ], PapersPage);
    return PapersPage;
}());
export { PapersPage };
//# sourceMappingURL=papers.js.map