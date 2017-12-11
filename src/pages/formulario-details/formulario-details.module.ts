import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioDetailsPage } from './formulario-details';

@NgModule({
  declarations: [
    FormularioDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioDetailsPage),
  ],
})
export class FormularioDetailsPageModule {}
