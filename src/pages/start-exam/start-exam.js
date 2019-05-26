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
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ExamPopPage } from '../exam-pop/exam-pop';
import { AuthProvider } from '../../providers/auth/auth';
var StartExamPage = /** @class */ (function () {
    function StartExamPage(navCtrl, navParams, popCtrl, authPro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popCtrl = popCtrl;
        this.authPro = authPro;
        this.e = navParams.get('eid');
        this.l = navParams.get('lid');
        this.p = navParams.get('pid');
        this.ques_def();
        this.ques_count();
        this.ques_cat();
    }
    StartExamPage.prototype.ngOnInit = function () {
        this.questions(this.q);
    };
    StartExamPage.prototype.ques_def = function () {
        this.q = '';
    };
    StartExamPage.prototype.questions = function (q) {
        var _this = this;
        this.authPro.question(this.e.eid, this.l, this.p.pid, this.q).then(function (data) {
            _this.questions_data = data;
        });
    };
    StartExamPage.prototype.ques_count = function () {
        var _this = this;
        this.authPro.count_ques(this.e.eid, this.l, this.p.pid).then(function (data) {
            _this.count = data;
        });
    };
    StartExamPage.prototype.ques_cat = function () {
        var _this = this;
        this.authPro.cat_ques(this.e.eid).then(function (data) {
            _this.cat = data;
        });
    };
    StartExamPage.prototype.openExamPop = function (ev) {
        var popover = this.popCtrl.create(ExamPopPage);
        popover.present({
            ev: ev
        });
    };
    StartExamPage.prototype.prev = function (event, pr) {
        var x = parseInt(pr);
        if (x == 1) {
            this.disable_prev = true;
        }
        else {
            var y = x - 1;
            this.q = y;
            this.questions(this.q);
        }
    };
    StartExamPage.prototype.submit = function () {
        console.log('submit');
    };
    StartExamPage.prototype.next = function (event, qu) {
        var x = parseInt(qu);
        var y = x + 1;
        if (y <= this.count.count) {
            this.q = y;
            this.questions(this.q);
        }
        else {
            this.disable_next = true;
        }
    };
    StartExamPage.prototype.select_answer = function (event, ans) {
        console.log(ans);
    };
    StartExamPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-start-exam',
            templateUrl: 'start-exam.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController, AuthProvider])
    ], StartExamPage);
    return StartExamPage;
}());
export { StartExamPage };
//# sourceMappingURL=start-exam.js.map