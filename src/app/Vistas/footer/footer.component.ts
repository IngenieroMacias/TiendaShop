import { Component, OnInit } from '@angular/core';
import {InfopaginaService} from '../../services/infopagina.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public infoPaginaService:InfopaginaService) { }

  ngOnInit() {
  }

}
