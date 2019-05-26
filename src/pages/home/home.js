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
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { SchoolPage } from '../school/school';
import { CoachingPage } from '../coaching/coaching';
import { CollegePage } from '../college/college';
import { CounsellingPage } from '../counselling/counselling';
import { ExamPage } from '../exam/exam';
import { StudyabroadPage } from '../studyabroad/studyabroad';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { DetailsPage } from '../details/details';
import { EducationloanPage } from '../educationloan/educationloan';
import { ForStudentsPage } from '../for-students/for-students';
import { ForSchoolPage } from '../for-school/for-school';
import { ForGovtPage } from '../for-govt/for-govt';
import { ForCollegesPage } from '../for-colleges/for-colleges';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AdvertisePage } from '../advertise/advertise';
import { Network } from '@ionic-native/network';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, network, modalCtrl, authPro, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.modalCtrl = modalCtrl;
        this.authPro = authPro;
        this.loading = loading;
        this.show_day_data = true;
        this.show_daycum_data = false;
        this.show_board_data = false;
        this.logo_url = "http://smartstudents.co.in/org_images/";
        this.image = "http://smartstudents.co.in/avator/";
        this.cou = true;
        this.content = false;
        var loader = this.loading.create({
            content: 'loading',
        });
        loader.present();
        //top_10_uni
        this.top_10_university();
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
        this.courses = ['ENGINEERING', 'MEDICAL', 'MANAGEMENT', 'COMMERCE', 'LAW',
            'ARCHITECTURE', 'ARTS', 'AVIATION', 'COMPUTER APPLICATION', 'DENTAL',
            'EDUCATION', 'HOTEL MANAGEMENT', 'MASS COMMUNICATION', 'PARAMEDICAL', 'PHARMACY',
            'SCIENCE', 'VOCATIONAL COURSES', 'VETERINARY SCIENCE'];
        this.e_c = ['Bachelor of Technology [B.Tech]', 'Graduate Marine Engineering [GME]',
            'Master of Engineering [ME]', 'Master of Technology [M.Tech]'];
        this.m_c = ['Bachelor of Medicine, Bachelor of Surgery (MBBS)', 'Bachelor of Science[B.Sc]',
            'Bachelor of Ayurvedic Medical Sciences [BAMS]', 'Bachelor of Homeopathic Medicine & Surgery [BHMS]',
            'Bachelor of Science[B.Sc]', 'Bachelor of Occupational Therapy', 'Bachelor of Physiotherapy [BPT]',
            'Bachelor in Audiology and Speech-Language Pathology[BASLP]', 'Doctorate of Medicine [MD]',
            'Master of Surgery [MS]', 'Master of Physiotherapy [MPT]', 'Master of Science [M.Sc]', 'Master of Chirurgiae [M.Ch]'];
        this.mb_c = ['Bachelor of Business Administration [BBA]', 'Bachelor of Business Studies [BBS]',
            'Master of Business Administration [MBA]', 'Master in Management Studies [MMS]', 'Executive Master of Business Administration [EMBA]'];
        this.l_c = ['Bachelor of Laws [L.L.B.]', 'Bachelor of Arts + Bachelor of Laws [B.A.L.L.B.]',
            'Master of Laws [L.L.M.]', 'Doctor of Philosophy in Law', 'Doctor of Laws [LL.D.]'];
        this.com_c = ['Bachelor of Commerce [B.Com]', 'Master of Commerce [M.Com]', 'Master of Finance and Control [MFC]',
            'Master of Business Economics [MBE]', 'Management Aptitude Test (MAT)', 'Indian Institute of Foreign Trade (IIFT) Exam', 'ICFAI Business School Aptitude Test (IBSAT)', 'Maharashtra Common Entrance Test (MAH-CET)'];
        this.arc_c = ['Bachelor of Architecture [B.Arch]', 'Master of Architecture [M.Arch.]', 'Bachelor of Planning', 'Master of Planning [M.Plan]'];
        this.arts_c = ['Bachelor of Arts [BA] {Hons.}', 'Bachelor of Arts [BA]', 'Master of Arts [MA]', 'Bachelor of Fine Arts [BFA]', 'Master of Communication & Journalism (MCJ)'];
        this.avia_c = ['Bachelor of Business Administration (BBA)(Aviation)', 'Bachelor of Science [B.Sc] (Aviation)', 'Master of Science [M.Sc] (Aviation)'];
        this.capp_c = ['Bachelor of Computer Applications [B.C.A.]', 'Master of Computer Applications [M.C.A]', 'Ph.D. (Information Technology)'];
        this.den_c = ['Bachelor of Dental Science [BDS]', 'Master of Dental Sciences [MDS]'];
        this.edu_c = ['Bachelor of Education [B.Ed]', 'Master of Education [M.Ed]', 'Bachelor of Physical Education [B.P.Ed]', 'Master of Physical Education [M.P.Ed]'];
        this.htm_c = ['', '', '', ''];
        setTimeout(function () {
            loader.dismiss();
        }, 1000);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                subTitle: 'Internet Connection is not Present, Please connect with internet'
            });
            alert.present();
        }, function (error) { return console.error(error); });
    };
    HomePage.prototype.select = function (item) {
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
    HomePage.prototype.isActive = function (item) {
        return this.selected === item;
    };
    ;
    HomePage.prototype.select_course = function (item) {
        this.selected_course = item;
        this.cou = false;
        this.content = true;
    };
    ;
    HomePage.prototype.isActive_course = function (item) {
        return this.selected_course === item;
    };
    ;
    HomePage.prototype.resetContent = function () {
        this.content = false;
        this.cou = true;
        this.selected_course = '';
    };
    HomePage.prototype.show_day = function () {
        this.show_day_data = true;
        this.show_daycum_data = false;
        this.show_board_data = false;
    };
    HomePage.prototype.show_daycum = function () {
        this.show_day_data = false;
        this.show_board_data = false;
        this.show_daycum_data = true;
    };
    HomePage.prototype.show_board = function () {
        this.show_day_data = false;
        this.show_daycum_data = false;
        this.show_board_data = true;
    };
    HomePage.prototype.searchPage = function () {
        this.navCtrl.push(SearchPage);
    };
    HomePage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(LoginPage);
        modal.present();
    };
    HomePage.prototype.school = function () {
        this.navCtrl.push(SchoolPage);
    };
    HomePage.prototype.coaching = function () {
        this.navCtrl.push(CoachingPage);
    };
    HomePage.prototype.college = function () {
        this.navCtrl.push(CollegePage);
    };
    HomePage.prototype.counselling = function () {
        this.navCtrl.push(CounsellingPage);
    };
    HomePage.prototype.exams = function () {
        this.navCtrl.setRoot(ExamPage);
    };
    HomePage.prototype.studyabroad = function () {
        this.navCtrl.push(StudyabroadPage);
    };
    HomePage.prototype.loan = function () {
        this.navCtrl.push(EducationloanPage);
    };
    HomePage.prototype.for_school = function () {
        this.navCtrl.push(ForSchoolPage);
    };
    HomePage.prototype.for_clg = function () {
        this.navCtrl.push(ForCollegesPage);
    };
    HomePage.prototype.for_student = function () {
        this.navCtrl.push(ForStudentsPage);
    };
    HomePage.prototype.for_govt = function () {
        this.navCtrl.push(ForGovtPage);
    };
    HomePage.prototype.about = function () {
        this.navCtrl.push(AboutPage);
    };
    HomePage.prototype.contact = function () {
        this.navCtrl.push(ContactPage);
    };
    HomePage.prototype.advertise = function () {
        this.navCtrl.push(AdvertisePage);
    };
    //top_10_uni start
    HomePage.prototype.top_10_university = function () {
        var _this = this;
        this.authPro.top_10_uni('university').then(function (data) {
            //console.log(data);
            _this.university = data;
        });
    };
    //day
    HomePage.prototype.day_coed = function () {
        var _this = this;
        this.authPro.top_5_school('day_coed').then(function (data) {
            //console.log(data);
            _this.day__coed = data;
        });
    };
    HomePage.prototype.day_boys = function () {
        var _this = this;
        this.authPro.top_5_school('day_boys').then(function (data) {
            //console.log(data);
            _this.day__boys = data;
        });
    };
    HomePage.prototype.day_girl = function () {
        var _this = this;
        this.authPro.top_5_school('day_girl').then(function (data) {
            //console.log(data);
            _this.day__girl = data;
        });
    };
    //daycum
    HomePage.prototype.daycum_coed = function () {
        var _this = this;
        this.authPro.top_5_school('daycum_coed').then(function (data) {
            //console.log(data);
            _this.daycum__coed = data;
        });
    };
    HomePage.prototype.daycum_boys = function () {
        var _this = this;
        this.authPro.top_5_school('daycum_boys').then(function (data) {
            //console.log(data);
            _this.daycum__boys = data;
        });
    };
    HomePage.prototype.daycum_girl = function () {
        var _this = this;
        this.authPro.top_5_school('daycum_girl').then(function (data) {
            //console.log(data);
            _this.daycum__girl = data;
        });
    };
    //board
    HomePage.prototype.board_coed = function () {
        var _this = this;
        this.authPro.top_5_school('board_coed').then(function (data) {
            //console.log(data);
            _this.board__coed = data;
        });
    };
    HomePage.prototype.board_boys = function () {
        var _this = this;
        this.authPro.top_5_school('board_boys').then(function (data) {
            //console.log(data);
            _this.board__boys = data;
        });
    };
    HomePage.prototype.board_girl = function () {
        var _this = this;
        this.authPro.top_5_school('board_girl').then(function (data) {
            //console.log(data);
            _this.board__girl = data;
        });
    };
    HomePage.prototype.viewItem = function (uni) {
        this.navCtrl.push(DetailsPage, {
            item: uni
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, AlertController, Network, ModalController, AuthProvider, LoadingController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map