import { Injectable } from '@angular/core';
import { HeroesComponent } from '../components/heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroe[] = [
    {
      nombre: "Batman",
      bio: "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Blinded in a childhood accident, attorney-at-law Matt Murdock protects Hell’s Kitchen as the masked vigilante, Daredevil.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Aquaman",
      bio: "The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Green Lantern",
      bio: "Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Wolverine",
      bio: "From the northern wilderness of Canada hails one of the gruffest, most irascible, totally cynical and brooding member of the X-Men ever to grace the team with his presence.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  constructor() 
  { 

  }

  getHeroes(): Heroe[]
  {
    return this.heroes;
  }

  getHeroe(i: number): Heroe
  {
    return this.heroes[i];
  }

  searchHeroes(idSearch: string): Heroe[]
  {
    let heroesArg: Heroe[] = [];
    idSearch = idSearch.toLowerCase();
    for(let i = 0; i < this.heroes.length; i++)
    {
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf( idSearch ) >= 0)
      {
        heroe.idx = i;
        heroesArg.push( heroe )
      }
    }
    return heroesArg;
  }
}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}