import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListaPage } from '../pages/lista/lista';
import { ListaPessoasPage } from '../pages/lista-pessoas/lista-pessoas';
import { LoginPage } from '../pages/login/login';
import { MensagemPage } from '../pages/mensagem/mensagem';
import { AlertasPage } from '../pages/alertas/alertas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListaPage,
    ListaPessoasPage,
    LoginPage,
    MensagemPage,
    AlertasPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListaPage,
    ListaPessoasPage,
    LoginPage,
    MensagemPage,
    AlertasPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
