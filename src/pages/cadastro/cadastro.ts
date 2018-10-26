import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  private http:Http;
  private cadastro;
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, http: Http, alertCtrl: AlertController) {
    this.http = http;
    this.cadastro = {
      username: '',
      email: '',
      senha1: '',
      senha2: '',
    }

    this.alertCtrl = alertCtrl;
    this.menuCtrl.enable(false, 'menu-lateral');
  }

  submitData(){ 

    let dados;

    if(this.cadastro.senha1 === this.cadastro.senha2){
      dados = {
        username: this.cadastro.username,
        email: this.cadastro.email,
        senha: this.cadastro.senha1
      };
    
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({headers:headers}); 

      this.http.post('http://localhost/tcc/api/cadastrar.php', dados, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
        }, error => {
          // console.log(error);
        }
      );
      
      console.log(dados);

      let alert = this.alertCtrl.create({
        title: 'Usuario cadastrado com sucesso!',
        buttons: [
          {
                text: 'OK',
                role: 'ok',
                handler: () => {
                  this.navCtrl.push(LoginPage)
                }
              }
          ]
        });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'A senha de confirmacao nao confere!',
        buttons: [
          {
                text: 'OK',
                role: 'ok',
                handler: () => {
                  this.navCtrl.push(CadastroPage)
                }
              }
          ]
        });
      alert.present();
    }
  }

  cadastroForm(){
    return true;
  }

}
