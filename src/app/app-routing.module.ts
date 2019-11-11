import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Pagina/inicio/inicio.component';
import { ProductosComponent } from './Pagina/productos/productos.component';
import { CarritoComponent } from './Pagina/carrito/carrito.component';
import { TiendaComponent } from './Pagina/tienda/tienda.component';
import { ContactoComponent } from './Pagina/contacto/contacto.component';
import { ComputadoresComponent } from './Shop/computadores/computadores.component';
import { CelularesComponent } from './Shop/celulares/celulares.component';
import { CamarasComponent } from './Shop/camaras/camaras.component';
import { AccesoriosComponent } from './Shop/accesorios/accesorios.component';



const routes: Routes = [
  {path:'home',component:InicioComponent},
  {path:'carrito',component:CarritoComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'productos/:id',component:ProductosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'computadores',component:ComputadoresComponent},
  {path:'celulares',component:CelularesComponent},
  {path:'camaras',component:CamarasComponent},
  {path:'accesorios',component:AccesoriosComponent},
  {path:'**', pathMatch:'full',redirectTo:'Page404Component'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
