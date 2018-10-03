import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

// Rodar pelo Cordova

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contagem;

  constructor(
      public navCtrl: NavController,
      public alertCtrl: AlertController,
    ) {
    this.contagem = 0;
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

      this.contagem = 0;

      document.getElementById('botao-panico').style.backgroundColor = "#32db64";
      document.getElementById('botao-falso').style.borderColor = "#32db64";
      document.getElementById('botao-falso').style.backgroundColor = "#caf7d7";
      document.getElementById('texto-apoio').innerHTML = "Toque o botão Ativar por três vezes.";
    }
  }
}
