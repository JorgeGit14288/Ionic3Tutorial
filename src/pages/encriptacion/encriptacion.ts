import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; //lo importamos para usar formularios

/**
 * Generated class for the EncriptacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encriptacion',
  templateUrl: 'encriptacion.html',
})
export class EncriptacionPage {

  //creamos un formulario

  public firstForm: any;

  todo = {}
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    //lo importamos para usar formularios
    public formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });

  }

  logForm() {
    console.log(this.todo)
  }

  Encriptar() {
    return "Ecriptado;"
  }
  //cuando se carga la pagina
  ionViewDidLoad() {
    console.log('ionViewDidLoad EncriptacionPage');
  }

}
