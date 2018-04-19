import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas: any[] = [];
  artista = {};
  canciones: any[] = [];
  spotiUrl = 'https://api.spotify.com/v1/';
  token = 'BQAPR3uHspbTVFTnHewmXs0jVdCnBpe8xFheMjgHAE7yly-uZBEYqvLkJwVZRGfi9FAC4EfUCcrTauiX75A';

  constructor(public _http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      authorization: `Bearer ${this.token}`
    });
    return headers;
  }

  getTrak(id: string) {
    const url = `${this.spotiUrl}artists/${id}/top-tracks?country=ES`;

    const headers = this.getHeaders();

    return this._http.get(url, { headers });
  }

  getArtista(id: string) {
    const url = `${this.spotiUrl}artists/${id}`;

    const headers = this.getHeaders();

    return this._http.get(url, { headers });
  }

  getArtistas(busqueda: string) {
    const url = `${this.spotiUrl}search?query=${busqueda}&type=artist&limit=10`;

    const headers = this.getHeaders();

    return this._http.get(url, { headers }).map((resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }
}
