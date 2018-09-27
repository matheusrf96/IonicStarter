import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the MensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html',
})
export class MensagemPage {
  public id = 2;

  public alertas: Array<string>;
  private url: string = `http://localhost/tcc/api/listar-alertas-recebidos.php?id=${this.id}`;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.alertas = data;
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
  }

}
