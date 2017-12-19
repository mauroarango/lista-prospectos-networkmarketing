import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { CrearPage } from '../crear/crear';
import { MenuPopoverPage } from '../menu-popover/menu-popover';


@Component({
  selector: 'page-profesiones',
  templateUrl: 'profesiones.html'
})
export class ProfesionesPage {

	items = [];

 	constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController)
 				 {

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
    ]

  }

  irACrearPage (item) {
    this.navCtrl.setRoot(CrearPage, { item });
  }

  fnMenuPopover(myEvent){
    let popover = this.popoverCtrl.create(MenuPopoverPage);
    popover.present({
      ev : myEvent
    });
  }

}


