import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.services';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};

  canciones: any = [];

  constructor(private activatedRoute: ActivatedRoute,
              public _spoti: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params.map( params => params['id']).subscribe(id =>{
        this._spoti.getArtista(id).subscribe( artista => {
          this.artista = artista;
          console.log(artista);
        });
        this._spoti.getTrak(id).subscribe( canciones=> {
          this.canciones = canciones.tracks;
          console.log(this.canciones); 
          console.log(this.canciones[0].album.images[1].url)

        } )
    });

  }

}
