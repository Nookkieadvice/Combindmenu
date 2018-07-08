import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,Content } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-tab-chat',
  templateUrl: 'tab-chat.html',
})
export class TabChatPage {

  //กำหนดตัวแปรเก็บชื่อคนแชท และข้อความที่พิมพ์
  fullname: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];
  @ViewChild(Content) contentArea: Content;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public audio: NativeAudio,
    public platform: Platform) {

    const data = JSON.parse(localStorage.getItem('userData'));

    if (data == null) {
      this.fullname = 'Guest';
    } else {
      this.fullname = data.userData.fullname;
    }
    //การอ่านจาก firebase
    this._chatSubscription = this.db.list('/chat').valueChanges().subscribe((res) => {
      // console.log(res);
      //play audio when read new message
      if (!this.platform.is('core')) {
        this.audio.preloadSimple('uniqueId1', 'assets/sound/get_outto.mp3').then(null);
      }
      this.messages = res;
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {

  }

  sendMessage() {

    //ตรวจค่าว่าง
    if (this.message != '') {
      this.db.list('/chat').push({
        username: this.fullname,
        message: this.message
      }).then(() => {
        //message send
        if (!this.platform.is('core')) {
          this.audio.play('uniqueId1').then(null);
        }
        this.contentArea.scrollToBottom();
       
      }, (err) => {
        //error send
        console.log(err);
      });
      //clear chat input 
      this.message = '';
    }
  }
}
