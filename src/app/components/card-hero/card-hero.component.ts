import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) 
  { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() 
  {

  }

  viewHero()
  {
    // console.log(this.index);
     this.router.navigate(['/heroe', this.index])
    //this.heroeSeleccionado.emit(this.index)
  }

}
