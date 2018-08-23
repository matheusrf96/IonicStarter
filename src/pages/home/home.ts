import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public contagem;

  constructor(public navCtrl: NavController,) {
    this.contagem = 0;
  }

  ativar() {
    this.contagem++;
    //console.log('click', this.contagem);

    if(this.contagem === 1){
      document.getElementById('botao-panico').style.backgroundColor = "#e9d700";
    }
    else if(this.contagem === 2){
      document.getElementById('botao-panico').style.backgroundColor = "#f53d3d";
    }
    else if(this.contagem === 3){
      this.contagem = 0;
      document.getElementById('botao-panico').style.backgroundColor = "#32db64";
      alert("Seu alerta foi enviado");
    }
  }

}
