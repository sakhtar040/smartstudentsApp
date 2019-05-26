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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
var UniversityRegisterPage = /** @class */ (function () {
    function UniversityRegisterPage(navCtrl, navParams, authPro, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authPro = authPro;
        this.alertCtrl = alertCtrl;
        this.orgData = {
            "org_type": "",
            "org_name": "",
            "name": "",
            "contact": "",
            "org_email": "",
            "org_pass": "",
            "org_pass2": "",
            "org_state": "",
            "org_city": "",
            "org_logo": "",
            "org_cover": "",
            "org_courses": "",
            "org_e_type": "",
            "org_estb": "",
            "org_aff": "",
            "org_url": "",
            "org_contact": ""
        };
        this.state_reg();
        this.courses();
    }
    UniversityRegisterPage.prototype.state_reg = function () {
        var _this = this;
        this.authPro.state('state').then(function (data) {
            _this.state_data = data;
        });
    };
    UniversityRegisterPage.prototype.courses = function () {
        var _this = this;
        this.authPro.all_courses('all_courses').then(function (data) {
            _this.courses_data = data;
        });
    };
    UniversityRegisterPage.prototype.sch_register = function () {
        var _this = this;
        this.authPro.org_register(this.orgData, 'org_signup').then(function (result) {
            _this.responseData = result;
            if (result) {
                var alert_1 = _this.alertCtrl.create({
                    message: 'You are Register Successfully, Please now login',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.popToRoot();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log('Error');
        });
    };
    UniversityRegisterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-university-register',
            templateUrl: 'university-register.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthProvider, AlertController])
    ], UniversityRegisterPage);
    return UniversityRegisterPage;
}());
export { UniversityRegisterPage };
//# sourceMappingURL=university-register.js.map