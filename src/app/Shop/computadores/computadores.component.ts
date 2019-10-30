import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.scss']
})
export class ComputadoresComponent implements OnInit {

  constructor(public productoService:ProductoServiceService) { }

  ngOnInit() {
  }

}
