import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//importamos el formulario a donde vamos a enviar los datos recibidos
import { FormularioDetailsPage } from '../formulario-details/formulario-details';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
    //para recibir los datos del formulario
    todo ={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //accion del boton
  logForm(event, item) {
    console.log(this.todo)
    this.navCtrl.push(FormularioDetailsPage, {
      item: this.todo
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
