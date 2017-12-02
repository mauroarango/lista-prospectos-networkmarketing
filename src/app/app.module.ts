import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CrearPage } from '../pages/crear/crear';
import { ListaPage } from '../pages/lista/lista';
import { ProfesionesPage } from '../pages/profesiones/profesiones';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../enviroment';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {HttpModule} from '@angular/http'
import {AgregarProspectoService} from '../services/agregar-prospecto/agregar-prospecto.service';


@NgModule({
  declarations: [
    MyApp,
    CrearPage,
    ListaPage,
    ProfesionesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, 'lista-prospectos'),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CrearPage,
    ListaPage,
    ProfesionesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgregarProspectoService,
  ]
})
export class AppModule {}
