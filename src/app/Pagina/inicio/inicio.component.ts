import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(public infoPaginaService:InfopaginaService, public productoService:ProductoServiceService) {
    
    
   }



  
  ngOnInit() {
  }

  

}
