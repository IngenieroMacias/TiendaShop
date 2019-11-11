import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/infoPagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  
  info:InfoPagina={};
  cargada:boolean=true;
  constructor(private http:HttpClient) {
   this.cargarInfo();
  }

  private cargarInfo(){

    this.http.get('../../assets/data/data_pagina.json')
    .subscribe((resp:InfoPagina)=>{
      this.info=resp;

      setTimeout(() => {
        this.cargada=false;
      }, 2000);
    });
  }
  
  // prod:any={}
  // private cargarProductos(){
  //  this.http.get('https://tiendaapp-70086.firebaseio.com/productos.json')
  //  .subscribe((productos:any)=>{
  //   this.prod=productos;
  //   console.log(this.prod);
  //  })
  // }


}
