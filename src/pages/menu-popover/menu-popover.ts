import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import { LoginPage } from '../login/login';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the MenuPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-menu-popover',
  templateUrl: 'menu-popover.html',
})
export class MenuPopoverPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public vCtrl: ViewController,
    private auth: AutenticacionService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPopoverPage');
  }

  fnCloseMenuPopover() {
    this.vCtrl.dismiss();
  }

  fnCerrarSesion(){
    this.fnCloseMenuPopover();
    this.auth.fnLogout();
    //Validar si la sesión si fue cerrada correctamente
    this.navCtrl.setRoot(LoginPage);
  }

  fnVerPerfil(){
    this.fnCloseMenuPopover();
    //this.navCtrl.setRoot(PerfilPage);
  }

}
