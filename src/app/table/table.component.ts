import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() appear:number = 0;
  @Input() wordtofilter:string = '';

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

  jsonInfo = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.aux = this.jsonInfo.filter(x => x.name.includes(this.wordtofilter));
  }

  ngOnInit(): void {
    this.aux = this.options[this.appear]();
  }

}