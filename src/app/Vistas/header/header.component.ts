import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public telefono:string;
  public email:string;
  public direccion:string;
  public moneda:string;
  public cuenta:string;
  public Busqueda:string;
  public ProductoFavorito:string;



  constructor() { 
    this.telefono="6618432";
    this.email="ingenieromacias@gmail.com";
    this.direccion="Diagonal 31f-80d-09 Barrio Recreo";
    this.moneda="COP";
    this.cuenta="Cuenta";
    this.Busqueda="Busqueda";
    this.ProductoFavorito="Favoritos";
  }

  ngOnInit() {
  }

}
