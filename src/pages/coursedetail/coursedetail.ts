import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalProvider } from '../../providers/global/global';


@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {

  imgPath: any;
  getcid: number; //iกำหนดตัวแปร รับค่า courseid
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public webApi: WebapiServiceProvider,
    public global: GlobalProvider) {

    //set global variable
    this.imgPath = this.global.baseURLAPI;
    this.getcid = this.navParams.get('cid');
  }

  ionViewDidLoad() {
    this.webApi.getData('feed_course_detail.php?cid=' + this.getcid).then((result) => {
      console.log(result);
      this.responseData = result;
    }, (error) => {
      console.log(error);
    });
  }

}
