import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public listPokemons: any;
  private filteredPokemons: any;
  public p: number = 1;

  public apiError: boolean = false;

  constructor(private pokeapiservice: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapiservice.apiListAllPokemons.subscribe(
      (res) => (
        this.filteredPokemons = res.results,
        this.listPokemons = this.filteredPokemons,
        this.apiError = false
        ),
        (err) => (this.apiError = true)
    );
  }

  public search(value: string): void {
    this.p = 1;
    this.listPokemons = this.filteredPokemons.filter(
      (pokemon: any) => pokemon.name.includes(value.toLowerCase())
    );
  }
}
