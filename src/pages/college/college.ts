import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import {SearchPage} from '../search/search';
import { AuthProvider } from '../../providers/auth/auth';
import {DetailsPage} from '../details/details';
import { LoginPage } from '../login/login';
import {ContactPage} from '../contact/contact';
import {PrivacyPage} from '../privacy/privacy';
import {TermsPage} from '../terms/terms';
import {ProfileTabPage} from '../profile-tab/profile-tab';

@Component({
  selector: 'page-college',
  templateUrl: 'college.html',
})
export class CollegePage {
  //top_5_college
  public engg;
  public medi;
  public laws;
  public mbas;
  public com;
  public sci;
  public edu;
  public capp;
  public mass;
  public hmt;
  public arc;
  public avia;

  logo_url = "http://smartstudents.co.in/org_images/";
  image = "http://smartstudents.co.in/avator/";

  //top_10_uni
  public university;

  courses: any;
  selected_course: any;
  cou = true;
  content = false;
  s_course: any;
  s_exam: any;
  e_c: any; m_c: any; mb_c: any; com_c: any; l_c: any; arc_c: any; arts_c: any; avia_c: any; capp_c: any;
  den_c: any; edu_c: any; htm_c: any; mass_c: any; para_c: any; phar_c: any; sci_c: any; vcou_c: any; vsci_c: any;

  e_e: any; m_e: any; mb_e: any; com_e: any; l_e: any; arc_e: any; arts_e: any; avia_e: any; capp_e: any;
  den_e: any; edu_e: any; htm_e: any; mass_e: any; para_e: any; phar_e: any; sci_e: any; vcou_e: any; vsci_e: any;

