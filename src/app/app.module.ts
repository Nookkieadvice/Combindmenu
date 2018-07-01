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
import {SidePaymentPage} from '../pages/side-payment/side-payment';
import {SidePortfolioPage} from '../pages/side-portfolio/side-portfolio';
import {SideSchedulePage} from '../pages/side-schedule/side-schedule';
import {SideSettingPage} from '../pages/side-setting/side-setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    SideSettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    SideSettingPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
