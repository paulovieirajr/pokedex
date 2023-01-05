import { environment } from './../../environment/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/service/pokeapi.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlPokemonSpecies: string ='https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private pokeApiservice: PokeapiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    const pokemon = this.pokeApiservice.getApiPokemon(
      `${this.urlPokemon}/${id}`
    );
    const name = this.pokeApiservice.getApiPokemon(
      `${this.urlPokemonSpecies}/${id}`
    );

    return forkJoin([pokemon, name]).subscribe(
      (res) => {
      this.pokemon = res;
      this.isLoading = true;
    },
      (err) => {
        this.apiError = true;
        this.isLoading = false;
      }
    );

  }
}
