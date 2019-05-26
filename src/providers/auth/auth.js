var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var url = "http://smartstudents.co.in/smartstudents_api/";
var search_url = "http://smartstudents.co.in/smartstudents_api/search.php";
var city_url = "http://smartstudents.co.in/smartstudents_api/city.php";
var paper_url = "http://smartstudents.co.in/smartstudents_api/paper.php";
var ques_url = "http://smartstudents.co.in/smartstudents_api/questions.php";
var ques_count = "http://smartstudents.co.in/smartstudents_api/question_count.php";
var ques_cat = "http://smartstudents.co.in/smartstudents_api/question_cat.php";
var course_url = "http://smartstudents.co.in/smartstudents_api/courses.php";
var review_url = "http://smartstudents.co.in/smartstudents_api/reviews.php";
var similar_url = "http://smartstudents.co.in/smartstudents_api/similar.php";
var gallery_url = "http://smartstudents.co.in/smartstudents_api/gallery.php";
var faculty_url = "http://smartstudents.co.in/smartstudents_api/faculty.php";
var user_profile = "http://smartstudents.co.in/smartstudents_api/profile.php";
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.profile = function (email) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(user_profile + '?email=' + email, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.faculty = function (item) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(faculty_url + '?id=' + item, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.gallery = function (item) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(gallery_url + '?id=' + item, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.similar_auth = function (item, type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(similar_url + '?id=' + item + '&type=' + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.reviews = function (item) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(review_url + '?id=' + item, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //courses
    AuthProvider.prototype.courses = function (item) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(course_url + '?id=' + item, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //question_cat
    AuthProvider.prototype.cat_ques = function (eid) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(ques_cat + '?e=' + eid, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //question_count
    AuthProvider.prototype.count_ques = function (eid, lid, pid) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(ques_count + '?e=' + eid + '&l=' + lid + '&p=' + pid, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //questions
    AuthProvider.prototype.question = function (eid, lid, pid, qid) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(ques_url + '?e=' + eid + '&l=' + lid + '&p=' + pid + '&q=' + qid, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.exam_courses = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.all_courses = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //papers
    AuthProvider.prototype.paper = function (eid, lid) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(paper_url + '?e=' + eid + '&l=' + lid, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //top_5_college start
    AuthProvider.prototype.top_5_college = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //top_5_college end
    //top_10_uni start
    AuthProvider.prototype.top_10_uni = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //top_10_uni end
    //top_10_sch start
    AuthProvider.prototype.top_10_sch = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //top_10_sch end
    //top_5_schools start
    AuthProvider.prototype.top_5_school = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //top_5_schools end
    //top_5_coaching start
    AuthProvider.prototype.top_5_coaching = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //top_5_coaching end
    //search start
    AuthProvider.prototype.search_org = function (o_type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(search_url + '?type=' + o_type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //search end
    //register
    AuthProvider.prototype.student_register = function (credentials, type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(url + type, JSON.stringify(credentials), opt)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.org_register = function (credentials, type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(url + type, JSON.stringify(credentials), opt)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.signin = function (credentials, type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(url + type, JSON.stringify(credentials), opt)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.state = function (type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(url + type, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.city = function () {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(city_url, opt).map(function (res) { return res.json().data; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.counselling = function (credentials, type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(url + type, JSON.stringify(credentials), opt)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.educationloan = function (credentials, type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(url + type, JSON.stringify(credentials), opt)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.contact = function (credentials, type) {
        var _this = this;
        var opt;
        var myHeaders = new Headers;
        myHeaders.set("Accept", "application/json; charset-utf-8");
        myHeaders.append("Content-type", "application/json; charset-utf-8");
        opt = new RequestOptions({
            headers: myHeaders
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(url + type, JSON.stringify(credentials), opt)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AuthProvider);
    return AuthProvider;
}());
export { AuthProvider };
//# sourceMappingURL=auth.js.map