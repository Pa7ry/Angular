import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public _spoti: SpotifyService) {

  }
  
  
  buscarArtista(busqueda, resultados) {
    
    busqueda= '';

    resultados = [];

    console.log(this.busqueda)

    this._spoti.getArtistas(this.busqueda).subscribe(
      (resp: any) => {
        console.log(resp); 
        this.resultados = resp;
      });

   }
  ngOnInit() {
  }

}
