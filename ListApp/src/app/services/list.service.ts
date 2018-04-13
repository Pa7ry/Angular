import {  Injectable } from '@angular/core';

@Injectable()
export class ListsService {
    private lists: any[] = [
        {
            titulo: 'Mudanza',
            descripcion: "Cosas que necesito antes de mudarme a mi nueva casa.",
            lista: [
                    "Ropa", "Sábanas", "Toallas", "Cosas de aseo", "Cubiertos", "Algún plato más",
                    "Medir cockpit", "Comprar alfombra", "Cartas de amor de mi amada novia"
                ]
        },
        {
            titulo: 'Planes de novios',
            descripcion: "Planes divertidos para hacer juntos.",
            lista: [
                    "Skate", "Ir al cine", "Ir al VIPS a merendar tortitas", "Hacer senderismo",
                    "Coger el hotel", "Bajar música para el coche", "Salir a correr"
                ]
        }
    ]
    
    constructor() {
        console.log('Servicio listo para usarse');
    }

    getList(): List[] {
        return this.lists;
    }

    getIdList = ( id: number ) => this.lists[id];
}

export interface List {
    titulo: string;
    descripcion: string;
    lista: any;
}
