import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

// Rodsr pelo Cordova

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contagem;

  constructor(
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      private push: Push,
      private localNotifications: LocalNotifications,
    ) {
    this.contagem = 0;

    this.push.hasPermission()
    .then((res: any) => {
      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
      } else {
        console.log('We do not have permission to send push notifications');
      }
    });

    // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
    this.push.createChannel({
      id: "testchannel1",
      description: "My first test channel",
      // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
      importance: 3
    }).then(() => console.log('Channel created'));
    
    // Delete a channel (Android O and above)
    this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
    
    // Return a list of currently configured channels
    this.push.listChannels().then((channels) => console.log('List of channels', channels));
  }

  ionicAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alerta',
      subTitle: 'O alerta foi enviado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  ativar() {
    this.contagem++;
    //console.log('click', this.contagem);

    if(this.contagem === 1){
      document.getElementById('botao-panico').style.backgroundColor = "#e9d700";
      document.getElementById('botao-falso').style.borderColor = "#e9d700";
      document.getElementById('botao-falso').style.backgroundColor = "#f2eec4";
      document.getElementById('texto-apoio').innerHTML = "Continue pressionando...";
    }
    else if(this.contagem === 2){
      document.getElementById('botao-panico').style.backgroundColor = "#f53d3d";
      document.getElementById('botao-falso').style.borderColor = "#f53d3d";
      document.getElementById('botao-falso').style.backgroundColor = "#f4bebe";
      document.getElementById('texto-apoio').innerHTML = "Enviar alerta!";
    }
    else if(this.contagem === 3){
      this.ionicAlert();
      this.initPushNotification();

      this.contagem = 0;

      document.getElementById('botao-panico').style.backgroundColor = "#32db64";
      document.getElementById('botao-falso').style.borderColor = "#32db64";
      document.getElementById('botao-falso').style.backgroundColor = "#caf7d7";
      document.getElementById('texto-apoio').innerHTML = "Toque o botão Ativar por três vezes.";
    }
  }

  // to initialize push notifications
  initPushNotification(){
    const options: PushOptions = {
      android: {},
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
  }

}
