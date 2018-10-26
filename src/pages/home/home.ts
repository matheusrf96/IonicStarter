import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MensagemPage } from '../mensagem/mensagem';
import { AlertasPage } from '../alertas/alertas';
import { ListPage } from '../list/list';

//import { MyApp } from '../../app/app.component';

// Rodar pelo Cordova

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private http:Http;
  public contagem;

  constructor(
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      http: Http,
    ) {
    this.http = http;
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
      this.enviarAlerta();

      this.contagem = 0;

      document.getElementById('botao-panico').style.backgroundColor = "#32db64";
      document.getElementById('botao-falso').style.borderColor = "#32db64";
      document.getElementById('botao-falso').style.backgroundColor = "#caf7d7";
      document.getElementById('texto-apoio').innerHTML = "Toque o botão Ativar por três vezes.";
    }

  }

  enviarAlerta(){
    const dados = {
      remetente: 2,
      mensagem: "teste api"
    }

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers:headers}); 

    this.http.post('http://localhost/tcc/api/enviar-alerta.php', dados, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      }, error => {
        // console.log(error);
      }
    );

    console.log(dados);

    this.ionicAlert();
  }

  openContatos(){
    this.navCtrl.push(ListPage);
  }

  openAlertasR(){
    this.navCtrl.push(MensagemPage);
  }

  openAlertasE(){
    this.navCtrl.push(AlertasPage);
  }
}
