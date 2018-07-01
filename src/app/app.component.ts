import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //เอาแท็บทุกแท็บมาโชว์
  rootPage: any = TabsPage;


  pages: Array<{title: string, component: any, icon: String}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation เมนูด้านข้าง
    this.pages = [
      { title: 'ตารางอบรม', component: SideSchedulePage,icon: "md-calendar" },
      { title: 'ผลงานของเรา', component: SidePortfolioPage,icon: "md-image" },
      {title: 'ช่องทางการชำระเงิน' , component: SidePaymentPage,icon: "md-cash"},
      {title: 'ตั้งค่าระบบ' , component: SideSettingPage,icon: "md-settings"},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    
    this.nav.push(page.component);
  }
}
