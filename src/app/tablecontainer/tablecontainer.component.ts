import { Component, Input, OnInit, EventEmitter, Output, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tablecontainer',
  templateUrl: './tablecontainer.component.html',
  styleUrls: ['./tablecontainer.component.scss']
})
export class TablecontainerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() appear: number = 0;
  @Output() destroyed = new EventEmitter<void>();

  

  wordtofilter:string = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnDestroy(): void {
    this.destroyed.emit();
  }

  ngOnInit(): void {
    
  }

}
