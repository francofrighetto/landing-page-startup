import { Contacto } from "./Contacto";

export class Persona{
    id_persona:number;
    nombre:String;
    apellido:String;
    titulo:String;
    copyright?:string;
    contacto:Contacto=new Contacto;




    // constructor(id:number, nombre:String, apellido:String, titulo:String,
    //     usuario:String,
    //     contraseña: String){
    //     this.id_persona=id;
    //     this.nombre=nombre;
    //     this.apellido=apellido;
    //     this.titulo=titulo;
    //     this.usuario=usuario;
    //     this.contraseña=contraseña;
    // }
}
