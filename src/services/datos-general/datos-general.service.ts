import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DatosGeneralService {

  constructor(public http: Http) { }

  fnLoadDataNombres () {
    return this.http.get("assets/data/nombres.json");
  }

  fnLoadDataApellidos () {
    return this.http.get("assets/data/apellidos.json");
  }

  fnLoadDataProfesiones () {
    return this.http.get("assets/data/profesiones.json");
  }

}
