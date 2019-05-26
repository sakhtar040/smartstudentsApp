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
var StudentRegisterPage = /** @class */ (function () {
    function StudentRegisterPage(navCtrl, navParams, authPro, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authPro = authPro;
        this.alertCtrl = alertCtrl;
        this.userData = { "name": "", "email": "", "contact": "", "password": "", "dob": "", "gender": "", "state": "" };
        this.state_reg();
    }
    StudentRegisterPage.prototype.stu_register = function () {
        var _this = this;
        this.authPro.student_register(this.userData, 'student_signup').then(function (result) {
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
    StudentRegisterPage.prototype.state_reg = function () {
        var _this = this;
        this.authPro.state('state').then(function (data) {
            _this.state_data = data;
            console.log(_this.state_data);
        });
    };
    StudentRegisterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-student-register',
            templateUrl: 'student-register.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthProvider, AlertController])
    ], StudentRegisterPage);
    return StudentRegisterPage;
}());
export { StudentRegisterPage };
//# sourceMappingURL=student-register.js.map