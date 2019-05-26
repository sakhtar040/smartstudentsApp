import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let url = "http://smartstudents.co.in/smartstudents_api/";
let search_url = "http://smartstudents.co.in/smartstudents_api/search.php";
let city_url = "http://smartstudents.co.in/smartstudents_api/city.php";
let paper_url = "http://smartstudents.co.in/smartstudents_api/paper.php";
let ques_url = "http://smartstudents.co.in/smartstudents_api/questions.php";
let ques_count = "http://smartstudents.co.in/smartstudents_api/question_count.php";
let ques_cat = "http://smartstudents.co.in/smartstudents_api/question_cat.php";
let course_url = "http://smartstudents.co.in/smartstudents_api/courses.php";
let review_url = "http://smartstudents.co.in/smartstudents_api/reviews.php";
let sep_review_url = "http://smartstudents.co.in/smartstudents_api/sep_reviews.php";
let org_info = "http://smartstudents.co.in/smartstudents_api/info.php";
let similar_url = "http://smartstudents.co.in/smartstudents_api/similar.php";
let gallery_url = "http://smartstudents.co.in/smartstudents_api/gallery.php";
let faculty_url = "http://smartstudents.co.in/smartstudents_api/faculty.php";
let user_profile = "http://smartstudents.co.in/smartstudents_api/profile.php";
let top_clg = "http://smartstudents.co.in/smartstudents_api/home_courses.php/";
let user_reviews = "http://smartstudents.co.in/smartstudents_api/user_reviews.php/";

@Injectable()
export class AuthProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  del_review(id){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.post(user_reviews+'?del='+id,opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  profile(email){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(user_profile+'?email='+email, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  faculty(item){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(faculty_url+'?id='+item, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  gallery(item){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(gallery_url+'?id='+item, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  similar_auth(item,type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(similar_url+'?id='+item+'&type='+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  reviews(item){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(review_url+'?id='+item, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  user_reviews(item){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(user_reviews+'?email='+item, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  sep_reviews(item){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(sep_review_url+'?id='+item, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  org_info(item){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(org_info+'?id='+item, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  //courses
  courses(item){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(course_url+'?id='+item, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  //question_cat
  cat_ques(eid){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(ques_cat+'?e='+eid, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  //question_count
  count_ques(eid,lid,pid){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(ques_count+'?e='+eid+'&l='+lid+'&p='+pid, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  //questions
  question(eid,lid,pid,qid){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(ques_url+'?e='+eid+'&l='+lid+'&p='+pid+'&q='+qid, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  exam_courses(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  all_courses(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  //papers
  paper(eid,lid){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve,reject) => {
      this.http.get(paper_url+'?e='+eid+'&l='+lid, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  //top_5_college start
  top_5_college(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }
  //top_5_college end

  //top_10_uni start
  top_10_uni(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }
  //top_10_uni end

  //top_college start
  top_college(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(top_clg+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }
  //top_college end

  //top_10_sch start
  top_10_sch(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }
  //top_10_sch end

  //top_5_schools start
  top_5_school(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }
  //top_5_schools end

  //top_5_coaching start
  top_5_coaching(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }
  //top_5_coaching end

  //search start
  search_org(o_type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(search_url+'?type='+o_type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }
  //search end

  //register
  student_register(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  update_details(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  write_review(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  apply_org(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  org_register(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  signin(credentials,type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  forgot_password(credentials,type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  state(type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(url+type, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  city(){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });
    return new Promise((resolve, reject) => {
      this.http.get(city_url, opt).map(res => res.json().data)
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      }, (err) => {
        reject(err);
      });
    });
  }

  counselling(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  educationloan(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  contact(credentials, type){
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set("Accept", "application/json; charset-utf-8");
    myHeaders.append("Content-type", "application/json; charset-utf-8");
    opt = new RequestOptions({
      headers: myHeaders
    });

    return new Promise((resolve, reject) => {
      this.http.post(url+type, JSON.stringify(credentials), opt)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
