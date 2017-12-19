import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the PerfilService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfilService {

  constructor(
    private afd: AngularFireDatabase) {
    console.log('Hello PerfilService Provider');
  }

  getPerfilData (userId) {
    return this.afd.list('/perfil/' + userId);
  }

  setPerfilData (datos) {
    return this.afd.list('/perfil/' + datos.k).push(datos.d);
  }

  updPerfilData () {

  }

}
