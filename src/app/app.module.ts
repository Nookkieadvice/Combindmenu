import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {TabHomePage} from '../pages/tab-home/tab-home';
import {TabCoursePage} from '../pages/tab-course/tab-course';
import {TabServicePage} from '../pages/tab-service/tab-service';
import {TabActiclePage} from '../pages/tab-acticle/tab-acticle';
import {TabContactPage} from '../pages/tab-contact/tab-contact';
import {TabChatPage} from '../pages/tab-chat/tab-chat';
import {SidePaymentPage} from '../pages/side-payment/side-payment';
import {SidePortfolioPage} from '../pages/side-portfolio/side-portfolio';
import {SideSchedulePage} from '../pages/side-schedule/side-schedule';
import {SideSettingPage} from '../pages/side-setting/side-setting';
import {RegisterPage} from '../pages/register/register';
import {LoginPage} from '../pages/login/login';
import {HttpModule} from '@angular/http';
import {WebapiServiceProvider} from '../providers/webapi-service/webapi-service';
import {CoursedetailPage} from '../pages/coursedetail/coursedetail';
import { NativeAudio } from '@ionic-native/native-audio';
import { FCM } from '@ionic-native/fcm'; 
import {Device} from '@ionic-native/device';
import {ShowpushdetailPage} from '../pages/showpushdetail/showpushdetail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';

//firebase  Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyCuzmX1IUxM5gbpRe_8HexNkCXhYVMzOUk",
  authDomain: "combindchatapp-nook.firebaseapp.com",
  databaseURL: "https://combindchatapp-nook.firebaseio.com",

  projectId: "combindchatapp-nook",
  storageBucket: "combindchatapp-nook.appspot.com",
  messagingSenderId: "206263775808"
};


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabActiclePage,
    TabContactPage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    RegisterPage,
    LoginPage,
    CoursedetailPage,
    TabChatPage,
    ShowpushdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabActiclePage,
    TabContactPage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    RegisterPage,
    LoginPage,
    CoursedetailPage,
    TabChatPage,
    ShowpushdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    GlobalProvider,
    //ตระกูล native จะอยู่ใน provider เท่านั้น
    NativeAudio,
    FCM,
    Device
  ]
})
export class AppModule {}
