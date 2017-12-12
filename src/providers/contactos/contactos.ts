//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactosProvider { 
  contacts:any [];
  
  constructor() {
    console.log('Hello ContactsProvider Provider');
  }

  loadcontacts() {
    this.contacts = [
      {title:'YBM',contact:'786'},
      {title:'Noor',contact:'1234'},
      {title:'Naimath',contact:'5678'},
      {title:'Danish',contact:'9102'}
    ]
  }
}
