import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

/* El OnInit es el primer ciclo de vida del componente */
export class ListComponent implements OnInit {

  public heros: string[] = ['Ironman', 'Spiderman', 'American Cap', 'Ant Man']

  constructor() {
    console.log('constructor')
  }
  
  /* se utiliza ara inicializar cosas */
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  public deleteHero() {
    console.log('delete...')
    this.heros.pop()
  }

}
