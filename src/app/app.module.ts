import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import {HttpClientModule} from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Vistas/header/header.component';
import { MenuComponent } from './Vistas/menu/menu.component';
import { FooterComponent } from './Vistas/footer/footer.component';
import { InicioComponent } from './Pagina/inicio/inicio.component';
import { TiendaComponent } from './Pagina/tienda/tienda.component';
import { ProductosComponent } from './Pagina/productos/productos.component';
import { CarritoComponent } from './Pagina/carrito/carrito.component';
import { Page404Component } from './Pagina/page404/page404.component';
import { ContactoComponent } from './Pagina/contacto/contacto.component';
import { ComputadoresComponent } from './Shop/computadores/computadores.component';
import { CelularesComponent } from './Shop/celulares/celulares.component';
import { CamarasComponent } from './Shop/camaras/camaras.component';
import { AccesoriosComponent } from './Shop/accesorios/accesorios.component';
import { MenuShopComponent } from './Vistas/menu-shop/menu-shop.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    TiendaComponent,
    ProductosComponent,
    CarritoComponent,
    Page404Component,
    ContactoComponent,
    ComputadoresComponent,
    CelularesComponent,
    CamarasComponent,
    AccesoriosComponent,
    MenuShopComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