  public top_clg_c;
  public top_clg_link: any;
  title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authPro: AuthProvider, public loading: LoadingController) {
    
    let loader = this.loading.create({
      content: 'loading',
    });

    loader.present();

    //top_5_college start
    this.top_5_eng();
    this.top_5_med();
    this.top_5_law();
    this.top_5_mba();
    this.top_5_comm();
this.top_5_arc();
this.top_5_avia();
this.top_5_capp();
this.top_5_edu();
this.top_5_htm();
this.top_5_mass();
this.top_5_sci();

    //top_5_college ends

    //top_10_uni
    this.top_10_university();

    this.link_def();

    this.courses = ['ENGINEERING','MEDICAL','MANAGEMENT','COMMERCE','LAW',
      'ARCHITECTURE','ARTS','AVIATION','COMPUTER APPLICATION','DENTAL',
      'EDUCATION','HOTEL MANAGEMENT','MASS COMMUNICATION','PARAMEDICAL','PHARMACY',
      'SCIENCE','VOCATIONAL COURSES','VETERINARY SCIENCE'];

    this.e_c = ['Bachelor of Technology [B.Tech]','Graduate Marine Engineering [GME]',
        'Master of Engineering [ME]','Master of Technology [M.Tech]'];
    this.e_e = ['IIT JEE','BITSAT','AIEEE','VITEE','UPSEE','IITH PGEE','GATE','SRMJEEE','GAT PGT','CUCET'];

    this.m_c = ['Bachelor of Medicine, Bachelor of Surgery (MBBS)','Bachelor of Science[B.Sc]',
        'Bachelor of Ayurvedic Medical Sciences [BAMS]','Bachelor of Homeopathic Medicine & Surgery [BHMS]',
        'Bachelor of Science[B.Sc]','Bachelor of Occupational Therapy','Bachelor of Physiotherapy [BPT]',
        'Bachelor in Audiology and Speech-Language Pathology[BASLP]','Doctorate of Medicine [MD]',
        'Master of Surgery [MS]','Master of Physiotherapy [MPT]','Master of Science [M.Sc]','Master of Chirurgiae [M.Ch]'];
    this.m_e = ['All India Institute of Medical Sciences (AIIMS MBBS)','All India Pre-Medical Test (AIPMT)',
        'Armed Forces Medical College (AFMC ENTRANCE)','BHU All India PMT','CMC-Vellore','Dr. M.G.R. Educational and Research Institute University',
        'All India Post Graduate Medical Entrance Examination[AIPGMEE ]','NITTE University All India under Graduate Entrance Test[NUUGET]'];

    this.mb_c = ['Bachelor of Business Administration [BBA]','Bachelor of Business Studies [BBS]',
        'Master of Business Administration [MBA]','Master in Management Studies [MMS]','Executive Master of Business Administration [EMBA]'];
    this.mb_e = ['Common Admission Test (CAT)','Common Management Admission Test (CMAT)','Xavier Aptitude Test (XAT)','Symbiosis National Aptitude (SNAP)','Management Aptitude Test (MAT)','Indian Institute of Foreign Trade (IIFT) Exam','ICFAI Business School Aptitude Test (IBSAT)','Maharashtra Common Entrance Test (MAH-CET)'];

    this.l_c = ['Bachelor of Laws [L.L.B.]','Bachelor of Arts + Bachelor of Laws [B.A.L.L.B.]',
        'Master of Laws [L.L.M.]','Doctor of Philosophy in Law','Doctor of Laws [LL.D.]'];
    this.l_e = ['Common Law Admission Test (CLAT)','All India Law Entrance Test (AILET)','AIBE (All India Bar Exam)','Law School Admission Test (LSAT)','AMU Law Entrance Exam)'];

    this.com_c = ['Bachelor of Commerce [B.Com]','Master of Commerce [M.Com]','Master of Finance and Control [MFC]',
        'Master of Business Economics [MBE]'];
    this.com_e = ['Management Aptitude Test (MAT)','Indian Institute of Foreign Trade (IIFT) Exam','ICFAI Business School Aptitude Test (IBSAT)','Maharashtra Common Entrance Test (MAH-CET)'];

    this.arc_c = ['Bachelor of Architecture [B.Arch]','Master of Architecture [M.Arch.]','Bachelor of Planning','Master of Planning [M.Plan]'];
    this.arc_e = ['National Aptitude Test In Architecture (NATA)','Joint Entrance Exam – Main (AAT)','Common Entrance Examination for Design(CEED)','Gitam Admission Test(GATE)','Uttar Pradesh State Entrance Examination (UPSEE))'];

    this.arts_c = ['Bachelor of Arts [BA] {Hons.}','Bachelor of Arts [BA]','Master of Arts [MA]','Bachelor of Fine Arts [BFA]','Master of Communication & Journalism (MCJ)'];
    this.arts_e = ['IPU CET','UP SEE','YVUCET','CUCET','TISS BAT','IIAD','DU JAT','BHU UET','JNUEE'];

    this.avia_c = ['Bachelor of Business Administration (BBA)(Aviation)','Bachelor of Science [B.Sc] (Aviation)','Master of Science [M.Sc] (Aviation)'];
    this.avia_e = ['A.I.A.E.E.','I.I.A.E.','I.I.S.A.T.','C.D.S.','N.D.A.','H.I.T.S.E.E'];

    this.capp_c = ['Bachelor of Computer Applications [B.C.A.]','Master of Computer Applications [M.C.A]','Ph.D. (Information Technology)'];
    this.capp_e = ['AIMCET','BHU PET MCA','JECA','JNU MCA','MHT CET','NIMCET','BIT Mesra','LUCSAT'];

    this.den_c = ['Bachelor of Dental Science [BDS]','Master of Dental Sciences [MDS]'];
    this.den_e = ['AIPMT','DUMET','PIMS','AICEE','Army College of Dental Sciences PG Written Test','(NEET)/AIPMT','AIPGDEE'];

    this.edu_c = ['Bachelor of Education [B.Ed]','Master of Education [M.Ed]','Bachelor of Physical Education [B.P.Ed]','Master of Physical Education [M.P.Ed]'];
    this.edu_e = ['CSSET','Delhi University BEd Entrance Exam','MAH B.Ed CET','IPU CET','UP B.Ed JEE'];

    this.htm_c = ['Bachelor of Hospitality Management [BHM]','Bachelor of Hotel Management [BHM]',
        'Bachelor of Hotel Management and Catering Technology [BHMCT]','Master of Hotel Management [MHM]'];
    this.htm_e = ['AIHMCT WAT','AIMA UGAT','BIT Mesra Hotel Management Entrance Exam','BVP CET','DTE HMCT','Hospitality Management','HIHM','IIHM eCHAT','JET'];

    this.mass_c = ['Bachelor of Mass Communication [B.M.C.]','Bachelor of Journalism and Mass Communication [B.J.M.C.]',
        'Bachelor of Mass Media [B.M.M.]','Master of Journalism and Mass Communication [MJMC]','Ph.D. (Journalism and Mass Communication)'];
    this.mass_e = ['ACJ Entrance Exam','IPU CET','Jamia Milia Islamia Entrance Exam of Journalism','IIMC Entrance Exam','MASCOM Entrance Exam','MU-OET','Symbiosis International University(SET)','XIC OET'];

    this.para_c = ['B.Sc. Nursing (Post-Basic)','P.B.Bachelor of Science [B.Sc] (Nursing)','Bachelor of Optometry [B.Optom]',
        'Master of Science [M.Sc] (Medical Surgical Nursing)','M.Phil (Nursing)','M.Phil (Nursing)'];
    this.para_e = ['GCET','DSAT','IGNOU OPENNET','IUET','AIIMS M.Sc. Entrance Examination'];

    this.phar_c = ['Bachelor of Pharmacy [B.Pharm]','Master of Pharmacy [M.Pharm]','M.Phil [Pharmaceutics]',
        'Pharm.D','Pharm.D (Post Baccalaureate)'];
    this.phar_e = ['GPAT','TS EAMCET','KEAM','OJEE-P','MHT CET','WBJEE-Pharmacy','UPSEE-Pharmacy'];

    this.sci_c = ['Bachelor of Science [B.Sc]','Master of Science [M.Sc]','M.Phil. (Computer Science)',
        'Ph.D. (Biotechnology)','Ph.D. (Science)','Ph.D. (Anthropology)','Ph.D. (Microbiology)','Ph.D. (Microbiology)'];
    this.sci_e = ['All India Engineering Entrance Exam','BVPEEE ','NEST','IITJAM','NPAT','Indian Institute of Science Education and Research','GITAM Science Admission Test'];

    this.vcou_c = ['Bachelor of Vocational Studies [B.Voc.]','Master of Vocational Studies [M.Voc.]'];
    this.vcou_e = ['CUCET','MAT','CAT','BHU UET','UGC NET','UPSC SCRA','Assam TET'];

    this.vsci_c = ['Bachelor of Veterinary Science [BVSc]','Master of Veterinary Science [MVSc]','P.hd of Veterinary Science [MVSc]'];
    this.vsci_e = ['AIPVT','KCET','RPVT','UPVEE'];  

    setTimeout(() => {
      loader.dismiss();
    }, 1500);
  }

  ngOnInit(){
     this.top_clg(this.top_clg_link);
   }

   link_def(){
     this.top_clg_link = 'eng';
   }

  select_course(item) {
    this.selected_course = item;
    if(item == 'ENGINEERING'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.e_c;
      this.s_exam = this.e_e;
      this.top_clg_link = 'eng';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'MEDICAL'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.m_c;
      this.s_exam = this.m_e;
      this.top_clg_link = 'med';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'MANAGEMENT'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.mb_c;
      this.s_exam = this.mb_e;
      this.top_clg_link = 'mba';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'COMMERCE'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.com_c;
      this.s_exam = this.com_e;
      this.top_clg_link = 'com';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'LAW'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.l_c;
      this.s_exam = this.l_e;
      this.top_clg_link = 'law';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'ARCHITECTURE'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.arc_c;
      this.s_exam = this.arc_e;
      this.top_clg_link = 'arch';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'ARTS'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.arts_c;
      this.s_exam = this.arts_e;
      this.top_clg_link = 'arts';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'AVIATION'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.avia_c;
      this.s_exam = this.avia_e;
      this.top_clg_link = 'avia';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'COMPUTER APPLICATION'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.capp_c;
      this.s_exam = this.capp_e;
      this.top_clg_link = 'capp';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'DENTAL'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.den_c;
      this.s_exam = this.den_e;
      this.top_clg_link = 'den';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'EDUCATION'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.edu_c;
      this.s_exam = this.edu_e;
      this.top_clg_link = 'edu';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'HOTEL MANAGEMENT'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.htm_c;
      this.s_exam = this.htm_e;
      this.top_clg_link = 'htm';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'MASS COMMUNICATION'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.mass_c;
      this.s_exam = this.e_e;
      this.top_clg_link = 'mass';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'PARAMEDICAL'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.para_c;
      this.s_exam = this.mass_e;
      this.top_clg_link = 'para';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'PHARMACY'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.phar_c;
      this.s_exam = this.phar_e;
      this.top_clg_link = 'phar';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'SCIENCE'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.sci_c;
      this.s_exam = this.sci_e;
      this.top_clg_link = 'sci';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'VOCATIONAL COURSES'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.vcou_c;
      this.s_exam = this.vcou_e;
      this.top_clg_link = 'vcou';
      this.top_clg(this.top_clg_link);
    }
    if(item == 'VETERINARY SCIENCE'){
      this.title = item;
      this.cou = false;
      this.content = true;
      this.s_course = this.vsci_c;
      this.s_exam = this.vsci_e;
      this.top_clg_link = 'vsci';
      this.top_clg(this.top_clg_link);
    }
  };
  isActive_course(item) {
    return this.selected_course === item;
  };

  resetContent(){
    this.content = false;
    this.cou = true;
    this.selected_course = '';
  }

  top_clg(top_clg_link){
    this.authPro.top_college(this.top_clg_link).then(data => {
      this.top_clg_c = data;
    });
  }

  searchPage(){
    this.navCtrl.push(SearchPage);
  }

  openModal(){
    if(JSON.parse(localStorage.getItem('email'))){
      this.navCtrl.push(ProfileTabPage);
    }else{
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
    }
  }

  //top_5_eng
  top_5_eng(){
    this.authPro.top_5_college('engineering').then(data => {
      //console.log(data);
      this.engg = data;
    });
  }

  //top_5_med
  top_5_med(){
    this.authPro.top_5_college('medical').then(data => {
      //console.log(data);
      this.medi = data;
    });
  }

  //top_5_law
  top_5_law(){
    this.authPro.top_5_college('law').then(data => {
      //console.log(data);
      this.laws = data;
    });
  }

  //top_5_mba
  top_5_mba(){
    this.authPro.top_5_college('mba').then(data => {
      //console.log(data);
      this.mbas = data;
    });
  }

  top_5_capp(){
    this.authPro.top_5_college('capp').then(data => {
      //console.log(data);
      this.capp = data;
    });
  }

  top_5_edu(){
    this.authPro.top_5_college('edu').then(data => {
      //console.log(data);
      this.edu = data;
    });
  }

  top_5_arc(){
    this.authPro.top_5_college('arc').then(data => {
      //console.log(data);
      this.arc = data;
    });
  }

  top_5_avia(){
    this.authPro.top_5_college('avia').then(data => {
      //console.log(data);
      this.avia = data;
    });
  }

  top_5_comm(){
    this.authPro.top_5_college('comm').then(data => {
      //console.log(data);
      this.com = data;
    });
  }

  top_5_htm(){
    this.authPro.top_5_college('hmt').then(data => {
      //console.log(data);
      this.hmt = data;
    });
  }

  top_5_mass(){
    this.authPro.top_5_college('mass').then(data => {
      //console.log(data);
      this.mass = data;
    });
  }

  top_5_sci(){
    this.authPro.top_5_college('sci').then(data => {
      //console.log(data);
      this.sci = data;
    });
  }

  //top_10_uni start
  top_10_university(){
    this.authPro.top_10_uni('university').then(data => {
      //console.log(data);
      this.university = data;
    });
  }
  //top_10_uni end

  viewItem(data){
    this.navCtrl.push(DetailsPage, {
      item: data
    })
  }

  contact(){
    this.navCtrl.push(ContactPage);
  }
  privacy(){
    this.navCtrl.push(PrivacyPage);
  }
  terms(){
    this.navCtrl.push(TermsPage);
  }

}
