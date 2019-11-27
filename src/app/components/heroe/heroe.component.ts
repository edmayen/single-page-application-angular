import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  isDC: boolean = false;
  isMarvel: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) 
  {   
    activatedRoute.params.subscribe( params => {
      this.heroe = _heroesService.getHeroe(params.id);
      if(this.heroe.casa == 'DC')
      {
        this.isDC = true; 
        this.isMarvel = false;
      }
      else
        if(this.heroe.casa == "Marvel")
        {
          this.isDC = false;
          this.isMarvel = true;
        }
    })
  }

  ngOnInit() {
  }

}
