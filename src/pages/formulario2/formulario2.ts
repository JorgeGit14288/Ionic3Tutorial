import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


/**
 * Generated class for the Formulario2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario2',
  templateUrl: 'formulario2.html',
})
export class Formulario2Page {
 //agregamos el formulario
  private todo : FormGroup;
  // agregamos la funcion del boton
    logForm(){
      console.log(this.todo.value)
    }
    //creamos el constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  //evento que carga la pagina
  ionViewDidLoad() {
    console.log('ionViewDidLoad Formulario2Page');
  }

}
