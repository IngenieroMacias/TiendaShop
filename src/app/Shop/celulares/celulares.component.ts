import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.scss']
})
export class CelularesComponent implements OnInit {

  
  constructor(public prodServ:ProductoServiceService) { }

  ngOnInit() {
  }

}
