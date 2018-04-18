import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  artista = {};
  canciones: any[] = [];
  spotiUrl: string = 'https://api.spotify.com/v1/';
  token: string = 'BQA5zUY409AfUjCiz8W6JBYlFuweI3JK55JvwzcycVwIlacnK5o_sxTHZLGSMEnoBtT6oMpo2sb_IJWutJA';

  constructor(public _http: HttpClient) {
    
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': `Bearer ${ this.token }`
    });
    return headers;
  }

  getTrak(id: string) {

    let url = `${ this.spotiUrl }artists/${ id }/top-tracks?country=ES`;

    let headers = this.getHeaders();

    return this._http.get(url, { headers });

  };

  getArtista(id: string) {

    let url = `${ this.spotiUrl }artists/${ id }`

    let headers = this.getHeaders();

    return this._http.get(url, { headers });
  }
  
  getArtistas(busqueda: string) {

    let url = `${ this.spotiUrl }search?query=${ busqueda }&type=artist&limit=10`

    let headers = this.getHeaders();

    return this._http.get(url, { headers }).map((resp: any) =>{ 
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }

}