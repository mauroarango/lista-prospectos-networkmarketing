webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crear_crear__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lista__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profesiones_profesiones__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__profesiones_profesiones__["a" /* ProfesionesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__crear_crear__["a" /* CrearPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__lista_lista__["a" /* ListaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n\n  <ion-tab [root]="tab1Root" tabTitle="Profesiones" tabIcon="man"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Crear" tabIcon="add-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Lista" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lista__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_agregar_prospecto_agregar_prospecto_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_autenticacion_autenticacion_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';

var CrearPage = (function () {
    //items: Observable<any[]>;
    //nombre: any;
    //mensajeValor: string = '';
    function CrearPage(navCtrl, navParams, aps, auth) {
        //this.items = db.list('/lista').valueChanges();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aps = aps;
        this.auth = auth;
        this.nombres = [];
        this.apellidos = [];
        this.profesiones = [];
        this.profesionSeleccionada = {};
        this.nuevoProspecto = {};
        this.nombres = [
            {
                "nombre": "Adel"
            },
            {
                "nombre": "Adriana"
            },
            {
                "nombre": "Agustin"
            },
            {
                "nombre": "Alejandra"
            },
            {
                "nombre": "Alejandro"
            },
            {
                "nombre": "Alex"
            },
            {
                "nombre": "Alexander"
            },
            {
                "nombre": "Alexandra"
            },
            {
                "nombre": "Alfredo"
            },
            {
                "nombre": "Alirio"
            },
            {
                "nombre": "Alvaro"
            },
            {
                "nombre": "Amparo"
            },
            {
                "nombre": "Ana"
            },
            {
                "nombre": "Ana Maria"
            },
            {
                "nombre": "Anderson"
            },
            {
                "nombre": "Andrea"
            },
            {
                "nombre": "Andrés"
            },
            {
                "nombre": "Andrés Felipe"
            },
            {
                "nombre": "Angela"
            },
            {
                "nombre": "Angela Maria"
            },
            {
                "nombre": "Angelica"
            },
            {
                "nombre": "Antonio"
            },
            {
                "nombre": "Armando"
            },
            {
                "nombre": "Augusto"
            },
            {
                "nombre": "Beatriz"
            },
            {
                "nombre": "Bryan"
            },
            {
                "nombre": "Camila"
            },
            {
                "nombre": "Camilo"
            },
            {
                "nombre": "Carlos"
            },
            {
                "nombre": "Carlos Andres"
            },
            {
                "nombre": "Carlos Alberto"
            },
            {
                "nombre": "Carlos Arturo"
            },
            {
                "nombre": "Carolina"
            },
            {
                "nombre": "Catalina"
            },
            {
                "nombre": "Cesar"
            },
            {
                "nombre": "Christian"
            },
            {
                "nombre": "Clara"
            },
            {
                "nombre": "Claudia"
            },
            {
                "nombre": "Clemente"
            },
            {
                "nombre": "Daniel"
            },
            {
                "nombre": "Daniela"
            },
            {
                "nombre": "Dario"
            },
            {
                "nombre": "David"
            },
            {
                "nombre": "Diana"
            },
            {
                "nombre": "Didier"
            },
            {
                "nombre": "Diego"
            },
            {
                "nombre": "Duvan"
            },
            {
                "nombre": "Edilma"
            },
            {
                "nombre": "Edison"
            },
            {
                "nombre": "Eduardo"
            },
            {
                "nombre": "Edwin"
            },
            {
                "nombre": "Eliza"
            },
            {
                "nombre": "Elizabeth"
            },
            {
                "nombre": "Elkin"
            },
            {
                "nombre": "Elvia"
            },
            {
                "nombre": "Emiliana"
            },
            {
                "nombre": "Erica"
            },
            {
                "nombre": "Ernesto"
            },
            {
                "nombre": "Esteban"
            },
            {
                "nombre": "Estefanía"
            },
            {
                "nombre": "Fabio"
            },
            {
                "nombre": "Federico"
            },
            {
                "nombre": "Felipe"
            },
            {
                "nombre": "Fernando"
            },
            {
                "nombre": "Francisco"
            },
            {
                "nombre": "Franklin"
            },
            {
                "nombre": "Fredy"
            },
            {
                "nombre": "Gabriel"
            },
            {
                "nombre": "German"
            },
            {
                "nombre": "Gladys"
            },
            {
                "nombre": "Gloria"
            },
            {
                "nombre": "Gustavo"
            },
            {
                "nombre": "Hector"
            },
            {
                "nombre": "Helena"
            },
            {
                "nombre": "Henry"
            },
            {
                "nombre": "Hernan"
            },
            {
                "nombre": "Hernan Dario"
            },
            {
                "nombre": "Horacio"
            },
            {
                "nombre": "Hugo"
            },
            {
                "nombre": "Isabel"
            },
            {
                "nombre": "Ivan"
            },
            {
                "nombre": "Jaime"
            },
            {
                "nombre": "Jairo"
            },
            {
                "nombre": "Janeth"
            },
            {
                "nombre": "Jazmin"
            },
            {
                "nombre": "Jefferson"
            },
            {
                "nombre": "Jenifer"
            },
            {
                "nombre": "Jeronimo"
            },
            {
                "nombre": "Jesús"
            },
            {
                "nombre": "Jhon"
            },
            {
                "nombre": "Jhonatan"
            },
            {
                "nombre": "Jorge"
            },
            {
                "nombre": "Jorge Ivan"
            },
            {
                "nombre": "José"
            },
            {
                "nombre": "Jose Antonio"
            },
            {
                "nombre": "Jose Eduardo"
            },
            {
                "nombre": "Jose Luis"
            },
            {
                "nombre": "Juan"
            },
            {
                "nombre": "Juan Camilo"
            },
            {
                "nombre": "Juan Carlos"
            },
            {
                "nombre": "Juan David"
            },
            {
                "nombre": "Juan Diego"
            },
            {
                "nombre": "Juan Esteban"
            },
            {
                "nombre": "Juan Fernando"
            },
            {
                "nombre": "Juan Manuel"
            },
            {
                "nombre": "Juan Pablo"
            },
            {
                "nombre": "Julian"
            },
            {
                "nombre": "Juliana"
            },
            {
                "nombre": "Julio Cesar"
            },
            {
                "nombre": "Kelly"
            },
            {
                "nombre": "Laura"
            },
            {
                "nombre": "Leidy"
            },
            {
                "nombre": "Leon"
            },
            {
                "nombre": "Leonardo"
            },
            {
                "nombre": "Liliana"
            },
            {
                "nombre": "Lina"
            },
            {
                "nombre": "Lina Marcela"
            },
            {
                "nombre": "Lina Maria"
            },
            {
                "nombre": "Lucas"
            },
            {
                "nombre": "Luis"
            },
            {
                "nombre": "Luis Alberto"
            },
            {
                "nombre": "Luis Angel"
            },
            {
                "nombre": "Luis Carlos"
            },
            {
                "nombre": "Luis Eduardo"
            },
            {
                "nombre": "Luis Fernando"
            },
            {
                "nombre": "Luis Mario"
            },
            {
                "nombre": "Luisa Fernanda"
            },
            {
                "nombre": "Luz"
            },
            {
                "nombre": "Luz Adriana"
            },
            {
                "nombre": "Luz Diana"
            },
            {
                "nombre": "Manuel"
            },
            {
                "nombre": "Marcela"
            },
            {
                "nombre": "Marcos"
            },
            {
                "nombre": "Maria"
            },
            {
                "nombre": "Maria Alejandra"
            },
            {
                "nombre": "Maria Angelica"
            },
            {
                "nombre": "Maria Clara"
            },
            {
                "nombre": "Maria Elena"
            },
            {
                "nombre": "Maria Eugenia"
            },
            {
                "nombre": "Maria Fernanda"
            },
            {
                "nombre": "Mariana"
            },
            {
                "nombre": "Mariela"
            },
            {
                "nombre": "Mario"
            },
            {
                "nombre": "Marisol"
            },
            {
                "nombre": "Marlon"
            },
            {
                "nombre": "Martha"
            },
            {
                "nombre": "Mary"
            },
            {
                "nombre": "Mateo"
            },
            {
                "nombre": "Mauricio"
            },
            {
                "nombre": "Melissa"
            },
            {
                "nombre": "Michelle"
            },
            {
                "nombre": "Miguel"
            },
            {
                "nombre": "Miguel Angel"
            },
            {
                "nombre": "Milton"
            },
            {
                "nombre": "Monica"
            },
            {
                "nombre": "Nancy"
            },
            {
                "nombre": "Natalia"
            },
            {
                "nombre": "Nicolás"
            },
            {
                "nombre": "Nora"
            },
            {
                "nombre": "Olga"
            },
            {
                "nombre": "Orlando"
            },
            {
                "nombre": "Oscar"
            },
            {
                "nombre": "Pablo"
            },
            {
                "nombre": "Paola"
            },
            {
                "nombre": "Patricia"
            },
            {
                "nombre": "Paula"
            },
            {
                "nombre": "Paula Andrea"
            },
            {
                "nombre": "Pedro"
            },
            {
                "nombre": "Pilar"
            },
            {
                "nombre": "Raul"
            },
            {
                "nombre": "Ricardo"
            },
            {
                "nombre": "Rocio"
            },
            {
                "nombre": "Rodrigo"
            },
            {
                "nombre": "Ruben"
            },
            {
                "nombre": "Samuel"
            },
            {
                "nombre": "Sandra"
            },
            {
                "nombre": "Santiago"
            },
            {
                "nombre": "Sara"
            },
            {
                "nombre": "Sebastian"
            },
            {
                "nombre": "Sergio"
            },
            {
                "nombre": "Simon"
            },
            {
                "nombre": "Sofia"
            },
            {
                "nombre": "Susana"
            },
            {
                "nombre": "Tatiana"
            },
            {
                "nombre": "Tomas"
            },
            {
                "nombre": "Valentina"
            },
            {
                "nombre": "Vanessa"
            },
            {
                "nombre": "Veronica"
            },
            {
                "nombre": "Victor"
            },
            {
                "nombre": "Victoria"
            },
            {
                "nombre": "Walter"
            },
            {
                "nombre": "Wilson"
            },
            {
                "nombre": "Ximena"
            },
            {
                "nombre": "Xiomara"
            },
            {
                "nombre": "Yadira"
            },
            {
                "nombre": "Yesid"
            },
            {
                "nombre": "Yolanda"
            },
            {
                "nombre": "Yuliana"
            },
            {
                "nombre": "Zully"
            },
            {
                "nombre": "Seleccione"
            }
        ];
        this.apellidos = [
            {
                'apellido': 'Álvarez',
            },
            {
                'apellido': 'Arango',
            },
            {
                'apellido': 'Acevedo',
            },
            {
                'apellido': 'Castro',
            },
            {
                'apellido': 'Rodríguez',
            },
            {
                'apellido': 'García',
            },
            {
                'apellido': 'Gómez',
            },
            {
                'apellido': 'González',
            },
            {
                'apellido': 'Martínez',
            },
            {
                'apellido': 'Montoya',
            },
            {
                'apellido': 'López',
            },
            {
                'apellido': 'Hernández',
            },
            {
                'apellido': 'Sánchez',
            },
            {
                'apellido': 'Ramírez',
            },
            {
                'apellido': 'Restrepo',
            },
            {
                'apellido': 'Pérez',
            },
            {
                'apellido': 'Díaz',
            },
            {
                'apellido': 'Muñoz',
            },
            {
                'apellido': 'Rojas',
            },
            {
                'apellido': 'Moreno',
            },
            {
                'apellido': 'Jiménez',
            },
            {
                'apellido': 'Orozco',
            },
            {
                'apellido': 'Velásquez',
            },
            {
                'apellido': 'Zapata',
            },
            {
                'apellido': 'Zuluaga',
            },
            {
                'apellido': 'Zuleta',
            },
            {
                'apellido': 'Obando',
            },
            {
                'apellido': 'Silva',
            },
            {
                'apellido': 'Valencia',
            },
        ];
        this.profesiones = [
            {
                'profesion': 'Maneja Uber',
                'icon': 'car',
                'description': 'Alguien que sepas que maneje Uber, o tenga algo que ver con Uber',
            },
            {
                'profesion': 'Analiza Datos',
                'icon': 'analytics',
                'description': 'Analice Datos en una Empresa',
            },
            {
                'profesion': 'Disfruta Picnic',
                'icon': 'basket',
                'description': 'Alguien que recuerdes en un picnic',
            },
            {
                'profesion': 'Toma Cerveza',
                'icon': 'beer',
                'description': 'Alguien que recuerdes tomando mucha cerveza',
            },
            {
                'profesion': 'Monta Bicicleta',
                'icon': 'bicycle',
                'description': 'Vaya a la ciclovia o monte mucho e bicicleta',
            },
            {
                'profesion': 'Lee Libros',
                'icon': 'book',
                'description': 'Alguien a quien le guste leer mucho',
            },
            {
                'profesion': 'Maquilladora Profesional',
                'icon': 'brush',
                'description': 'Le Guste maquillar por profesion o hobby',
            },
            {
                'profesion': 'Sabe Mecanica',
                'icon': 'build',
                'description': 'Que sepa mecanica, tenga taller o con familiar mecanico',
            },
            {
                'profesion': 'Monta Bus',
                'icon': 'bus',
                'description': 'Que lo recuerdes montado en un bus',
            },
            {
                'profesion': 'Toma Tinto',
                'icon': 'cafe',
                'description': 'Alguien que le guste mucho el tinto',
            },
            {
                'profesion': 'Call Center',
                'icon': 'call',
                'description': 'Trabaje en un Call Center o reciba muchas llamadas',
            },
            {
                'profesion': 'Sabe Fotografía',
                'icon': 'camera',
                'description': 'Sepa de Fotografia, sea profesional tomando fotos',
            },
            {
                'profesion': 'Super Mercado',
                'icon': 'cart',
                'description': 'Trabaje para un SuperMercado en cualquier area',
            },
            {
                'profesion': 'Trabaja Valores',
                'icon': 'cash',
                'description': 'Tenga o Trabaje en Casa de Cambio',
            },
            {
                'profesion': 'Pinta Cuadros',
                'icon': 'color-palette',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'profesion': 'Obras Construccion',
                'icon': 'construct',
                'description': 'Trabe en Obras de Construcción',
            },
            {
                'profesion': 'Peluquera Estilista',
                'icon': 'cut',
                'description': 'Tenga o Trabaje en peluquería',
            },
            {
                'profesion': 'Optómetra Optica',
                'icon': 'eye',
                'description': 'Trabaje con los ojos con gafas y más',
            },
            {
                'profesion': 'Community Manager',
                'icon': 'logo-facebook',
                'description': 'Maneje Redes Sociales como profesión',
            },
            {
                'profesion': 'Bombero Socorrista',
                'icon': 'flame',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'profesion': 'Ingenieria Electrica',
                'icon': 'flash',
                'description': 'Sepa de Voltajes y cosas electricas',
            },
            {
                'profesion': 'Químico Laboratorio',
                'icon': 'flask',
                'description': 'Sea Quimico de algun tipo',
            },
            {
                'profesion': 'Jardinería Plantas',
                'icon': 'flower',
                'description': 'Venda plantas o flores para vivir, sea Jardinero',
            },
            {
                'profesion': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'profesion': 'Madera Carpintero',
                'icon': 'hammer',
                'description': 'Trabaje con Madera',
            },
            {
                'profesion': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'profesion': 'Amor Pasado',
                'icon': 'heart',
                'description': 'Algun Exnovio(a) o amor del pasado',
            },
            {
                'profesion': 'Bienes Raices',
                'icon': 'home',
                'description': 'Trabaje comprando o vendiendo bienes raices',
            },
            {
                'profesion': 'Llaves Cerraduras',
                'icon': 'key',
                'description': 'Trabaje con Cerraduras y Llaves',
            },
            {
                'profesion': 'Tecnología Sistemas',
                'icon': 'laptop',
                'description': 'Sabe de sistemas y tecnología, programacion, software',
            },
            {
                'profesion': 'Soldado Militar',
                'icon': 'medal',
                'description': 'Alguien que haya o este en el ejercito',
            },
            {
                'profesion': 'Medico Especialista',
                'icon': 'medkit',
                'description': 'Tiene alguna especialidad en medicina o simplemente es médico',
            },
            {
                'profesion': 'Cantante Musico',
                'icon': 'microphone',
                'description': 'Hayas visto cantar en algun lado',
            },
            {
                'profesion': 'Toca Instrumentos',
                'icon': 'musical-notes',
                'description': 'Toca algun instrumento y sabe de musica',
            },
            {
                'profesion': 'Vegetariano Verduras',
                'icon': 'nutrition',
                'description': 'Es vegetariano, Vegano o solo come verduras',
            },
            {
                'profesion': 'Ayuda Mascotas',
                'icon': 'paw',
                'description': 'Cuida los animalitos o tiene muchas mascotas',
            },
            {
                'profesion': 'Vende Celulares',
                'icon': 'phone-portrait',
                'description': 'Vende Celulares, Accesorios o todo con telefonos inteligentes',
            },
            {
                'profesion': 'Pizzero Pizzeria',
                'icon': 'pizza',
                'description': 'Tiene que ver con la industria de la pizza',
            },
            {
                'profesion': 'Azafata Piloto',
                'icon': 'plane',
                'description': 'Tiene que ver con la industria de la aviacion',
            },
            {
                'profesion': 'Vende Ropa',
                'icon': 'pricetags',
                'description': 'Vende Ropa en General',
            },
            {
                'profesion': 'Mesero Restaurante',
                'icon': 'restaurant',
                'description': 'Trabaja en un restaurante o es dueño de alguno',
            },
            {
                'profesion': 'Recien Graduado',
                'icon': 'school',
                'description': 'Está Estudiando o Recién Graduado de la Universidad',
            },
            {
                'profesion': 'Costura Confeccion',
                'icon': 'shirt',
                'description': 'Confecciona o tiene taller de costura',
            },
            {
                'profesion': 'Carro Velocidad',
                'icon': 'speedometer',
                'description': 'Piloto de Autos o le guste la Velocidad y los Carros',
            },
            {
                'profesion': 'Deportista Rendimiento',
                'icon': 'tennisball',
                'description': 'Deportista de Alto Rendimiento',
            },
            {
                'profesion': 'Youtuber Animador',
                'icon': 'logo-youtube',
                'description': 'Youtuber o Animador en Videos en Redes Sociales',
            },
        ];
        if (this.navParams.get('item')) {
            this.profesionSeleccionada = this.navParams.get('item');
        }
    }
    ;
    CrearPage.prototype.createContact = function (nuevoProspecto) {
        var _this = this;
        //Consultar UID
        this.auth.fnSesion.subscribe(function (sesion) {
            if (sesion) {
                nuevoProspecto.uid = sesion.uid;
                //Agregar a Firebase
                _this.aps.addContactToList(nuevoProspecto)
                    .then(function (ref) {
                    //Ir a Lista
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__lista_lista__["a" /* ListaPage */], { key: ref.key });
                });
            }
        });
    };
    CrearPage.prototype.fnCerrarSesion = function () {
        this.auth.fnLogout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    CrearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear',template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\crear\crear.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Ingresa la Persona\n\n    </ion-title>\n\n\n\n		<ion-buttons end>\n\n      	<button ion-button icon-only (click)="fnCerrarSesion()">\n\n        		<ion-icon name="exit"></ion-icon>\n\n      	</button>\n\n    	</ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n\n\n		<ion-list>\n\n		      <ion-item>\n\n		        <ion-label>Nombre</ion-label>\n\n		        <ion-select [(ngModel)]="nuevoProspecto.nombre" interface="action-sheet">\n\n			    	<ion-option *ngFor="let nombre of nombres" value="{{nombre.nombre}}">\n\n			    	{{nombre.nombre}}\n\n			    </ion-option>\n\n\n\n				</ion-select>\n\n		      </ion-item>\n\n		 </ion-list>\n\n\n\n\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n\n\n		<ion-list>\n\n		      <ion-item>\n\n		        <ion-label>Apellido</ion-label>\n\n		        <ion-select [(ngModel)]="nuevoProspecto.apellido" interface="action-sheet">\n\n			    	<ion-option *ngFor="let apellido of apellidos" value="{{apellido.apellido}}">{{apellido.apellido}}\n\n			    	</ion-option>\n\n\n\n				</ion-select>\n\n		      </ion-item>\n\n		 </ion-list>\n\n\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n<ion-row>\n\n    <ion-col>\n\n		<ion-list>\n\n		      <ion-item>\n\n		        <ion-label>Profesion</ion-label>\n\n		        <ion-select [(ngModel)]="nuevoProspecto.profesion" interface="action-sheet">\n\n				    	<ion-option *ngFor="let profesion of profesiones" value="{{profesion.profesion}}">{{profesion.profesion}}\n\n				   	</ion-option>\n\n			    </ion-select>\n\n		      </ion-item>\n\n		 </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-grid>\n\n	\n\n	<ion-input type="number" placeholder="Agrega el Celular de la Persona" [(ngModel)]="nuevoProspecto.telefono">\n\n        <!-- (keyup.enter)="addcelular($event.target.value)" -->\n\n	</ion-input>\n\n	<br><br><br><br><br>\n\n\n\n	\n\n\n\n   			<button icon-start="" ion-button color="addcolor" full large  (click)="createContact(nuevoProspecto)"><ion-icon name="list-box"></ion-icon>Agregar a la Lista</button>\n\n\n\n	\n\n</ion-content>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\crear\crear.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_agregar_prospecto_agregar_prospecto_service__["a" /* AgregarProspectoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_agregar_prospecto_agregar_prospecto_service__["a" /* AgregarProspectoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_autenticacion_autenticacion_service__["a" /* Autenticacion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_autenticacion_autenticacion_service__["a" /* Autenticacion */]) === "function" && _d || Object])
    ], CrearPage);
    return CrearPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=crear.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_agregar_prospecto_agregar_prospecto_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__ = __webpack_require__(58);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaPage = (function () {
    function ListaPage(navCtrl, aps, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.aps = aps;
        this.auth = auth;
        this.auth.fnSesion.subscribe(function (sesion) {
            if (sesion) {
                _this.listaContactos$ = _this.aps.getContactList(sesion.uid) //DB List
                    .snapshotChanges() // Key and Value
                    .map(function (changes) {
                    return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
                });
            }
        });
    }
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\lista\lista.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Lista\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n  <ion-list>\n\n\n    <ion-item-divider color="light">Prospectos</ion-item-divider>\n\n    <ion-card *ngFor="let contacto of listaContactos$ | async">\n    		<ion-card-content>\n    			<ion-row>\n    				<ion-col col-1>\n    				<ion-icon name="person" item-start></ion-icon>\n    				</ion-col>\n    				<ion-col col-10>\n    					<p>{{contacto.nombre}} {{contacto.apellido}}</p>\n    				</ion-col>\n    				<!-- <ion-col col-5>\n    					<p></p>\n    				</ion-col> -->\n    				<ion-col col-1>\n    				</ion-col>\n 				</ion-row>\n 				<ion-row>\n 					<ion-col col-1>\n    				<ion-icon [name]="contacto.icon" item-start></ion-icon>\n    				</ion-col>\n    				<ion-col col-6>\n    					<p>{{contacto.profesion}}</p>\n    				</ion-col>\n    				<ion-col col-4>\n    					<p>{{contacto.telefono}}</p>\n    				</ion-col>\n    				<ion-col col-1>\n    				</ion-col>\n 				</ion-row>\n\n  			</ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\lista\lista.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_agregar_prospecto_agregar_prospecto_service__["a" /* AgregarProspectoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__["a" /* Autenticacion */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarProspectoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgregarProspectoService = (function () {
    //Validar tipos de datos con el item.module.ts
    function AgregarProspectoService(afd) {
        this.afd = afd;
        // code...
    }
    AgregarProspectoService.prototype.getContactList = function (sUserID) {
        //return this.apListRef;
        return this.afd.list('/listaprospectos/', function (ref) { return ref.orderByChild('uid').equalTo(sUserID); });
    };
    AgregarProspectoService.prototype.addContactToList = function (nuevoProspecto) {
        //return this.apListRef.push(nuevoProspecto);
        return this.afd.list('/listaprospectos/').push(nuevoProspecto);
    };
    AgregarProspectoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AgregarProspectoService);
    return AgregarProspectoService;
}());

//# sourceMappingURL=agregar-prospecto.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_crear__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfesionesPage = (function () {
    function ProfesionesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.items = [
            {
                'title': 'Maneje Uber',
                'icon': 'car',
                'description': 'Alguien que sepas que maneje Uber, o tenga algo que ver con Uber',
            },
            {
                'title': 'Analice Datos',
                'icon': 'analytics',
                'description': 'Analice Datos en una Empresa',
            },
            {
                'title': 'Haga Picnic',
                'icon': 'basket',
                'description': 'Alguien que recuerdes en un picnic',
            },
            {
                'title': 'Tome Cerveza',
                'icon': 'beer',
                'description': 'Alguien que recuerdes tomando mucha cerveza',
            },
            {
                'title': 'Monte Bicicleta',
                'icon': 'bicycle',
                'description': 'Vaya a la ciclovia o monte mucho e bicicleta',
            },
            {
                'title': 'Lee Libros',
                'icon': 'book',
                'description': 'Alguien a quien le guste leer mucho',
            },
            {
                'title': 'Maquille Profesionalmente',
                'icon': 'brush',
                'description': 'Le Guste maquillar por profesion o hobby',
            },
            {
                'title': 'Sabe Mecanica',
                'icon': 'build',
                'description': 'Que sepa mecanica, tenga taller o con familiar mecanico',
            },
            {
                'title': 'Monte Bus',
                'icon': 'bus',
                'description': 'Que lo recuerdes montado en un bus',
            },
            {
                'title': 'Tome Tinto',
                'icon': 'cafe',
                'description': 'Alguien que le guste mucho el tinto',
            },
            {
                'title': 'Call Center',
                'icon': 'call',
                'description': 'Trabaje en un Call Center o reciba muchas llamadas',
            },
            {
                'title': 'Sepa Fotografía',
                'icon': 'camera',
                'description': 'Sepa de Fotografia, sea profesional tomando fotos',
            },
            {
                'title': 'Super Mercado',
                'icon': 'cart',
                'description': 'Trabaje para un SuperMercado en cualquier area',
            },
            {
                'title': 'Trabaje Valores',
                'icon': 'cash',
                'description': 'Tenga o Trabaje en Casa de Cambio',
            },
            {
                'title': 'Pinte Cuadros',
                'icon': 'color-palette',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'title': 'Obras Construccion',
                'icon': 'construct',
                'description': 'Trabe en Obras de Construcción',
            },
            {
                'title': 'Peluqueria Estilista',
                'icon': 'cut',
                'description': 'Tenga o Trabaje en peluquería',
            },
            {
                'title': 'Optómetra Optica',
                'icon': 'eye',
                'description': 'Trabaje con los ojos con gafas y más',
            },
            {
                'title': 'Community Manager',
                'icon': 'logo-facebook',
                'description': 'Maneje Redes Sociales como profesión',
            },
            {
                'title': 'Bombero Socorrista',
                'icon': 'flame',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'title': 'Ingenieria Electrica',
                'icon': 'flash',
                'description': 'Sepa de Voltajes y cosas electricas',
            },
            {
                'title': 'Químico Laboratorio',
                'icon': 'flask',
                'description': 'Sea Quimico de algun tipo',
            },
            {
                'title': 'Jardinería Plantas',
                'icon': 'flower',
                'description': 'Venda plantas o flores para vivir, sea Jardinero',
            },
            {
                'title': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'title': 'Madera Carpintero',
                'icon': 'hammer',
                'description': 'Trabaje con Madera',
            },
            {
                'title': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'title': 'Amor Pasado',
                'icon': 'heart',
                'description': 'Algun Exnovio(a) o amor del pasado',
            },
            {
                'title': 'Bienes Raices',
                'icon': 'home',
                'description': 'Trabaje comprando o vendiendo bienes raices',
            },
            {
                'title': 'Llaves Cerraduras',
                'icon': 'key',
                'description': 'Trabaje con Cerraduras y Llaves',
            },
            {
                'title': 'Tecnología Sistemas',
                'icon': 'laptop',
                'description': 'Sabe de sistemas y tecnología, programacion, software',
            },
            {
                'title': 'Soldado Militar',
                'icon': 'medal',
                'description': 'Alguien que haya o este en el ejercito',
            },
            {
                'title': 'Medico Especialista',
                'icon': 'medkit',
                'description': 'Tiene alguna especialidad en medicina o simplemente es médico',
            },
            {
                'title': 'Cantante Musico',
                'icon': 'microphone',
                'description': 'Hayas visto cantar en algun lado',
            },
            {
                'title': 'Toca Instrumentos',
                'icon': 'musical-notes',
                'description': 'Toca algun instrumento y sabe de musica',
            },
            {
                'title': 'Vegetariano Verduras',
                'icon': 'nutrition',
                'description': 'Es vegetariano, Vegano o solo come verduras',
            },
            {
                'title': 'Ayuda Mascotas',
                'icon': 'paw',
                'description': 'Cuida los animalitos o tiene muchas mascotas',
            },
            {
                'title': 'Vende Celulares',
                'icon': 'phone-portrait',
                'description': 'Vende Celulares, Accesorios o todo con telefonos inteligentes',
            },
            {
                'title': 'Pizzero Pizzeria',
                'icon': 'pizza',
                'description': 'Tiene que ver con la industria de la pizza',
            },
            {
                'title': 'Azafata Piloto',
                'icon': 'plane',
                'description': 'Tiene que ver con la industria de la aviacion',
            },
            {
                'title': 'Vende Ropa',
                'icon': 'pricetags',
                'description': 'Vende Ropa en General',
            },
            {
                'title': 'Mesero Restaurante',
                'icon': 'restaurant',
                'description': 'Trabaja en un restaurante o es dueño de alguno',
            },
            {
                'title': 'Recien Graduado',
                'icon': 'school',
                'description': 'Está Estudiando o Recién Graduado de la Universidad',
            },
            {
                'title': 'Costura Confeccion',
                'icon': 'shirt',
                'description': 'Confecciona o tiene taller de costura',
            },
            {
                'title': 'Carro Velocidad',
                'icon': 'speedometer',
                'description': 'Piloto de Autos o le guste la Velocidad y los Carros',
            },
            {
                'title': 'Deportista Rendimiento',
                'icon': 'tennisball',
                'description': 'Deportista de Alto Rendimiento',
            },
            {
                'title': 'Youtuber Animador',
                'icon': 'logo-youtube',
                'description': 'Youtuber o Animador en Videos en Redes Sociales',
            },
        ];
    }
    ProfesionesPage.prototype.irACrearPage = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__crear_crear__["a" /* CrearPage */], { item: item });
    };
    ProfesionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profesiones',template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\profesiones\profesiones.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Profesiones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <br>\n  <ion-list>\n  	<ion-list-header>¿A quien conoces que?</ion-list-header>\n    <button ion-item *ngFor="let item of items" icon-start\n      (click)=irACrearPage(item) >\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{ item.title }}\n    </button>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\profesiones\profesiones.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfesionesPage);
    return ProfesionesPage;
}());

