import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pname : any;
  pokemons: any[] = [];
  imgg! : string;
  isActive : boolean = false;
  activePokemon : any = null;
  i : any;
  isFind : boolean = true;
  

  constructor(){
    this.i = 0; // Initialize counter
    this.fetchPokemons();
  }

  fetchPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.i}&limit=250`)
      .then((res) => res.json())
      .then((data) =>{
        // Iterate through each pokemon
        data.results.forEach((pokemon:any) => {
          this.fetchPokemonDetails(pokemon.url);
          console.log(this.pokemons);
        });
      })
      .catch((error) => {
        console.error('Error fetching Pokemon:', error);
      });
  }
  
  fetchPokemonDetails(url:any) {
    fetch(url)
      .then((res) => res.json())
      .then((pokemonData) => {
        this.pokemons.push(pokemonData);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon details:', error);
      });
  }

  active(poke: any) {
    this.isActive = !this.isActive;
    if (poke) {
      this.activePokemon = poke;
    }
  }

  search(){
    if(this.pname === ""){
      this.isFind = true;
      return;
    }
    this.isFind = false;
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pname.toLowerCase()}`)
    .then((res) => res.json())
    .then((data) =>{
      this.pokemons = [data];
    })
    .catch((error) => {
      alert('Pokemon not found')
      this.isFind = true;
      console.error('Error fetching Pokemon details:', error);
    });
  }
  
  back(){
    this.isFind = true;
    window.location.reload();
  }
}
