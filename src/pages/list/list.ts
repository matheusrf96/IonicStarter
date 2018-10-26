import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the MensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public id = 2;
  public cadastro = {
    contato: ''
  }

  public contatos: Array<string>;
  private url: string = `http://localhost/tcc/api/listar-contatos.php?id=${this.id}`;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public http: Http) {
    this.http = http;

    this.cadastro = {
      contato: ''
    }

    this.http.get(this.url).map(res => res.json())
    .subscribe(data => {
      this.contatos = data;
    }); 
    
  }

  ionicAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alerta',
      subTitle: 'O contato adicionado com sucesso!',
      buttons: [
        {
              text: 'OK',
              role: 'ok',
              handler: () => {
                this.navCtrl.push(ListPage)
              }
            }
        ]
    });
    alert.present();
  }

  addContato(){
    const dados = {
      solicitante: this.id,
      contato: this.cadastro.contato,
    };
  
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers:headers}); 

    this.http.post('http://localhost/tcc/api/adicionar-contato.php', dados, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
    
    console.log(dados);

    this.ionicAlert();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
