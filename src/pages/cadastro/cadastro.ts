import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public cadastro = {
    user: '',
    email: '',
    senha1: '',
    senha2: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.cadastro = {
      user: '',
      email: '',
      senha1: '',
      senha2: '',
    }

    this.menuCtrl.enable(false, 'menu-lateral');
  }

  cadastroForm(){
    return true;
  }

}
