import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabServicePage } from '../tab-service/tab-service';
import { TabActiclePage } from '../tab-acticle/tab-acticle';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  //กำหนดตัวแปรสำหรับเก็บชื่อ tabs ต่างๆที่เราสร้าง
  tab1Root: any = TabHomePage;
  tab2Root: any = TabCoursePage;
  tab3Root: any = TabServicePage;
  tab4Root: any = TabActiclePage;
  tab5Root: any = TabContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
