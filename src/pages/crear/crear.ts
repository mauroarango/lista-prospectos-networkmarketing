import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { AgregarProspectoService } from '../../services/agregar-prospecto/agregar-prospecto.service';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';
import { DatosGeneralService } from '../../services/datos-general/datos-general.service';


@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html'
})
export class CrearPage {

	nombres: any = [];
	apellidos: any = [];
  profesiones: any = [];

  boolNombre:boolean = false;
  boolApellido:boolean = false;
  boolProfesiones:boolean = false;

  //profesionSeleccionada: any = {};

  nuevoProspecto = {
    // nombre: '',
    // apellido: '',
    // profesion: '',
    // telefono:'',
  }

	//items: Observable<any[]>;
	//nombre: any;
	//mensajeValor: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private aps: AgregarProspectoService,
    private auth: AutenticacionService,
    private dgs: DatosGeneralService	) {

      this.fnObtenerNombres();
      this.fnObtenerApellidos();
      this.fnObtenerProfesiones();

      // if (this.navParams.get('item')) {
      //   this.profesionSeleccionada = this.navParams.get('item');
      // }

  	};

    createContact(nuevoProspecto){
      //Consultar UID
      this.auth.fnSesion.subscribe(sesion=>{
        if (sesion){

          nuevoProspecto.uid = sesion.uid;

          //Agregar a Firebase
          this.aps.addContactToList(nuevoProspecto)
            .then(ref => {
              //Ir a Lista
              this.navCtrl.setRoot(ListaPage, { key: ref.key });
            });
        }
      })
    }

    fnCerrarSesion(){
      this.auth.fnLogout();
      this.navCtrl.setRoot(LoginPage);
    }

    fnObtenerNombres(){
      this.dgs.fnLoadDataNombres()
        .subscribe(data => {
              this.nombres = data.json();
              this.boolNombre = true;
        })
    }

    fnObtenerApellidos(){
      this.dgs.fnLoadDataApellidos()
        .subscribe(data => {
          this.apellidos = data.json();
          this.boolApellido = true;
        })
    }

    fnObtenerProfesiones(){
      this.dgs.fnLoadDataProfesiones()
        .subscribe(data => {
          this.profesiones = data.json();
          this.boolProfesiones = true;
        })
    }

}


