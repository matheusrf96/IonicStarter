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
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public id = 2;

  public contatos: Array<string>;
  private url: string = `http://localhost/tcc/api/listar-contatos.php?id=${this.id}`;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.contatos = data;
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
