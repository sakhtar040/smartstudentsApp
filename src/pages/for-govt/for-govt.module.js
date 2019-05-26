var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForGovtPage } from './for-govt';
var ForGovtPageModule = /** @class */ (function () {
    function ForGovtPageModule() {
    }
    ForGovtPageModule = __decorate([
        NgModule({
            declarations: [
                ForGovtPage,
            ],
            imports: [
                IonicPageModule.forChild(ForGovtPage),
            ],
        })
    ], ForGovtPageModule);
    return ForGovtPageModule;
}());
export { ForGovtPageModule };
//# sourceMappingURL=for-govt.module.js.map