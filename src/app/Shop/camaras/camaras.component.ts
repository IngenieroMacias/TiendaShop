import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.scss']
})
export class CamarasComponent implements OnInit {

  constructor(public infoPaginaService:InfopaginaService, public productServ:ProductoServiceService) { }

  ngOnInit() {
  }

}
