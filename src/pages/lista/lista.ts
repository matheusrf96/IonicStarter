import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  public feeds: Array<string>;
  private url: string = "https://www.reddit.com/new.json";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http) {

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.data.children;
    }); 

  }

  itemSelected(item){   
    // console.log(item.data);

    let dados = {
      id: item.data.id,
      titulo: item.data.title,
      autor: item.data.author,
      link: `https://reddit.com${item.data.permalink}`,
    }

    const alert = this.alertCtrl.create({
      title: 'Item',
      subTitle: `
        <b>ID:</b> ${dados.id}<br />
        <b>Título:</b> ${dados.titulo}<br />
        <b>Autor:</b> ${dados.autor} <br />
        <b>Link</b>: <a href='${dados.link}' target='blank'>Abrir</a>
      `,
      buttons: ['OK']
    });
    alert.present();
  }

}
