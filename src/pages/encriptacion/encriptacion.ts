import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; //lo importamos para usar formularios
import { EncriptacionProvider } from '../../providers/encriptacion/encriptacion';
//importamos la clase de encriptación



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

//DECLARAMOS LAS VARIABLES
private encriptado:string ="";
private desencriptado:string="";
myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    //lo importamos para usar formularios
    public formBuilder: FormBuilder,
    public encriptacion: EncriptacionProvider) {
      this.myForm = this.createMyForm();
  }

  //creamos el formulario
  private createMyForm(){
    return this.formBuilder.group({
      key: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }
  logForm() {
    console.log(this.myForm.value);
    this.encriptado =  this.encriptacion.encriptarData(this.myForm.value.texto, this.myForm.value.key);
    this.desencriptado = this.myForm.value.texto;
    console.log(this.myForm.value.key);
  }
  //cuando se carga la pagina
  ionViewDidLoad() {
    console.log('ionViewDidLoad EncriptacionPage');
    
  }
}
