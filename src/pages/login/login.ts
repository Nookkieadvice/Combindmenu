import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = {
    "username": "",
    "password": ""
  }

  //ตัวแปรรับค่าข้อมูลจาก api
  responseDatas: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public webApi: WebapiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.push(RegisterPage);
    //this.navCtrl.setRoot(RegisterPage);
  }

  login() {
    {
      //alert( this.userData );
      //console.log(  this.userData );
      this.webApi.postData(this.userData, 'login.php').then((result) => {
        this.responseDatas = result;
        //console.log(result);
        if (this.responseDatas.userData) {
          let alert = this.alertCtrl.create({
            title: "เข้าสู่ระบบ",
            subTitle: "เข้าสู่ระบบเรียบร้อยแล้ว",
            buttons: ['Dismiss']
          });
          alert.present();
          //Save data in Local storage
          localStorage.setItem('userData',JSON.stringify( this.responseDatas ));


          //ส่งกลับไปหน้า dashboard
          this.navCtrl.setRoot(TabsPage);
        } else {
          let alert = this.alertCtrl.create({
            title: "เข้าสู่ระบบ",
            subTitle: "เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
            buttons: ['Dismiss']
          });
          alert.present();
        }
      }, (err) => {
        console.log(err);
      });
    }
  }
}
