import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {

  searchHeroe:any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _heroesService: HeroesService) 
  { 

  }

  ngOnInit() 
  {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.id;
      this.searchHeroe = this._heroesService.searchHeroes(params.id);
      console.log(this.searchHeroe);
    })
  }

  viewHero(index: number)
  {
    this.router.navigate( ['heroe', index] );
  }


}