//# sourceMappingURL=profesiones.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//@IonicPage()
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.user = {
            email: "",
            password: ""
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.fnRegister = function () {
        var _this = this;
        this.auth.fnRegisterUser(this.user.email, this.user.password)
            .then(function (user) {
            console.log("Usuario Creado");
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.fnLogin = function () {
        var _this = this;
        this.auth.fnLoginUser(this.user.email, this.user.password)
            .then(function (user) {
            console.log("Sesión Activa");
            // Validar si la sesion esta activa, si no direcciona al Login
            _this.auth.fnSesion.subscribe(function (sesion) {
                if (sesion) {
                    //Ir a profesiones
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
            });
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: err.messaje,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Acceso</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding><br><br><br><br><br><br>\n\n    <ion-list>\n\n        <form>\n\n            <ion-item href="#">\n\n                <ion-label floating></ion-label>\n\n                <ion-input placeholder="Email" type="text" autocapitalize="off" required\n\n                name="email" [(ngModel)]="user.email" ></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item href="#">\n\n                <ion-label floating></ion-label>\n\n                <ion-input placeholder="Contraseña" type="password" required\n\n                name="password" [(ngModel)]="user.password" ></ion-input>\n\n            </ion-item>\n\n<br><br>\n\n            <div>\n\n                <button type="submit" ion-button (click)="fnLogin()"\n\n                block color="primary" large full>Iniciar Sesión</button>\n\n\n\n                <button type="submit" ion-button (click)="fnRegister()"\n\n                block color="secondary" large full>Registrarse</button>\n\n            </div>\n\n        </form>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__["a" /* Autenticacion */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__enviroment__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_agregar_prospecto_agregar_prospecto_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_autenticacion_autenticacion_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__["a" /* CrearPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__["a" /* ProfesionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__enviroment__["a" /* firebaseConfig */], 'lista-prospectos'),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__["a" /* CrearPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__["a" /* ProfesionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__services_agregar_prospecto_agregar_prospecto_service__["a" /* AgregarProspectoService */],
                __WEBPACK_IMPORTED_MODULE_17__services_autenticacion_autenticacion_service__["a" /* Autenticacion */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_autenticacion_autenticacion_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //----- INICIO
            // Validar si la sesion esta activa, si no direcciona al Login
            _this.auth.fnSesion.subscribe(function (sesion) {
                if (!sesion) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            //----- FIN
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\EMPRESA TECNOLOGIA\DESARROLLO WEB\Mis Negocios de Tecnologia\ABC GIT Clones\lista-prospectos-networkmarketing\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__services_autenticacion_autenticacion_service__["a" /* Autenticacion */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyB4C6vu6f1sVh8VfoqBJc2Cr0SOsKXwhXo",
    authDomain: "lista-prospectos.firebaseapp.com",
    databaseURL: "https://lista-prospectos.firebaseio.com",
    projectId: "lista-prospectos",
    storageBucket: "",
    messagingSenderId: "879756516909"
};
//# sourceMappingURL=enviroment.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autenticacion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as firebase from 'firebase/app';
var Autenticacion = (function () {
    function Autenticacion(afAuth) {
        this.afAuth = afAuth;
        // code...
    }
    Autenticacion.prototype.fnRegisterUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            console.log("Usuario creado correctamente =D");
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    Autenticacion.prototype.fnLoginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.resolve(err); });
    };
    Object.defineProperty(Autenticacion.prototype, "fnSesion", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Autenticacion.prototype.fnLogout = function () {
        this.afAuth.auth.signOut()
            .then(function () {
            console.log("Cerrar Sesión");
        });
    };
    Autenticacion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], Autenticacion);
    return Autenticacion;
}());

//# sourceMappingURL=autenticacion.service.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map