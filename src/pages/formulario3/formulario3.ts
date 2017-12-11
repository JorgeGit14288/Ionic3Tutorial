import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  todo = {
    title: '',
    description: ''
  };


  logForm(form) {
    console.log(form.value)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formulario3Page');
  }

}
