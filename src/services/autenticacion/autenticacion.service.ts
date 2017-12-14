import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
//import * as firebase from 'firebase/app';

@Injectable()

export class AutenticacionService {

    constructor(
        private afAuth: AngularFireAuth
        ) {
        // code...
    }

    fnRegisterUser(email:string, password:string){
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                    .then((res)=>{
                        console.log("Usuario creado correctamente =D");
                    })
                    .catch(err => Promise.reject(err))
    }

    fnLoginUser(email:string, password:string){
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
                    .then(user=>Promise.resolve(user))
                    .catch(err=>Promise.resolve(err))
    }

    get fnSesion(){
        return this.afAuth.authState;
    }

    fnLogout(){
        this.afAuth.auth.signOut()
            .then(()=>{
                console.log("Cerrar Sesión");
            })
    }
}
