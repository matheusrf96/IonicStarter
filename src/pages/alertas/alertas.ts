import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-alertas',
  templateUrl: 'alertas.html',
})
export class AlertasPage {
  public id = 2;

  public alertas: Array<string>;
  private url: string = `http://localhost/tcc/api/listar-alertas-enviados.php?id=${this.id}`;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.alertas = data;
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertasPage');
  }

}