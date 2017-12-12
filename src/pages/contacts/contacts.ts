import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactosProvider } from '../../providers/contactos/contactos';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public contactsService: ContactosProvider) {
     
  }
 
 ionViewDidLoad() {
  this.contactsService.loadcontacts();
}

}
