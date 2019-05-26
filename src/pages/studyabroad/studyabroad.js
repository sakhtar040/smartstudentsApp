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
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
var StudyabroadPage = /** @class */ (function () {
    function StudyabroadPage(navCtrl, authPro, modalCtrl) {
        this.navCtrl = navCtrl;
        this.authPro = authPro;
        this.modalCtrl = modalCtrl;
    }
    StudyabroadPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    StudyabroadPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-studyabroad',
            templateUrl: 'studyabroad.html',
            providers: [AuthProvider]
        }),
        __metadata("design:paramtypes", [NavController, AuthProvider, ModalController])
    ], StudyabroadPage);
    return StudyabroadPage;
}());
export { StudyabroadPage };
//# sourceMappingURL=studyabroad.js.map