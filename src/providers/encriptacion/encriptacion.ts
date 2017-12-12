import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importamos la clase del crypto js
import CryptoJS from 'crypto-js';
/*
  Generated class for the EncriptacionProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EncriptacionProvider {

  constructor() {
    console.log('Hello EncriptacionProvider Provider');
  }

  //funcion para encriptar datos
  public encriptarData(texto: string, key: string):string {
    let enc = CryptoJS.AES.encrypt( texto , key);
    console.log(enc);
    return enc;
  }
  
  //funcion para desencriptar datos
  public desencriptarData(texto:string, key:string):string {
    let des = CryptoJS.AES.decrypt( texto , key);
    console.log(des);
    return des;
  }



}
