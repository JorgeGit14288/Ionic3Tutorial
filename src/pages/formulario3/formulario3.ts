import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//importamos para utilizar formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formulario3DetailsPage } from '../formulario3-details/formulario3-details';
//importamos el formulario3details para mostrar los datos
/**
 * Generated class for the Formulario3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario3',
  templateUrl: 'formulario3.html',
})
export class Formulario3Page {
   myForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }
  //funcion para guardar lod datos
  saveData(){
    console.log(this.myForm.value);
    //inyectamos los datos recibidos al otro formulario
    this.navCtrl.push(Formulario3DetailsPage,{
      item: this.myForm.value
    })
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }
}
