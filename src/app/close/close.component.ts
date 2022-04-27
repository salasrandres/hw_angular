import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss']
})
export class CloseComponent implements OnInit {

  @Output() click = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrar(flag: string) {
    this.click.emit(flag);
  }
}
