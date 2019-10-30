import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.scss']
})
export class AccesoriosComponent implements OnInit {

  constructor(public infoPaginaService:InfopaginaService, public prodServ:ProductoServiceService) { }

  ngOnInit() {
  }

}
