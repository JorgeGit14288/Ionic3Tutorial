import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Formulario3DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario3-details',
  templateUrl: 'formulario3-details.html',
})
export class Formulario3DetailsPage {

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //recibimos el parametro que se nos envia, en este caso el item
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formulario3DetailsPage');
  }

}
