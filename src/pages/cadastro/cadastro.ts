import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  private http:Http;

  private cadastro = {
    user: '',
    email: '',
    senha1: '',
    senha2: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, http: Http) {
    this.http = http;
    
    this.cadastro = {
      user: '',
      email: '',
      senha1: '',
      senha2: '',
    }

    this.menuCtrl.enable(false, 'menu-lateral');
  }

  submitData(){
    let dados = {
      username: 'Ensaio',
      email: 'ensaio@example.com',
      senha: '123'
    };

    //Preparando cabeçalho HTTP

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers:headers});

    this.http.post('http://localhost/tcc/api/cadastrar.php', dados, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data)
      });
  }

  cadastroForm(){
    return true;
  }

}
