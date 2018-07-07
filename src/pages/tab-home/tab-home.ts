import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the TabHomePage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  userDetail: any;
  loginStatus: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App) {

    //การอ่านค่าจาก local storage
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data == null) {
      this.userDetail = "{fullname:'Your are guest'}";
      this.loginStatus = true;
    }else{
      this.userDetail = data.userData;
      this.loginStatus = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  register() {
    //การ push ปกติจะไม่สวยงามสำหรับ tabmenu
    // this.navCtrl.push(RegisterPage);
    //เปิดหน้าใหม่แบบไม่เอา tabs menu ที่สร้างไว้ โดยใช้ function App , คำสั่ง app.getRootNav().push(page)
    this.app.getRootNav().push(RegisterPage);
  }

  login() {
    //  alert("okk")
    this.app.getRootNav().push(LoginPage);
  }

  logout(){

    //delete storage
   localStorage.removeItem('userData');
   //reload page
   this.navCtrl.setRoot(TabsPage);
   
  }
}
