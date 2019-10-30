import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  constructor(private http: HttpClient) { 
   this.cargarComputadores();
   this.cargarCelulares();
   this.cargarCamaras();
   this.cargarAccesorios();
  }

  compu:any={}
  private cargarComputadores(){
    this.http.get('https://tiendaapp-70086.firebaseio.com/computadores.json')
    .subscribe((res:any[])=>{
      this.compu=res;
      console.log(this.compu);
      ;
    })
  }

  celulares={}
  private cargarCelulares(){
    this.http.get('https://tiendaapp-70086.firebaseio.com/celulares.json')
    .subscribe((cel:any[])=>{
     this.celulares=cel;
     console.log(this.celulares);
    })
  }

  camaras={}
  private cargarCamaras(){
    this.http.get("https://tiendaapp-70086.firebaseio.com/camaras.json")
    .subscribe((res:any[])=>{
     this.camaras=res;
    })
  }

  accesorios={}
  private cargarAccesorios(){
   this.http.get("https://tiendaapp-70086.firebaseio.com/accesorios.json")
   .subscribe((acces:any[])=>{
    this.accesorios=acces;
   })
  }
}
