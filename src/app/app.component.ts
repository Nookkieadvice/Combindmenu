import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';

//push noti
import { FCM } from '@ionic-native/fcm';
import { ShowpushdetailPage } from '../pages/showpushdetail/showpushdetail';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //เอาแท็บทุกแท็บมาโชว์
  rootPage: any = TabsPage;


  pages: Array<{ title: string, component: any, icon: String }>;


  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private fcm: FCM,
    public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation เมนูด้านข้าง
    this.pages = [
      { title: 'ตารางอบรม', component: SideSchedulePage, icon: "md-calendar" },
      { title: 'ผลงานของเรา', component: SidePortfolioPage, icon: "md-image" },
      { title: 'ช่องทางการชำระเงิน', component: SidePaymentPage, icon: "md-cash" },
      { title: 'ตั้งค่าระบบ', component: SideSettingPage, icon: "md-settings" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (!this.platform.is('core')) {

        //push noti with firebase
        //register device เพื่อรับ token 

        this.fcm.subscribeToTopic('all');
        this.fcm.getToken().then(token => {
          localStorage.setItem('token_key', token);
          alert(token);
        });
        //รับข้อมูลการ push noti
        this.fcm.onNotification().subscribe(data => {

          //backqround mode 
          if (data.wasTapped) {
            this.nav.push(ShowpushdetailPage, { sid: data.pid, title: data.title })
          } else {

            //foreground mode
            //alert(JSON.stringify(data));
            let alertCtrl = this.alertCtrl.create({
              title: data.title,
              subTitle: data.body,
              message: 'pid=' + data.pid + 'groub=' + data.groub,
              buttons: [{
                text: 'ดูรายละเอียด',
                handler: () => {
                  this.nav.push('SlideSchedulePage', { sid: data.pid });
                }
              }
              ],
              enableBackdropDismiss: false
            });
            alertCtrl.present();
          }
        });
      }
    });
  }

  openPage(page) {

    this.nav.push(page.component);
  }
}
