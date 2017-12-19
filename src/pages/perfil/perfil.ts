import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import { PerfilService } from './../../services/perfil/perfil.service';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil = {
    nombre : 'casimiro',
    telefono : '3333'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AutenticacionService,
    private ps: PerfilService ) {

      this.fnCargarPerfil();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PerfilPage');
  }

  fnGuardaPerfil(perfil){
    debugger;
    this.auth.fnSesion.subscribe(sesion => {
      if(sesion){
        // let datos = {
        //   k : sesion.uid,
        //   d : perfil
        // }
      }
    });
  }

  fnCargarPerfil(){
    this.auth.fnSesion.subscribe(sesion => {
      if(sesion){
        debugger;
        this.perfil = this.ps.getPerfilData(sesion.uid);
      }
    });
  }

  fnCerrarPerfil(){
    this.navCtrl.getPrevious();
  }
}
