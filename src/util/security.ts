//importamos la clase del crypto js
import CryptoJS from 'crypto-js';


export class security{

    //agregamos el constructtor de la clase
    constructor(){

    }

   //funcion para encriptar datos
   public encriptarData(texto: string, key: string):string {
    let enc = CryptoJS.AES.encrypt( texto , key);
    return enc;
  }


  //funcion para desencriptar datos
  public desencriptarData(texto:string, key:string):string {
    let des = CryptoJS.AES.decrypt( texto , key);
    return des;
  }
}