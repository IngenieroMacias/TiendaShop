import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { productDescripcion } from 'src/app/interfaces/productocompleto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  producto:productDescripcion;
  constructor(private route:ActivatedRoute,public productoService:ProductoServiceService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros=>{
      this.productoService.getProductos(parametros['id'])
    .subscribe((producto:productDescripcion)=>{
      this.producto=producto;
       console.log(producto)
    })
    })
  
  }

}
