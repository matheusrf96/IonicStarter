import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { AlertasPage } from '../pages/alertas/alertas';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  @ViewChild(Nav) nav: Nav;
 
  pages: Array<{title: string, component: any}>;
    
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public fcm: FCM, private push: Push) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Meus Contatos', component: ListPage },
      { title: 'Alertas Recebidos', component: MensagemPage },
      { title: 'Alertas Enviados', component: AlertasPage },
      { title: 'Logout', component: LoginPage },
    ];

    this.pushSetup();
    
  }

  pushSetup(){
    const options: PushOptions = {
      android: {
        senderID: '203546533299'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };
   
    const pushObject: PushObject = this.push.init(options);
    
    
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    
    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

    console.log('PUSH ENVIADO');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
