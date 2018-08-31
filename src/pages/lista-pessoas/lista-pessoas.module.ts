import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPessoasPage } from './lista-pessoas';

@NgModule({
  declarations: [
    ListaPessoasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPessoasPage),
  ],
})
export class ListaPessoasPageModule {}
