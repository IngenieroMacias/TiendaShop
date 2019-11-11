import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.scss']
})
export class ComputadoresComponent implements OnInit {

  constructor(public productoService:ProductoServiceService, private route:ActivatedRoute) { }
  

  ngOnInit() {

  }

}
