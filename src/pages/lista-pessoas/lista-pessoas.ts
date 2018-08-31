import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-lista-pessoas',
  templateUrl: 'lista-pessoas.html',
})
export class ListaPessoasPage {

  public pessoas: Array<string>;
  private url: string = "http://localhost/webservice/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http) {

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {        
        this.pessoas = data.listaPessoas;

        // console.log(this.pessoas);
    }); 

  }

  itemSelected(item){   
    // console.log(item.data);

    const dados = {
      id: item.id,
      nome: item.nome,
      dataNasc: item.data_nasc,
    }

    const alert = this.alertCtrl.create({
      title: 'Item',
      subTitle: `
        <b>ID:</b> ${dados.id}<br />
        <b>Nome:</b> ${dados.nome}<br />
        <b>Data de Nascimento:</b> ${dados.dataNasc} <br />
      `,
      buttons: ['OK']
    });
    alert.present();
  }

}
