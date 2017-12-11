import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
//agregarmos la pagina creada
import { EncriptacionPage } from '../pages/encriptacion/encriptacion';
//agregamos la extension para usar formularios
import { FormBuilder, Validators } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormularioPage } from '../pages/formulario/formulario';
import { Formulario2Page } from '../pages/formulario2/formulario2';
import { Formulario3Page } from '../pages/formulario3/formulario3';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    EncriptacionPage, //agregamos la nueva pagina
    FormularioPage,
    Formulario2Page,
    Formulario3Page
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    EncriptacionPage, //agregamos la nueva pagina
    FormularioPage,
    Formulario2Page,
    Formulario3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
