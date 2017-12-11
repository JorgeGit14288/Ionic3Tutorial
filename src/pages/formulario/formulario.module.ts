import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioPage } from './formulario';
//importamos el formulario a donde vamos a enviar los datos recibidos
import { FormularioDetailsPage } from '../formulario-details/formulario-details';



@NgModule({
  declarations: [
    FormularioPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioPage),
  ],
})
export class FormularioPageModule {}
