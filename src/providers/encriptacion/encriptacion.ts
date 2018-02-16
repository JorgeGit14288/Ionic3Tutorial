//import { HttpClient } from '@angular/common/http';
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
  //encriptamos las claves
  public pwd: string = "84NRUR4L84NC4M0VI1"
  public  key = CryptoJS.enc.Utf8.parse('84NRUR4L84NC4M0VI12017');
  public iv = CryptoJS.enc.Utf8.parse('8080808080808080');
  public algorithm ='aes-256-crt';

  constructor() {
    console.log('Hello EncriptacionProvider Provider');
   
  }

  //funcion para encriptar datos
  public encriptarData(texto: string, key?: string):string {


    var enc = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(texto), this.key,
    {
    keySize: 256 / 8,
    iv: this.iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
    });


    console.log(enc);
    return enc;
  }
  
  //funcion para desencriptar datos
  public desencriptarData(texto:string, key?:string):string {
    console.log(this.key);
    var des = CryptoJS.AES.decrypt(CryptoJS.enc.Utf8.parse(texto), this.key,
    {
    keySize: 256 / 8,
    iv: this.iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
    });

    //let des = CryptoJS.AES.decrypt( texto , key);
    console.log(des);
    return des;
  }
}
