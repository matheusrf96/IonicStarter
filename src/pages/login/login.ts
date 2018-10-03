import { Component } from '@angular/core';
import { 
  IonicPage,
  NavController,
  AlertController,
  MenuController,
} from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public login = {
    email: '',
    senha: ''
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public menuCtrl: MenuController) {
    this.login = {
      email: '',
      senha: ''
    }
    this.menuCtrl.enable(false, 'menu-lateral');
  }

  loginForm() {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: `User: ${this.login.email} <br />Senha: ${this.login.senha}`,
      buttons: ['Ok']
    });

    alert.present();
  }

  irCadastrar(){
    console.log("Click");
    this.navCtrl.push(CadastroPage);
  }

}
