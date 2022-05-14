import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() appear: number = 0;
  @Input() wordtofilter: string = '';

  jsonInfo: Hero[] = [];

  aux = [{
    name: '',
    age: 0,
    secretIdentity: ''
  }];

  options: any = {
    0: () => [],
    1: () => [this.jsonInfo[0]],
    2: () => this.jsonInfo
  }
  
  constructor(private heroesSerice: HeroesService) {
    heroesSerice.get().subscribe(data => {
      this.jsonInfo = data;
      this.aux = this.options[this.appear]();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.aux = this.jsonInfo.filter(x => x.name.includes(this.wordtofilter));
  }

  ngOnInit(): void {
  }

}

interface Hero {
  name: string,
  age: number,
  secretIdentity: string,
  powers: string[]
}