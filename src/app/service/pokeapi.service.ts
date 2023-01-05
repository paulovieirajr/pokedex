import { environment } from './../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((pokemon: any) => {
          this.getApiPokemon(pokemon.url).subscribe(
            (res) => (pokemon.status = res)
          );
        });
      })
    );
  }

  public getApiPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
