import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() appear: number = 0;
  @Output() destroyed = new EventEmitter<void>();
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

  ngOnInit(): void {
    if (this.appear === 0) {
      this.jsonInfo = [];
    }
    else {
      if (this.appear === 1) {
        this.jsonInfo = [this.jsonInfo[0]];
      }
    }
  }

  ngOnDestroy(): void {
    this.destroyed.emit();
  }

}
