import { Component } from '@angular/core';
import { /*IonicPage,*/ NavController, NavParams, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    user = {
        email : "",
        password : ""
    };

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public auth: AutenticacionService,
      public alertCtrl: AlertController
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fnRegister(){
      this.auth.fnRegisterUser(this.user.email, this.user.password)
          .then((user)=>{
              console.log("Usuario Creado");
          })
          .catch(err => {
              let alert = this.alertCtrl.create({
                  title: "Error",
                  subTitle: err.message,
                  buttons: ['Aceptar']
              });
              alert.present();
          })
  }

  fnLogin(){
    this.auth.fnLoginUser(this.user.email, this.user.password)
    .then((user)=>{
      console.log("Sesión Activa");
      // Validar si la sesion esta activa, si no direcciona al Login
      this.auth.fnSesion.subscribe(sesion=>{
        if (sesion){
          //Ir a profesiones
          this.navCtrl.setRoot(TabsPage);
        }
      })
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: "Error",
        subTitle: err.messaje,
        buttons: ['Aceptar']
      })
      alert.present();
    })
  }

}
